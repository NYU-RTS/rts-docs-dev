# LLM on HPC

## Table of Contents

1. [NYU Greene Overview](#nyu-greene-overview)
2. [Environment Setup](#environment-setup)
3. [Data Management on NYU Storage](#data-management-on-nyu-storage)
4. [SLURM Job Configuration](#slurm-job-configuration)
5. [Model Inference and Demonstration](#model-inference-and-demonstration)
6. [Single-Node Multi-GPU Setup](#single-node-multi-gpu-setup)
7. [Multi-Node Distributed Setup](#multi-node-distributed-setup)
8. [Fine-Tuning LLMs](#fine-tuning-llms)
9. [Performance Optimization](#performance-optimization)
10. [Monitoring and Troubleshooting](#monitoring-and-troubleshooting)
11. [Remote Access](#remote-access)

---

## NYU Greene Overview

### Cluster Specifications
**Greene** serves as NYU's flagship HPC system with exceptional capabilities:
- **2.088 petaflops** of CPU performance 
- **4+ petaflops** total with GPU acceleration
- **332 operational GPU cards** across 83 GPU nodes
- **292 NVIDIA RTX 8000 GPUs** (48GB memory each) - **Primary recommendation for LLMs**
- **40 NVIDIA V100 GPUs** (32GB memory each)
- **200Gbps HDR InfiniBand** networking for low-latency distributed computing
- **7.3 petabytes IBM GPFS** + **VAST all-flash storage** optimized for AI workloads

### GPU Resource Allocation by Hardware Type
- **RTX 8000 nodes**: Up to 4 GPUs, 48 cores, 384GB RAM (**optimal for LLM work**)
- **V100 nodes**: Up to 4 GPUs, 48 cores, 369GB RAM  
- **A100 nodes**: Up to 4 GPUs, 64 cores, 490GB RAM (newer, limited availability)
- **AMD MI50 nodes**: Up to 8 GPUs, 96 cores, 490GB RAM (highest per-job allocation)

Each GPU node provides **384GB system RAM** with **dual Intel Cascade Lake processors**, ensuring sufficient memory for large model operations.

### Critical: Spring 2025 AI-Focused Hardware Refresh
NYU is implementing a **major hardware refresh in Spring 2025** specifically targeting artificial intelligence and machine learning capabilities. This upgrade will provide significant computational boosts for LLM training and inference workloads, making it an optimal time for planning advanced LLM research projects.

---

## Environment Setup

### NYU Access Requirements and Policies

#### Account Eligibility
- **NYU NetID** and HPC account approval required
- **Faculty sponsorship** required for students and external collaborators
- **Full-time faculty** can directly request access
- SSH access via: `ssh <netid>@greene.hpc.nyu.edu`

#### Data Classification and Security Policies
- **Moderate Risk data**: Permitted (e.g., research data, academic collaborations)
- **High Risk data**: **Prohibited** (PII, ePHI, FERPA-protected information)
- **Sensitive datasets**: Must use Secure Research Data Environments (separate system)
- **Network restrictions**: Compute nodes cannot directly access the internet

#### Resource and Usage Policies
- **Fair-share scheduling**: Based on recent 24-hour usage patterns
- **Job time limits**: 48 hours for standard queues, 168 hours for extended queues
- **No cryptocurrency mining**: Strictly prohibited
- **Resource monitoring**: Jobs are monitored for efficiency and appropriate usage

#### Storage Quotas and Limitations
- **Home directory**: 50GB storage, 30K files (backed up)
- **Scratch space**: 5TB storage, 1M files (60-day purge, no backup)
- **VAST storage**: 2TB storage, 5M files (60-day purge, no backup)
- **Archive storage**: 2TB storage, 20K files (permanent, backed up)
- **Critical note**: The 1 million file limit on scratch requires thoughtful organization of model architectures containing many small parameter files

### Module System (Lmod)
NYU uses the Lmod module system for software management:

```bash
# Load essential modules for LLM work
module load python/intel/3.8.6
module load cuda/12.1.1
module load cudnn/8.9.0

# Check available modules
module avail
module list
```

### Unified Singularity Container Workflow (Recommended)

**NYU HPC strongly recommends Singularity containers** for ML workloads to avoid the file quota limitations that plague traditional conda environments. This approach ensures reproducibility while working within NYU's storage constraints.

#### Primary Container Strategy - PyTorch with vLLM Support

```bash
# Load Singularity module
module load singularity/3.11.3

# Option 1: PyTorch base container (recommended for most workflows)
singularity pull docker://pytorch/pytorch:2.1.0-cuda12.1-cudnn8-runtime

# Option 2: vLLM container (for inference-focused workloads)
singularity pull docker://vllm/vllm-openai:latest

# Create overlay filesystem (15GB capacity, ~500K files typical)
singularity overlay create --size 15000 ml_overlay.img

# Install packages in read-write mode (development)
singularity shell --overlay ml_overlay.img:rw pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif

# Inside container, install unified LLM package set
pip install transformers accelerate datasets
pip install vllm torch torchvision torchaudio
pip install peft bitsandbytes  # For LoRA fine-tuning
pip install ray[default]       # For distributed computing
pip install fastapi uvicorn    # For API servers
pip install vec-inf            # Vector Inference framework
exit

# Use in production (read-only mode for better performance)
singularity exec --nv --overlay ml_overlay.img:ro \
    pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python your_script.py
```

#### Key Advantages of NYU's Container Approach
- **Eliminates file quota issues**: No more conda environment file limit problems
- **Reproducible environments**: Consistent execution across different nodes
- **Pre-optimized**: CUDA 12.1.1 with cuDNN 8.9.0 provides cutting-edge GPU support
- **Efficient deployment**: Read-only overlays perform better in production
- **Unified toolchain**: Single container supports inference, fine-tuning, and distributed computing

### Python Virtual Environments (Alternative)
If not using containers, create virtual environments carefully due to file limits:

```bash
# Load Python module
module load python/intel/3.8.6

# Create virtual environment
python -m venv ~/venv/llm_env
source ~/venv/llm_env/bin/activate

# Install essential packages
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install transformers accelerate datasets vllm
pip install ray[default]  # For distributed computing
```

---

## Data Management on NYU Storage

### NYU Storage Systems Detailed Overview

#### Home Directory (`$HOME`)
- **Capacity**: 50GB storage, 30K files maximum
- **Backup**: Yes (fully backed up)
- **Usage**: Code, scripts, small configuration files only
- **Critical limitation**: **Cannot execute jobs from home directory**

#### Scratch Space (`$SCRATCH`)
- **Capacity**: 5TB storage, 1M files per user
- **Backup**: No backup provided
- **Retention**: **60-day automatic purge policy**
- **Performance**: High-throughput sequential I/O optimization
- **Usage**: Active datasets, model training checkpoints, temporary processing files
- **Best for**: Large dataset streaming during training phases

#### VAST Flash Storage (`/vast/<netid>`)
- **Capacity**: 2TB storage, 5M files per user  
- **Backup**: No backup provided
- **Retention**: **60-day automatic purge policy**
- **Performance**: High-IOPS all-NVMe system, excellent for random access
- **Usage**: Model files requiring frequent access, HuggingFace cache
- **Best for**: Pre-trained models, inference workloads, transformer architectures with many small files
- **Critical advantage**: Handles metadata-intensive operations that GPFS struggles with

#### Archive Storage
- **Capacity**: 2TB storage, 20K files maximum
- **Backup**: Yes (permanent retention)
- **Usage**: Long-term storage of completed models and datasets
- **Requirement**: Files must be consolidated into tar archives for efficient backup
- **Cost**: Included in standard allocation

#### Research Project Space (Optional)
- **Capacity**: Varies (purchased)
- **Backup**: Yes (commercial grade)
- **Cost**: $100/TB/year
- **Usage**: Collaborative storage with backup guarantees

### Optimized LLM Storage Strategy for NYU

**The 60-day purge policy** on both scratch and VAST storage requires proactive data lifecycle management:

```bash
# Recommended directory structure for LLM workflows
$HOME/
├── scripts/              # Python training/inference scripts
├── configs/             # Model configurations and hyperparameters  
├── containers/          # Singularity .sif files
└── overlays/           # Overlay filesystems (15GB each)

$SCRATCH/
├── datasets/           # Training/validation datasets (purged after 60 days)
├── checkpoints/        # Model training checkpoints (intermediate saves)
├── temp_processing/    # Temporary files during data preprocessing
└── logs/              # Training logs and outputs

/vast/$USER/
├── models/            # Pre-trained models for fast loading
├── hf_cache/          # HuggingFace cache directory  
├── inference_models/  # Active models for serving
└── results/          # Important training results (backup before purge)

# Archive (permanent storage)
/archive/$USER/
└── completed_projects/  # Tar archives of finished work
```

**Performance optimization guidelines:**
- **VAST storage**: Use for model files requiring frequent random access (transformers with many small files)
- **Scratch storage**: Use for sequential dataset streaming during training
- **Critical timing**: Archive important results before 60-day purge deadline

### Model Caching Strategy

```bash
# Set HuggingFace cache to VAST for fast model loading
export HF_HOME="/vast/$USER/hf_cache"
export TRANSFORMERS_CACHE="/vast/$USER/hf_cache"

# For large models, consider staging to scratch
export TRANSFORMERS_OFFLINE=1  # Use cached models only
```

---

## SLURM Job Configuration

### NYU SLURM Queue Structure and Policies

NYU HPC employs **SLURM Workload Manager** with sophisticated queue structures tailored for different computational needs:

#### Available Partitions
- **gpu48**: GPU jobs up to 48 hours with standard priority
- **gpu168**: Extended GPU jobs up to 7 days for longer training runs  
- **interact**: Interactive sessions up to 4 hours for development and testing
- **cpulow**: Low-priority CPU jobs for background processing

#### Fair-Share Scheduling
**Resource limits** implement fair-share scheduling considering recent 24-hour usage patterns. Jobs are prioritized based on:
- Recent resource consumption by user/group
- Job size and resource requirements  
- Queue priority and time limits

#### GPU Scheduling Strategy
For LLM workloads, **requesting any available GPU type** (`--gres=gpu:N`) typically provides faster scheduling than specifying particular models, unless specific memory requirements dictate otherwise.

```bash
# Faster scheduling (recommended)
#SBATCH --gres=gpu:4

# Specific GPU type (slower scheduling but guaranteed hardware)
#SBATCH --gres=gpu:rtx8000:4    # For models requiring 48GB memory
#SBATCH --gres=gpu:v100:4       # For models fitting in 32GB memory  
#SBATCH --gres=gpu:a100:4       # Limited availability, fastest performance
```

### NYU-Optimized SLURM Script Template

```bash
#!/bin/bash
#SBATCH --job-name=llm_workload
#SBATCH --nodes=1                    # Single node recommended for most LLM tasks
#SBATCH --ntasks-per-node=1         
#SBATCH --cpus-per-task=16          # Adjust based on GPU count (4 CPUs per GPU)
#SBATCH --mem=200GB                 # Memory per node (50GB per RTX 8000 GPU)
#SBATCH --gres=gpu:4                # Request any 4 GPUs for fastest scheduling
#SBATCH --time=24:00:00             # 24 hour time limit (max for gpu48)
#SBATCH --partition=gpu48           # Standard GPU partition
#SBATCH --output=llm_%j.out         # Output file with job ID
#SBATCH --error=llm_%j.err          # Error file with job ID

# Critical: Change to scratch directory (required for job execution)
cd $SCRATCH

# Load essential modules
module purge
module load singularity/3.11.3

# Set NYU-specific environment variables
export HF_HOME="/vast/$USER/hf_cache"           # Cache on VAST for fast access
export TRANSFORMERS_CACHE="/vast/$USER/hf_cache"
export CUDA_VISIBLE_DEVICES=0,1,2,3            # Explicitly set GPU visibility
export PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:512  # Optimize memory allocation

# Ensure cache directory exists
mkdir -p /vast/$USER/hf_cache

# Run LLM job using unified Singularity container
singularity exec --nv --overlay ml_overlay.img:ro \
    pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python your_llm_script.py

# Optional: Archive important results before 60-day purge
# tar -czf /archive/$USER/results_$(date +%Y%m%d).tar.gz important_outputs/
```

---

## Model Inference and Demonstration

### Why Instruction-Tuned Models?

Instruction-tuned models are specifically fine-tuned to:
- **Follow human instructions** without complex prompt engineering
- **Provide helpful, harmless, and honest responses**
- **Handle diverse tasks** from coding to creative writing
- **Maintain conversation context** effectively

### Phi-4: An Ideal Choice for Research

Microsoft's Phi-4 (14B parameters) offers:
- **Excellent performance** despite its smaller size compared to 70B+ models
- **Efficient resource usage** - fits on a single RTX 8000 GPU (48GB)
- **Strong instruction following** capabilities
- **Open weights** available on Hugging Face

### Complete Inference Demonstration

#### Create the Inference Script

First, create a directory for your demo scripts:

```bash
mkdir -p $HOME/llm_demos/phi4_instruction
cd $HOME/llm_demos/phi4_instruction
```

Create the main inference script (`phi4_demo.py`):

```python
#!/usr/bin/env python3
"""
phi4_demo.py - Demonstration of Microsoft Phi-4 instruction-tuned model
Author: Your Name
Date: 2025-06-07
"""

import os
import sys
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM
from datetime import datetime
import json

def setup_environment():
    """Configure environment for optimal performance"""
    # Set cache directory to VAST for faster model loading
    os.environ['HF_HOME'] = f"/vast/{os.environ.get('USER', 'default')}/hf_cache"
    os.environ['TRANSFORMERS_CACHE'] = os.environ['HF_HOME']
    
    # Ensure cache directory exists
    os.makedirs(os.environ['HF_HOME'], exist_ok=True)
    
    print(f"[{datetime.now()}] Environment configured")
    print(f"Cache directory: {os.environ['HF_HOME']}")
    print(f"Available GPUs: {torch.cuda.device_count()}")
    
    if torch.cuda.is_available():
        print(f"GPU Name: {torch.cuda.get_device_name(0)}")
        print(f"GPU Memory: {torch.cuda.get_device_properties(0).total_memory / 1e9:.2f} GB")

def load_phi4_model():
    """Load the Phi-4 instruction-tuned model with optimizations"""
    model_id = "microsoft/phi-4"
    
    print(f"\n[{datetime.now()}] Loading Phi-4 model...")
    
    # Load tokenizer
    tokenizer = AutoTokenizer.from_pretrained(
        model_id,
        trust_remote_code=True,
        cache_dir=os.environ['HF_HOME']
    )
    
    # Configure tokenizer
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    # Load model with optimizations for inference
    model = AutoModelForCausalLM.from_pretrained(
        model_id,
        torch_dtype=torch.bfloat16,  # Use BF16 for RTX 8000 (optimized)
        device_map="auto",          # Automatic device placement
        trust_remote_code=True,
        cache_dir=os.environ['HF_HOME'],
        low_cpu_mem_usage=True     # Reduce CPU memory usage during loading
    )
    
    # Enable eval mode for inference
    model.eval()
    
    print(f"[{datetime.now()}] Model loaded successfully!")
    print(f"Model size: {sum(p.numel() for p in model.parameters()) / 1e9:.2f}B parameters")
    
    return tokenizer, model

def generate_response(tokenizer, model, prompt, **kwargs):
    """Generate a response for a given prompt"""
    # Default generation parameters
    gen_params = {
        "max_new_tokens": 256,
        "temperature": 0.7,
        "top_p": 0.9,
        "do_sample": True,
        "pad_token_id": tokenizer.pad_token_id,
        "eos_token_id": tokenizer.eos_token_id,
    }
    
    # Update with any provided parameters
    gen_params.update(kwargs)
    
    # Tokenize input
    inputs = tokenizer(prompt, return_tensors="pt", padding=True)
    inputs = {k: v.to(model.device) for k, v in inputs.items()}
    
    # Generate response
    with torch.no_grad():
        outputs = model.generate(**inputs, **gen_params)
    
    # Decode response
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Remove the prompt from the response
    if response.startswith(prompt):
        response = response[len(prompt):].strip()
    
    return response

def run_demonstrations(tokenizer, model):
    """Run various demonstration prompts"""
    
    demonstrations = [
        {
            "category": "Technical Explanation",
            "prompt": "Explain the benefits of using LoRA for fine-tuning large language models.",
            "max_new_tokens": 300
        },
        {
            "category": "Code Generation",
            "prompt": "Write a Python function that implements binary search on a sorted list. Include docstring and type hints.",
            "max_new_tokens": 400
        },
        {
            "category": "Scientific Writing",
            "prompt": "Explain how attention mechanisms work in transformer models. Use an analogy to make it accessible to beginners.",
            "max_new_tokens": 350
        },
        {
            "category": "Data Analysis",
            "prompt": "What are the key considerations when choosing between supervised and unsupervised learning for a new project?",
            "max_new_tokens": 300
        },
        {
            "category": "Research Planning",
            "prompt": "Outline a research plan for evaluating the efficiency of different LLM inference optimization techniques on HPC systems.",
            "max_new_tokens": 400
        }
    ]
    
    results = []
    
    for i, demo in enumerate(demonstrations, 1):
        print(f"\n{'='*80}")
        print(f"Demonstration {i}/{len(demonstrations)}: {demo['category']}")
        print(f"{'='*80}")
        print(f"Prompt: {demo['prompt']}")
        print(f"{'-'*80}")
        
        start_time = datetime.now()
        
        response = generate_response(
            tokenizer, 
            model, 
            demo['prompt'],
            max_new_tokens=demo['max_new_tokens']
        )
        
        generation_time = (datetime.now() - start_time).total_seconds()
        
        print(f"Response:\n{response}")
        print(f"\nGeneration time: {generation_time:.2f} seconds")
        
        # Store results
        results.append({
            "category": demo['category'],
            "prompt": demo['prompt'],
            "response": response,
            "generation_time": generation_time,
            "timestamp": datetime.now().isoformat()
        })
    
    return results

def save_results(results, output_dir="$SCRATCH/phi4_demo_results"):
    """Save demonstration results to JSON"""
    output_dir = os.path.expandvars(output_dir)
    os.makedirs(output_dir, exist_ok=True)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = os.path.join(output_dir, f"phi4_demo_{timestamp}.json")
    
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\nResults saved to: {output_file}")

def main():
    """Main execution function"""
    print("="*80)
    print("Phi-4 Instruction-Tuned Model Demonstration")
    print("NYU Greene HPC")
    print("="*80)
    
    # Setup environment
    setup_environment()
    
    # Load model
    tokenizer, model = load_phi4_model()
    
    # Run demonstrations
    results = run_demonstrations(tokenizer, model)
    
    # Save results
    save_results(results)
    
    print("\nDemonstration completed successfully!")

if __name__ == "__main__":
    main()
```

#### Create the SLURM Job Script

Create the job submission script (`submit_phi4_demo.sh`):

```bash
#!/bin/bash
#SBATCH --job-name=phi4_instruction_demo
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=100GB
#SBATCH --gres=gpu:1                    # Request any available GPU
#SBATCH --time=02:00:00                 # 2 hours should be sufficient
#SBATCH --output=phi4_demo_%j.out
#SBATCH --error=phi4_demo_%j.err
#SBATCH --mail-type=BEGIN,END,FAIL      # Email notifications
#SBATCH --mail-user=your_netid@nyu.edu  # Replace with your email

# Print job information
echo "Job started on $(date)"
echo "Running on node: $(hostname)"
echo "Job ID: ${SLURM_JOB_ID}"

# Navigate to scratch directory
cd $SCRATCH

# Create demo directory
mkdir -p phi4_instruction_demo
cd phi4_instruction_demo

# Copy demo script from home
cp $HOME/llm_demos/phi4_instruction/phi4_demo.py .

# Load required modules
module purge
module load singularity/3.11.3

# Set up environment variables
export HF_HOME="/vast/$USER/hf_cache"
export TRANSFORMERS_CACHE="$HF_HOME"
export CUDA_VISIBLE_DEVICES=0

# Print GPU information
nvidia-smi

# Run the demonstration using unified Singularity container
echo "Starting Phi-4 demonstration..."

singularity exec --nv \
    --overlay $HOME/containers/ml_overlay.img:ro \
    $HOME/containers/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python phi4_demo.py

# Check exit status
if [ $? -eq 0 ]; then
    echo "Demonstration completed successfully!"
else
    echo "Demonstration failed with exit code $?"
fi

echo "Job completed on $(date)"
```

#### Run the Demonstration

```bash
# Make the script executable
chmod +x submit_phi4_demo.sh

# Submit to the queue
sbatch submit_phi4_demo.sh

# Check job status
squeue -u $USER

# Monitor progress
tail -f phi4_demo_*.out
```

### Expected Output Examples

#### Example 1: Technical Explanation (LoRA Benefits)

**Prompt**: "Explain the benefits of using LoRA for fine-tuning large language models."

**Expected Response**:
```
LoRA (Low-Rank Adaptation) provides several significant advantages for fine-tuning large language models:

1. **Memory Efficiency**: LoRA dramatically reduces memory requirements by freezing the original model weights and only training small adapter matrices. This typically requires less than 1% of the parameters of the full model, making it possible to fine-tune models that wouldn't fit in GPU memory otherwise.

2. **Computational Speed**: Training is significantly faster since gradients only need to be computed for the LoRA parameters rather than the entire model. This can reduce training time by 3-5x compared to full fine-tuning.

3. **Model Preservation**: The original pre-trained weights remain unchanged, preserving the model's general knowledge while adding task-specific capabilities through the adapters.

4. **Storage Efficiency**: Multiple task-specific LoRA adapters can be stored and swapped at inference time, each requiring only a few MB compared to storing multiple full model copies.

5. **Training Stability**: LoRA often provides more stable training dynamics compared to full fine-tuning, with less risk of catastrophic forgetting or overfitting on small datasets.
```

### Alternative Inference Frameworks

#### vLLM for High-Performance Inference

```python
#!/usr/bin/env python3
# vllm_inference.py

from vllm import LLM, SamplingParams
import os

def run_vllm_inference():
    """Example inference with vLLM for optimized performance"""
    
    # Load model with vLLM optimizations
    llm = LLM(
        model="microsoft/phi-4",
        tensor_parallel_size=1,  # Single GPU
        gpu_memory_utilization=0.9,
        max_model_len=8192,
        trust_remote_code=True,
        dtype="bfloat16"  # Use BF16 for RTX 8000
    )
    
    # Define sampling parameters
    sampling_params = SamplingParams(
        temperature=0.7,
        top_p=0.9,
        max_tokens=512
    )
    
    # Example prompts
    prompts = [
        "Explain quantum computing in simple terms:",
        "Write a Python function to calculate fibonacci numbers:",
        "What are the key principles of machine learning?"
    ]
    
    # Generate responses (batched for efficiency)
    outputs = llm.generate(prompts, sampling_params)
    
    # Print results
    for i, output in enumerate(outputs):
        print(f"\n=== Prompt {i+1} ===")
        print(f"Prompt: {output.prompt}")
        print(f"Response: {output.outputs[0].text}")

if __name__ == "__main__":
    run_vllm_inference()
```

#### Vector Inference: Simplified Deployment Framework

The Vector Institute's [vector-inference](https://github.com/VectorInstitute/vector-inference) framework provides an easy-to-use solution for running inference servers on SLURM-managed clusters, acting as a wrapper around vLLM.

**Key Features**:
- **Simple CLI/API Interface**: Launch models with a single command
- **SLURM-Native Integration**: Automatically handles job submission and resource allocation
- **Pre-configured Models**: Supports popular models with optimized settings
- **Built-in Monitoring**: Stream performance metrics and check model status

**Installation and Basic Usage**:
```bash
# Install vector-inference (in your container or environment)
pip install vec-inf

# Launch a model (example with Phi-4)
vec-inf launch microsoft/phi-4 --gpus-per-node 1 --qos normal

# Check status
vec-inf status <job_id>

# Shutdown when done
vec-inf shutdown <job_id>
```

**Custom Configuration for NYU HPC**:
```yaml
# ~/vec_inf_nyu_config.yaml
models:
  phi-4:
    model_family: microsoft
    model_variant: phi-4
    model_type: LLM
    gpus_per_node: 1
    num_nodes: 1
    qos: normal
    time: 08:00:00
    partition: rtx8000
    model_weights_parent_dir: /vast/$USER/models
    vllm_args:
      --max-model-len: 16384
      --dtype: bfloat16
```

**Advantages for NYU HPC Users**:
1. **Simplified Workflow**: No need to write complex SLURM scripts for inference servers
2. **Automatic URL Management**: Exposes endpoints automatically when models are ready
3. **Resource Optimization**: Pre-tuned configurations for common models
4. **Easy Scaling**: Built-in support for multi-node deployments

---

## Single-Node Multi-GPU Setup

### Using PyTorch Distributed Data Parallel

```python
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP
from transformers import AutoModelForCausalLM, AutoTokenizer

def setup_distributed():
    # Initialize process group
    dist.init_process_group(backend='nccl')
    
    # Set device
    local_rank = int(os.environ['LOCAL_RANK'])
    torch.cuda.set_device(local_rank)
    
    return local_rank

def load_model_distributed(model_name, local_rank):
    # Load model and tokenizer
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.bfloat16,  # Use BF16 for RTX 8000
        device_map=f"cuda:{local_rank}"
    )
    
    # Wrap with DDP
    model = DDP(model, device_ids=[local_rank])
    
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    return model, tokenizer

# SLURM script uses:
# srun python -m torch.distributed.launch --nproc_per_node=4 script.py
```

### Using vLLM for Multi-GPU Inference

```bash
#!/bin/bash
#SBATCH --gres=gpu:4
#SBATCH --mem=200GB

cd $SCRATCH

# Start vLLM server with tensor parallelism
singularity exec --nv ml_overlay.img:ro pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    vllm serve microsoft/phi-4 \
    --tensor-parallel-size 4 \
    --gpu-memory-utilization 0.9 \
    --max-model-len 8192 \
    --dtype bfloat16 \
    --host 0.0.0.0 \
    --port 8000
```

---

## Multi-Node Distributed Setup

### Ray Cluster on Multiple Nodes

**Head Node SLURM Script** (`ray_head.sh`):
```bash
#!/bin/bash
#SBATCH --job-name=ray_head
#SBATCH --nodes=1
#SBATCH --cpus-per-task=16
#SBATCH --gres=gpu:4
#SBATCH --time=24:00:00
#SBATCH --partition=gpu48
#SBATCH --output=ray_head_%j.out

cd $SCRATCH

# Load modules
module load singularity/3.11.3

# Get head node IP
HEAD_IP=$(hostname -i)
echo "Head node IP: $HEAD_IP" > ray_head_info.txt

# Start Ray head
singularity exec --nv ml_overlay.img:ro pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    ray start --head --node-ip-address=$HEAD_IP --port=6379 \
    --dashboard-host=0.0.0.0 --dashboard-port=8265

# Keep head node alive
sleep infinity
```

**Worker Node SLURM Script** (`ray_worker.sh`):
```bash
#!/bin/bash
#SBATCH --job-name=ray_worker
#SBATCH --nodes=1
#SBATCH --cpus-per-task=16
#SBATCH --gres=gpu:4
#SBATCH --time=24:00:00
#SBATCH --partition=gpu48
#SBATCH --dependency=afterok:<HEAD_JOB_ID>

cd $SCRATCH

# Read head node IP
HEAD_IP=$(cat ray_head_info.txt | grep "Head node IP" | cut -d' ' -f4)

# Start Ray worker
singularity exec --nv ml_overlay.img:ro pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    ray start --address="$HEAD_IP:6379"

# Keep worker alive
sleep infinity
```

### Submit Multi-Node Jobs

```bash
# Submit head node first
HEAD_JOB=$(sbatch ray_head.sh | awk '{print $4}')

# Submit worker nodes (adjust for desired number of workers)
for i in {1..3}; do
    sbatch --dependency=afterok:$HEAD_JOB ray_worker.sh
done
```

---

## Fine-Tuning LLMs

### Why Choose Different Fine-Tuning Approaches?

Fine-tuning large language models can be approached in several ways, each with distinct advantages:

#### Standard Fine-Tuning (Full Parameter Update)
- **Use when**: Maximum performance on specific tasks is required
- **Requirements**: Large GPU memory (48GB+ for 7B+ models)
- **Advantages**: Full model customization, potentially best task performance
- **Disadvantages**: High memory usage, slower training, large checkpoint files

#### LoRA Fine-Tuning (Parameter Efficient)
- **Use when**: Limited GPU resources, multiple task adaptation needed
- **Requirements**: Modest GPU memory (can work with 24GB for large models)
- **Advantages**: Fast training, small checkpoint files, preserves original model
- **Disadvantages**: Slightly lower performance ceiling than full fine-tuning

### Comparison: Standard vs LoRA Fine-Tuning

| Aspect | Standard Fine-Tuning | LoRA Fine-Tuning |
|--------|---------------------|------------------|
| **Memory Usage** | ~30-40GB for 7B model | ~10-15GB for 7B model |
| **Training Time** | 16+ hours | 3-6 hours |
| **Parameters Updated** | All (100%) | ~0.1-1% |
| **Storage per Checkpoint** | Full model size (14-28GB) | ~10-50MB |
| **Original Model Preserved** | No | Yes |
| **Multi-task Capability** | Requires separate models | Swap LoRA adapters |

### LoRA Fine-Tuning with Phi-4 (Recommended)

LoRA (Low-Rank Adaptation) enables efficient fine-tuning of large models by training only a small number of additional parameters.

#### Step 1: Prepare Your Dataset

Create a sample dataset for fine-tuning. Create `prepare_dataset.py`:

```python
#!/usr/bin/env python3
"""
prepare_dataset.py - Prepare a sample dataset for Phi-4 fine-tuning
"""

import json
import os

def create_sample_dataset():
    """Create a sample instruction-following dataset"""
    
    # Example: Fine-tuning for technical documentation
    samples = [
        {
            "instruction": "Explain the concept of distributed training in deep learning.",
            "response": "Distributed training in deep learning refers to the practice of training neural networks across multiple computing devices (GPUs or TPUs) to accelerate the training process and handle larger models. There are two main approaches: data parallelism, where the model is replicated across devices with different data batches, and model parallelism, where the model itself is split across devices. This approach enables training larger models and reduces training time significantly."
        },
        {
            "instruction": "What are the main differences between data parallelism and model parallelism?",
            "response": "Data parallelism and model parallelism are two fundamental approaches to distributed training:\n\n1. Data Parallelism: The model is replicated across devices, each processing different batches of data. Gradients are synchronized across devices after each batch. This approach is simpler to implement and works well when the model fits on a single device.\n\n2. Model Parallelism: The model itself is split across devices, with different layers or components on different devices. This is necessary when the model is too large to fit on a single device. It requires more complex coordination and communication between devices."
        },
        {
            "instruction": "Write a Python function to initialize a distributed training environment using PyTorch.",
            "response": "Here's a Python function to initialize distributed training in PyTorch:\n\n```python\nimport torch\nimport torch.distributed as dist\nimport os\n\ndef init_distributed():\n    # Get rank and world size from environment\n    rank = int(os.environ['RANK'])\n    world_size = int(os.environ['WORLD_SIZE'])\n    \n    # Initialize process group\n    dist.init_process_group(\n        backend='nccl',\n        init_method='env://',\n        world_size=world_size,\n        rank=rank\n    )\n    \n    # Set device\n    torch.cuda.set_device(rank)\n    \n    return rank, world_size\n```"
        },
        {
            "instruction": "Explain the benefits of using mixed precision training.",
            "response": "Mixed precision training uses both 32-bit (FP32) and 16-bit (FP16 or BF16) floating-point representations during training. Key benefits include: 1) Reduced memory usage (nearly 50% reduction), allowing larger models or batch sizes; 2) Faster training due to optimized tensor operations on modern GPUs; 3) Maintained model accuracy through automatic loss scaling; 4) Better numerical stability with BF16 compared to FP16. This technique is particularly valuable for large language model training on GPUs like RTX 8000."
        },
        {
            "instruction": "What is gradient accumulation and when should it be used?",
            "response": "Gradient accumulation is a technique where gradients from multiple forward passes are accumulated before performing a backward pass and parameter update. It's used when: 1) GPU memory is limited and you can't fit desired batch sizes; 2) You want to simulate larger batch sizes without additional hardware; 3) Training with very large models that require small per-device batch sizes. The effective batch size becomes: per_device_batch_size × gradient_accumulation_steps × num_gpus. This helps maintain training stability and convergence properties of larger batch training."
        }
    ]
    
    # Extend with more examples for better fine-tuning results
    extended_samples = []
    topics = [
        "optimization techniques", "neural network architectures", "attention mechanisms",
        "transformer models", "reinforcement learning", "computer vision",
        "natural language processing", "model evaluation", "data preprocessing",
        "regularization methods", "loss functions", "activation functions",
        "batch normalization", "dropout techniques", "learning rate scheduling"
    ]
    
    for i, topic in enumerate(topics):
        extended_samples.append({
            "instruction": f"Explain {topic} in machine learning and provide practical examples.",
            "response": f"{topic.title()} in machine learning involves sophisticated techniques for improving model performance and training efficiency. This includes understanding the theoretical foundations, practical implementation considerations, and real-world applications. Key aspects include optimization strategies, computational efficiency, and integration with modern deep learning frameworks like PyTorch and TensorFlow."
        })
    
    samples.extend(extended_samples)
    
    # Save to JSONL format
    output_dir = os.path.expandvars("$SCRATCH/phi4_finetune_data")
    os.makedirs(output_dir, exist_ok=True)
    
    with open(f"{output_dir}/train.jsonl", 'w') as f:
        for sample in samples:
            f.write(json.dumps(sample) + '\n')
    
    print(f"Created {len(samples)} training samples in {output_dir}/train.jsonl")

if __name__ == "__main__":
    create_sample_dataset()
```

#### Step 2: Create the LoRA Fine-Tuning Script

Create `phi4_lora_finetune.py`:

```python
#!/usr/bin/env python3
"""
phi4_lora_finetune.py - LoRA fine-tuning for Phi-4 on NYU HPC
"""

import os
import torch
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling
)
from peft import (
    get_peft_model,
    LoraConfig,
    TaskType,
    prepare_model_for_kbit_training
)
from datasets import load_dataset
import json
from datetime import datetime

def setup_environment():
    """Configure environment for fine-tuning"""
    os.environ['HF_HOME'] = f"/vast/{os.environ.get('USER', 'default')}/hf_cache"
    os.environ['TRANSFORMERS_CACHE'] = os.environ['HF_HOME']
    
    # Disable wandb for this demo (enable for real experiments)
    os.environ['WANDB_DISABLED'] = 'true'
    
    print(f"[{datetime.now()}] Environment configured for fine-tuning")

def load_and_prepare_model():
    """Load Phi-4 and prepare for LoRA fine-tuning"""
    model_id = "microsoft/phi-4"
    
    print(f"[{datetime.now()}] Loading Phi-4 for fine-tuning...")
    
    # Load tokenizer
    tokenizer = AutoTokenizer.from_pretrained(
        model_id,
        trust_remote_code=True,
        cache_dir=os.environ['HF_HOME']
    )
    
    # Set padding token
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    # Load model in 4-bit for memory efficiency
    model = AutoModelForCausalLM.from_pretrained(
        model_id,
        load_in_4bit=True,
        torch_dtype=torch.bfloat16,  # Use BF16 for RTX 8000 (optimized)
        device_map="auto",
        trust_remote_code=True,
        cache_dir=os.environ['HF_HOME']
    )
    
    # Prepare model for k-bit training
    model = prepare_model_for_kbit_training(model)
    
    # Configure LoRA
    lora_config = LoraConfig(
        task_type=TaskType.CAUSAL_LM,
        inference_mode=False,
        r=16,                    # LoRA rank
        lora_alpha=32,          # LoRA alpha
        lora_dropout=0.1,       # LoRA dropout
        target_modules=[        # Target modules for Phi-4
            "q_proj", "k_proj", "v_proj", "o_proj",
            "gate_proj", "up_proj", "down_proj"
        ],
    )
    
    # Apply LoRA
    model = get_peft_model(model, lora_config)
    
    print(f"[{datetime.now()}] Model prepared with LoRA")
    model.print_trainable_parameters()
    
    return model, tokenizer

def prepare_dataset(tokenizer, data_path):
    """Load and prepare the dataset for training"""
    
    def formatting_prompts_func(examples):
        """Format examples into instruction-following format"""
        texts = []
        for instruction, response in zip(examples['instruction'], examples['response']):
            # Phi-4 instruction format
            text = f"<|user|>\n{instruction}<|end|>\n<|assistant|>\n{response}<|end|>"
            texts.append(text)
        return texts
    
    # Load dataset
    dataset = load_dataset('json', data_files=data_path, split='train')
    
    # Format and tokenize
    def tokenize_function(examples):
        formatted_texts = formatting_prompts_func(examples)
        return tokenizer(
            formatted_texts,
            truncation=True,
            padding=True,
            max_length=1024,
            return_tensors="pt"
        )
    
    # Process dataset
    tokenized_dataset = dataset.map(
        tokenize_function,
        batched=True,
        remove_columns=dataset.column_names
    )
    
    print(f"[{datetime.now()}] Dataset prepared: {len(tokenized_dataset)} samples")
    
    return tokenized_dataset

def create_trainer(model, tokenizer, train_dataset, output_dir):
    """Create the Trainer with optimized settings for NYU HPC"""
    
    training_args = TrainingArguments(
        output_dir=output_dir,
        overwrite_output_dir=True,
        num_train_epochs=3,
        per_device_train_batch_size=2,
        gradient_accumulation_steps=4,  # Effective batch size = 2 * 4 = 8
        learning_rate=2e-4,
        lr_scheduler_type="cosine",
        warmup_steps=10,
        logging_steps=5,
        save_steps=50,
        save_total_limit=2,
        bf16=True,                      # Use BF16 for RTX 8000 (optimized)
        gradient_checkpointing=True,    # Save memory
        report_to="none",               # Disable reporting for demo
        dataloader_pin_memory=False,    # Important for NYU HPC
    )
    
    # Data collator
    data_collator = DataCollatorForLanguageModeling(
        tokenizer=tokenizer,
        mlm=False,  # Causal LM
    )
    
    # Create trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        data_collator=data_collator,
        tokenizer=tokenizer,
    )
    
    return trainer

def main():
    """Main fine-tuning pipeline"""
    print("="*80)
    print("Phi-4 LoRA Fine-Tuning Demonstration")
    print("NYU Greene HPC")
    print("="*80)
    
    # Setup
    setup_environment()
    
    # Paths
    data_path = os.path.expandvars("$SCRATCH/phi4_finetune_data/train.jsonl")
    output_dir = os.path.expandvars("$SCRATCH/phi4_lora_output")
    
    # Load model and tokenizer
    model, tokenizer = load_and_prepare_model()
    
    # Prepare dataset
    train_dataset = prepare_dataset(tokenizer, data_path)
    
    # Create trainer
    trainer = create_trainer(model, tokenizer, train_dataset, output_dir)
    
    # Start training
    print(f"\n[{datetime.now()}] Starting fine-tuning...")
    trainer.train()
    
    # Save the fine-tuned model
    print(f"\n[{datetime.now()}] Saving fine-tuned model...")
    trainer.save_model()
    tokenizer.save_pretrained(output_dir)
    
    print(f"\n[{datetime.now()}] Fine-tuning completed!")
    print(f"Model saved to: {output_dir}")

if __name__ == "__main__":
    main()
```

#### Step 3: Create Fine-Tuning SLURM Script

Create `submit_phi4_finetune.sh`:

```bash
#!/bin/bash
#SBATCH --job-name=phi4_lora_finetune
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=16
#SBATCH --mem=200GB
#SBATCH --gres=gpu:rtx8000:1           # Request RTX 8000 for 48GB memory
#SBATCH --time=06:00:00                 # 6 hours for fine-tuning
#SBATCH --output=phi4_finetune_%j.out
#SBATCH --error=phi4_finetune_%j.err

echo "Fine-tuning job started on $(date)"
echo "Running on node: $(hostname)"

# Navigate to scratch
cd $SCRATCH

# Create working directory
mkdir -p phi4_finetune
cd phi4_finetune

# Copy scripts
cp $HOME/llm_demos/phi4_instruction/prepare_dataset.py .
cp $HOME/llm_demos/phi4_instruction/phi4_lora_finetune.py .

# Load modules
module purge
module load singularity/3.11.3

# Environment setup
export HF_HOME="/vast/$USER/hf_cache"
export TRANSFORMERS_CACHE="$HF_HOME"

# First, prepare the dataset
echo "Preparing dataset..."
singularity exec --nv \
    --overlay $HOME/containers/ml_overlay.img:rw \
    $HOME/containers/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python prepare_dataset.py

# Run fine-tuning
echo "Starting LoRA fine-tuning..."
singularity exec --nv \
    --overlay $HOME/containers/ml_overlay.img:rw \
    $HOME/containers/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python phi4_lora_finetune.py

echo "Fine-tuning completed on $(date)"
```

#### Step 4: Test the Fine-Tuned Model

Create `test_finetuned_model.py`:

```python
#!/usr/bin/env python3
"""
test_finetuned_model.py - Test the fine-tuned Phi-4 model
"""

import os
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

def load_finetuned_model():
    """Load the fine-tuned model with LoRA adapters"""
    base_model_id = "microsoft/phi-4"
    adapter_path = os.path.expandvars("$SCRATCH/phi4_lora_output")
    
    print("Loading base model...")
    model = AutoModelForCausalLM.from_pretrained(
        base_model_id,
        torch_dtype=torch.bfloat16,  # Use BF16 for RTX 8000
        device_map="auto",
        trust_remote_code=True
    )
    
    print("Loading LoRA adapters...")
    model = PeftModel.from_pretrained(model, adapter_path)
    
    tokenizer = AutoTokenizer.from_pretrained(adapter_path)
    
    return model, tokenizer

def test_model(model, tokenizer):
    """Test the fine-tuned model with new prompts"""
    
    test_prompts = [
        "Explain the concept of gradient accumulation in distributed training.",
        "What are the best practices for model parallelism?",
        "How does mixed precision training improve performance?"
    ]
    
    for prompt in test_prompts:
        print(f"\nPrompt: {prompt}")
        print("-" * 60)
        
        # Format as instruction
        formatted_prompt = f"<|user|>\n{prompt}<|end|>\n<|assistant|>"
        
        inputs = tokenizer(formatted_prompt, return_tensors="pt").to(model.device)
        
        with torch.no_grad():
            outputs = model.generate(
                **inputs,
                max_new_tokens=256,
                temperature=0.7,
                top_p=0.9,
                do_sample=True
            )
        
        response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        response = response[len(formatted_prompt):].strip()
        
        print(f"Response: {response}")

if __name__ == "__main__":
    model, tokenizer = load_finetuned_model()
    test_model(model, tokenizer)
```

### Standard Fine-Tuning (Alternative Approach)

For comparison, here's a standard fine-tuning approach that updates all model parameters:

```python
#!/usr/bin/env python3
"""
standard_finetune.py - Standard fine-tuning example for LLMs on NYU HPC
"""

import os
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling
)
from datasets import load_dataset
import torch

def setup_model_and_tokenizer(model_name="microsoft/phi-4"):
    """Setup model and tokenizer for standard fine-tuning"""
    
    # Load tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    # Load model with BF16 to save memory
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.bfloat16,  # Use BF16 for RTX 8000
        device_map="auto",
        trust_remote_code=True
    )
    
    return model, tokenizer

def prepare_dataset(data_path, tokenizer, max_length=1024):
    """Prepare dataset for training"""
    
    # Load dataset
    dataset = load_dataset('json', data_files=data_path, split='train')
    
    def tokenize_function(examples):
        # Format: <|user|>\n{prompt}<|end|>\n<|assistant|>\n{response}<|end|>
        formatted_texts = []
        for instruction, response in zip(examples['instruction'], examples['response']):
            formatted_text = f"<|user|>\n{instruction}<|end|>\n<|assistant|>\n{response}<|end|>"
            formatted_texts.append(formatted_text)
        
        # Tokenize
        tokenized = tokenizer(
            formatted_texts,
            truncation=True,
            padding=True,
            max_length=max_length,
            return_tensors="pt"
        )
        
        # For causal LM, labels are the same as input_ids
        tokenized["labels"] = tokenized["input_ids"].clone()
        
        return tokenized
    
    # Process dataset
    tokenized_dataset = dataset.map(
        tokenize_function,
        batched=True,
        remove_columns=dataset.column_names
    )
    
    return tokenized_dataset

def main():
    """Main fine-tuning function"""
    
    # Setup
    os.environ['HF_HOME'] = f"/vast/{os.environ.get('USER', 'default')}/hf_cache"
    os.environ['TRANSFORMERS_CACHE'] = os.environ['HF_HOME']
    
    # Setup model and tokenizer
    model, tokenizer = setup_model_and_tokenizer()
    
    # Prepare dataset
    data_path = os.path.expandvars("$SCRATCH/phi4_finetune_data/train.jsonl")
    train_dataset = prepare_dataset(data_path, tokenizer)
    
    # Data collator
    data_collator = DataCollatorForLanguageModeling(
        tokenizer=tokenizer,
        mlm=False,  # Causal LM, not masked LM
    )
    
    # Training arguments
    training_args = TrainingArguments(
        output_dir="$SCRATCH/phi4_standard_output",
        overwrite_output_dir=True,
        num_train_epochs=3,
        per_device_train_batch_size=1,      # Reduced for memory constraints
        gradient_accumulation_steps=8,       # Effective batch size = 1 * 8 = 8
        learning_rate=2e-5,                 # Lower learning rate for stability
        lr_scheduler_type="cosine",
        warmup_steps=100,
        logging_steps=10,
        save_steps=500,
        save_total_limit=2,
        bf16=True,                          # Use BF16 for RTX 8000
        gradient_checkpointing=True,        # Save memory
        dataloader_pin_memory=False,
        report_to="none",                   # Disable wandb/tensorboard
    )
    
    # Create Trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        data_collator=data_collator,
        tokenizer=tokenizer,
    )
    
    # Start training
    print("Starting standard fine-tuning...")
    trainer.train()
    
    # Save model
    trainer.save_model("$SCRATCH/phi4_standard_final")
    tokenizer.save_pretrained("$SCRATCH/phi4_standard_final")
    print("Standard fine-tuning completed!")

if __name__ == "__main__":
    main()
```

#### SLURM Script for Standard Fine-Tuning

```bash
#!/bin/bash
#SBATCH --job-name=phi4_standard_finetune
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=16
#SBATCH --mem=300GB                     # Higher memory for standard fine-tuning
#SBATCH --gres=gpu:rtx8000:1           # Need RTX 8000 for 48GB memory
#SBATCH --time=24:00:00                 # Longer time for standard fine-tuning
#SBATCH --partition=gpu48

cd $SCRATCH

# Load modules
module purge
module load singularity/3.11.3

# Set cache directory
export HF_HOME="/vast/$USER/hf_cache"
export TRANSFORMERS_CACHE="$HF_HOME"

# Copy training script
cp $HOME/llm_demos/phi4_instruction/standard_finetune.py .

# Run standard fine-tuning
singularity exec --nv \
    --overlay $HOME/containers/ml_overlay.img:rw \
    $HOME/containers/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python standard_finetune.py
```

### Running the Complete Fine-Tuning Pipeline

1. **Prepare your environment**:
   ```bash
   cd $HOME/llm_demos/phi4_instruction
   # Create all the Python scripts shown above
   ```

2. **Run LoRA fine-tuning** (recommended):
   ```bash
   sbatch submit_phi4_finetune.sh
   ```

3. **Test the fine-tuned model**:
   ```bash
   # After fine-tuning completes
   sbatch --wrap="singularity exec --nv --overlay $HOME/containers/ml_overlay.img:ro \
                  $HOME/containers/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
                  python test_finetuned_model.py"
   ```

### Key Benefits of LoRA Fine-Tuning

1. **Memory Efficiency**: Only ~0.1% of parameters are trainable
2. **Fast Training**: 3-5x faster than full fine-tuning
3. **Preservation**: Original model knowledge is retained
4. **Flexibility**: Multiple LoRA adapters for different tasks
5. **Storage**: Each adapter is only ~10-50MB

---

## Performance Optimization

### Memory Management

```python
# Enable gradient checkpointing to save memory
model.gradient_checkpointing_enable()

# Use mixed precision training with BF16 (optimized for RTX 8000)
from torch.cuda.amp import autocast, GradScaler

scaler = GradScaler()

with autocast(dtype=torch.bfloat16):
    outputs = model(inputs)
    loss = criterion(outputs, targets)

scaler.scale(loss).backward()
scaler.step(optimizer)
scaler.update()
```

### GPU Memory Optimization

```bash
# Monitor GPU usage during training
nvidia-smi -l 1

# For inference, optimize memory utilization
export PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:512
```

### Batch Size Optimization

```python
# Find optimal batch size
def find_optimal_batch_size(model, tokenizer, max_length=1024):
    batch_sizes = [1, 2, 4, 8, 16, 32]
    
    for batch_size in batch_sizes:
        try:
            # Test batch
            dummy_input = tokenizer(
                ["Test prompt"] * batch_size,
                return_tensors="pt",
                padding=True,
                truncation=True,
                max_length=max_length
            )
            
            with torch.no_grad():
                outputs = model(**dummy_input)
            
            print(f"Batch size {batch_size}: SUCCESS")
            
        except RuntimeError as e:
            if "out of memory" in str(e):
                print(f"Batch size {batch_size}: OOM")
                return batch_size // 2
            else:
                raise e
    
    return batch_sizes[-1]
```

### Creating Production Inference API Servers

```python
#!/usr/bin/env python3
# inference_server.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from vllm import LLM, SamplingParams
import uvicorn

# Initialize FastAPI app
app = FastAPI(title="LLM Inference Server")

# Load model globally with optimized settings
llm = LLM(
    model="microsoft/phi-4",
    tensor_parallel_size=1,
    gpu_memory_utilization=0.9,
    dtype="bfloat16"  # Use BF16 for RTX 8000
)

class InferenceRequest(BaseModel):
    prompt: str
    max_tokens: int = 512
    temperature: float = 0.7
    top_p: float = 0.9

class InferenceResponse(BaseModel):
    generated_text: str
    prompt: str

@app.post("/generate", response_model=InferenceResponse)
async def generate_text(request: InferenceRequest):
    try:
        sampling_params = SamplingParams(
            temperature=request.temperature,
            top_p=request.top_p,
            max_tokens=request.max_tokens
        )
        
        outputs = llm.generate([request.prompt], sampling_params)
        generated_text = outputs[0].outputs[0].text
        
        return InferenceResponse(
            generated_text=generated_text,
            prompt=request.prompt
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

---

## Monitoring and Troubleshooting

### SLURM Job Monitoring

```bash
# Check job status
squeue -u $USER

# Monitor specific job
scontrol show job <job_id>

# Check job efficiency
seff <job_id>

# View job output in real-time
tail -f slurm-<job_id>.out

# Cancel job if needed
scancel <job_id>

# Check job history
sacct -u $USER --format=JobID,JobName,State,Time,Start,End,MaxRSS,MaxVMSize
```

### GPU Monitoring

```bash
# Real-time GPU monitoring
watch -n 1 nvidia-smi

# Monitor specific GPUs
nvidia-smi -i 0,1,2,3 -l 1

# Check GPU memory usage
nvidia-smi --query-gpu=memory.used,memory.total --format=csv

# Monitor GPU utilization over time
nvidia-smi --query-gpu=timestamp,name,pci.bus_id,driver_version,pstate,pcie.link.gen.max,pcie.link.gen.current,temperature.gpu,utilization.gpu,utilization.memory,memory.total,memory.free,memory.used --format=csv -l 5
```

### Performance Monitoring Script

```python
#!/usr/bin/env python3
# monitor_training.py

import psutil
import torch
import time
import json
from datetime import datetime

def monitor_system():
    """Monitor system resources during training"""
    
    stats = {
        'timestamp': datetime.now().isoformat(),
        'cpu_percent': psutil.cpu_percent(),
        'memory': {
            'total': psutil.virtual_memory().total,
            'available': psutil.virtual_memory().available,
            'percent': psutil.virtual_memory().percent
        }
    }
    
    # GPU stats if available
    if torch.cuda.is_available():
        gpu_stats = []
        for i in range(torch.cuda.device_count()):
            gpu_memory = torch.cuda.get_device_properties(i).total_memory
            gpu_allocated = torch.cuda.memory_allocated(i)
            gpu_cached = torch.cuda.memory_reserved(i)
            
            gpu_stats.append({
                'device': i,
                'name': torch.cuda.get_device_name(i),
                'total_memory': gpu_memory,
                'allocated_memory': gpu_allocated,
                'cached_memory': gpu_cached,
                'memory_percent': (gpu_allocated / gpu_memory) * 100
            })
        
        stats['gpus'] = gpu_stats
    
    return stats

def log_stats(output_file="training_monitor.jsonl"):
    """Log system stats to file"""
    stats = monitor_system()
    
    with open(output_file, 'a') as f:
        f.write(json.dumps(stats) + '\n')
    
    return stats

if __name__ == "__main__":
    import sys
    interval = int(sys.argv[1]) if len(sys.argv) > 1 else 60
    
    print(f"Monitoring system every {interval} seconds...")
    
    try:
        while True:
            stats = log_stats()
            print(f"[{stats['timestamp']}] CPU: {stats['cpu_percent']:.1f}% | "
                  f"Memory: {stats['memory']['percent']:.1f}%")
            
            if 'gpus' in stats:
                for gpu in stats['gpus']:
                    print(f"  GPU {gpu['device']}: {gpu['memory_percent']:.1f}% memory")
            
            time.sleep(interval)
    except KeyboardInterrupt:
        print("\nMonitoring stopped.")
```

### Common Issues and Solutions

#### Out of Memory (OOM) Errors
```bash
# Solution strategies:
# 1. Reduce batch size
per_device_train_batch_size=1

# 2. Enable gradient checkpointing
gradient_checkpointing=True

# 3. Use gradient accumulation
gradient_accumulation_steps=8

# 4. Use model quantization
load_in_4bit=True

# 5. Optimize CUDA memory allocation
export PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:512
```

#### Slow Data Loading
```python
# Optimize data loading
# 1. Move data to VAST storage for faster I/O
export HF_HOME="/vast/$USER/hf_cache"

# 2. Increase number of data loader workers
dataloader_num_workers=4

# 3. Use memory mapping for large datasets
dataset = dataset.with_format("torch")

# 4. Disable pin memory on NYU HPC
dataloader_pin_memory=False
```

#### Module Loading Issues
```bash
# Reset module environment
module purge
module load singularity/3.11.3

# Check module conflicts
module list

# Verify CUDA version
nvidia-smi
nvcc --version
```

#### File Quota Issues
```bash
# Check current usage
quota -u $USER

# Clean up cache directories
rm -rf ~/.cache/huggingface/transformers/*
rm -rf ~/.cache/torch/*

# Use Singularity containers instead of conda
# (as recommended in environment setup)
```

#### Debugging Training Issues

```python
# Add debugging to training script
import logging

logging.basicConfig(level=logging.DEBUG)

# Enable CUDA debugging
os.environ['CUDA_LAUNCH_BLOCKING'] = '1'

# Monitor memory usage
def print_memory_usage():
    if torch.cuda.is_available():
        for i in range(torch.cuda.device_count()):
            allocated = torch.cuda.memory_allocated(i) / 1e9
            cached = torch.cuda.memory_reserved(i) / 1e9
            print(f"GPU {i}: {allocated:.2f}GB allocated, {cached:.2f}GB cached")

# Use in training loop
print_memory_usage()
```

### Troubleshooting Network Issues

```bash
# Test connectivity from compute nodes
srun --pty --gres=gpu:1 --time=1:00:00 \
     bash -c "curl -I https://huggingface.co"

# If direct internet access fails, use login node for downloads
# then transfer to compute nodes via shared storage
```

---

## Remote Access

### SSH Tunneling for Development

```bash
# Forward ports for Jupyter/TensorBoard/APIs
ssh -L 8888:localhost:8888 -L 6006:localhost:6006 -L 8000:localhost:8000 \
    <netid>@greene.hpc.nyu.edu

# Forward Ray dashboard (if using Ray)
ssh -L 8265:localhost:8265 <netid>@greene.hpc.nyu.edu

# For multiple services with different ports
ssh -L 8888:localhost:8888 \
    -L 8000:localhost:8000 \
    -L 8001:localhost:8001 \
    <netid>@greene.hpc.nyu.edu
```

### Setting Up Remote Development

#### Jupyter Lab Setup

```bash
# Create Jupyter config
mkdir -p ~/.jupyter

# Generate config file
cat > ~/.jupyter/jupyter_lab_config.py << EOF
c.ServerApp.ip = '0.0.0.0'
c.ServerApp.port = 8888
c.ServerApp.open_browser = False
c.ServerApp.allow_root = True
c.ServerApp.token = ''
c.ServerApp.password = ''
EOF

# Start Jupyter in interactive job
srun --pty --gres=gpu:1 --time=04:00:00 --partition=interact \
     singularity exec --nv ml_overlay.img:ro pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
     jupyter lab --config ~/.jupyter/jupyter_lab_config.py
```

#### TensorBoard Setup

```bash
# Start TensorBoard for monitoring training
srun --pty --gres=gpu:1 --time=04:00:00 --partition=interact \
     singularity exec --nv ml_overlay.img:ro pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
     tensorboard --logdir $SCRATCH/training_logs --host 0.0.0.0 --port 6006
```

### Accessing Inference APIs

```python
# Client script to query your inference server
import requests
import json

def query_model(prompt, server_url="http://localhost:8000"):
    """Query the inference server"""
    response = requests.post(
        f"{server_url}/generate",
        json={
            "prompt": prompt,
            "max_tokens": 512,
            "temperature": 0.7
        }
    )
    return response.json()

def query_batch(prompts, server_url="http://localhost:8000"):
    """Query multiple prompts efficiently"""
    results = []
    for prompt in prompts:
        result = query_model(prompt, server_url)
        results.append(result)
    return results

# Example usage
if __name__ == "__main__":
    # Single query
    result = query_model("Explain the concept of attention in transformers:")
    print("Generated text:", result["generated_text"])
    
    # Batch queries
    prompts = [
        "What is machine learning?",
        "Explain neural networks",
        "How does gradient descent work?"
    ]
    
    results = query_batch(prompts)
    for i, result in enumerate(results):
        print(f"\nPrompt {i+1}: {prompts[i]}")
        print(f"Response: {result['generated_text']}")
```

### Development Workflow Scripts

#### Quick Development Environment

```bash
#!/bin/bash
# dev_environment.sh - Quick setup for development

# Request interactive session
echo "Requesting interactive GPU session..."
srun --pty --nodes=1 --ntasks-per-node=1 --cpus-per-task=8 \
     --mem=100GB --gres=gpu:1 --time=04:00:00 \
     --partition=interact \
     bash -c "
         cd \$SCRATCH
         
         # Load modules
         module load singularity/3.11.3
         
         # Set environment
         export HF_HOME='/vast/\$USER/hf_cache'
         export TRANSFORMERS_CACHE='\$HF_HOME'
         
         # Start development container
         singularity shell --nv \
             --overlay \$HOME/containers/ml_overlay.img:rw \
             \$HOME/containers/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif
     "
```

#### Model Testing Script

```python
#!/usr/bin/env python3
# quick_test.py - Quick model testing

import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

def quick_test(model_name="microsoft/phi-4"):
    """Quick test of model loading and inference"""
    
    print(f"Testing {model_name}...")
    
    # Load model and tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.bfloat16,
        device_map="auto",
        trust_remote_code=True
    )
    
    # Test prompt
    prompt = "Explain machine learning in one sentence:"
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    
    # Generate
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=100,
            temperature=0.7,
            do_sample=True
        )
    
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    response = response[len(prompt):].strip()
    
    print(f"Prompt: {prompt}")
    print(f"Response: {response}")
    print(f"✅ Model test successful!")

if __name__ == "__main__":
    quick_test()
```

---

## Best Practices Summary

### Resource Planning for NYU Greene
- **RTX 8000 GPUs**: Optimal for most LLM tasks (48GB memory)
- **Memory estimation**: ~2GB per billion parameters for inference, ~4-6GB for training
- **Storage strategy**: Code in home, active data in scratch, models in VAST
- **Time planning**: Consider 60-day purge policy for scratch/VAST

### Unified Container Strategy (Harmonized)
- **Primary recommendation**: PyTorch base container with comprehensive overlay
- **Installation**: Install all packages (transformers, vLLM, peft, ray, vec-inf) in single overlay
- **Benefits**: Eliminates file quota issues, ensures reproducibility
- **Production use**: Always use read-only overlays for better performance

### Mixed Precision Standardization (Harmonized)
- **For RTX 8000 GPUs**: Use BF16 (`torch.bfloat16`) for optimal performance
- **Training**: `bf16=True` in TrainingArguments
- **Inference**: `dtype="bfloat16"` in model loading
- **Fallback**: Use FP16 only if BF16 is not supported

### Job Submission Best Practices
- **Request any GPU type** (`--gres=gpu:N`) for faster scheduling
- **Use scratch space** for all job execution
- **Monitor job efficiency** with `seff` command
- **Plan for Spring 2025 refresh** when requesting long-term resources

### Model Selection and Optimization
- **Phi-4 (14B)**: Excellent balance of capability and resource requirements
- **LoRA fine-tuning**: Recommended approach for efficient customization
- **Quantization**: Use 4-bit/8-bit for memory-constrained scenarios
- **vLLM**: Preferred for production inference workloads
- **Vector Inference**: Consider for simplified deployment and management

### Data Management
- **Respect 60-day retention**: Archive important data regularly
- **Use appropriate storage**: VAST for models, scratch for datasets
- **Optimize data formats**: Prefer memory-mapped or chunked data
- **Cache strategy**: Use VAST for HuggingFace cache for fast model loading

### Cross-Referenced Framework Integration
- **Development workflow**: Start with inference demos → fine-tune with LoRA → deploy with vLLM/Vector Inference
- **Scaling path**: Single GPU demos → multi-GPU training → distributed inference
- **Monitoring integration**: Use built-in tools for development, external monitoring for production

### Fine-Tuning Strategy Selection
- **Choose LoRA when**: Limited resources, multiple tasks, experimentation
- **Choose Standard when**: Maximum performance needed, sufficient resources available
- **Data requirements**: Minimum 100 examples for LoRA, 1000+ for standard fine-tuning
- **Evaluation**: Always test fine-tuned models before production deployment