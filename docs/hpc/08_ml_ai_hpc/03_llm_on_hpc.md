# LLM on HPC

## Table of Contents

1. [NYU Greene Overview](#nyu-greene-overview)
2. [Environment Setup](#environment-setup)
3. [Data Management on NYU Storage](#data-management-on-nyu-storage)
4. [SLURM Job Configuration](#slurm-job-configuration)
5. [Single-Node Multi-GPU Setup](#single-node-multi-gpu-setup)
6. [Multi-Node Distributed Setup](#multi-node-distributed-setup)
7. [Model Inference](#model-inference)
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

### NYU's Singularity Container Workflow

**NYU HPC strongly recommends Singularity containers** for ML workloads to avoid the file quota limitations that plague traditional conda environments. This approach ensures reproducibility while working within NYU's storage constraints.

#### Container and Overlay Setup Process

```bash
# Load Singularity module
module load singularity/3.11.3

# Pull pre-built container with CUDA 12.1.1 + cuDNN 8.9.0 on Ubuntu 22.04
singularity pull docker://pytorch/pytorch:2.1.0-cuda12.1-cudnn8-runtime

# Create overlay filesystem (15GB capacity, ~500K files typical)
singularity overlay create --size 15000 ml_overlay.img

# Install packages in read-write mode (development)
singularity shell --overlay ml_overlay.img:rw pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif

# Inside container, install LLM packages
pip install transformers accelerate datasets
pip install vllm torch torchvision torchaudio
pip install peft bitsandbytes  # For LoRA fine-tuning
pip install ray[default]       # For distributed computing
exit

# Use in production (read-only mode for better performance)
singularity exec --nv --overlay ml_overlay.img:ro \
    pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python your_script.py
```

#### Alternative: vLLM Container

```bash
# For inference-focused workloads
singularity pull docker://vllm/vllm-openai:latest

# Create overlay for additional packages
singularity overlay create --size 10000 vllm_overlay.img
singularity shell --overlay vllm_overlay.img:rw vllm-openai_latest.sif
pip install accelerate peft  # Add any missing packages
exit
```

#### Key Advantages of NYU's Container Approach
- **Eliminates file quota issues**: No more conda environment file limit problems
- **Reproducible environments**: Consistent execution across different nodes
- **Pre-optimized**: CUDA 12.1.1 with cuDNN 8.9.0 provides cutting-edge GPU support
- **Efficient deployment**: Read-only overlays perform better in production

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
export HF_HOME="/vast/$USER/cache"
export TRANSFORMERS_CACHE="/vast/$USER/cache"

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

### NYU-Optimized SLURM Script for LLMs

```bash
#!/bin/bash
#SBATCH --job-name=llm_phi4_inference
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

# Run LLM job using Singularity container
singularity exec --nv --overlay ml_overlay.img:ro \
    pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python run_llm_inference.py

# Optional: Archive important results before 60-day purge
# tar -czf /archive/$USER/results_$(date +%Y%m%d).tar.gz important_outputs/
```

### Alternative Job Script for RTX 8000 Specific Requirements

```bash
#!/bin/bash
#SBATCH --job-name=llm_training_rtx8000
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=16
#SBATCH --mem=300GB                 # Higher memory for training
#SBATCH --gres=gpu:rtx8000:4       # Specifically request RTX 8000 (48GB each)
#SBATCH --time=48:00:00             # Maximum time for gpu48 partition
#SBATCH --partition=gpu48
#SBATCH --constraint=rtx8000        # Additional constraint for RTX 8000 nodes

cd $SCRATCH

# Load modules and set environment
module purge
module load singularity/3.11.3

# Training-specific environment variables
export HF_HOME="/vast/$USER/hf_cache"
export WANDB_DISABLED=true                    # Disable wandb logging if not needed
export NCCL_DEBUG=INFO                       # Debug distributed training
export CUDA_LAUNCH_BLOCKING=1                # For debugging CUDA errors

# Run training with distributed setup
singularity exec --nv --overlay ml_overlay.img:ro \
    pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python -m torch.distributed.launch \
    --nproc_per_node=4 \
    fine_tune_phi4.py
```

### Interactive Session for Development

```bash
# Request interactive GPU session
srun --pty --nodes=1 --ntasks-per-node=1 --cpus-per-task=8 \
     --mem=100GB --gres=gpu:1 --time=04:00:00 \
     --partition=interact /bin/bash

# Once in session, navigate to scratch and work
cd $SCRATCH
```

### GPU Selection Strategy

```bash
# Best practice: Request any available GPU type for faster scheduling
#SBATCH --gres=gpu:4

# If you need specific GPU types (slower scheduling):
#SBATCH --gres=gpu:rtx8000:4    # For 48GB memory models
#SBATCH --gres=gpu:v100:4       # For 32GB memory models
#SBATCH --gres=gpu:a100:4       # Limited availability
```

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
        torch_dtype=torch.float16,
        device_map=f"cuda:{local_rank}"
    )
    
    # Wrap with DDP
    model = DDP(model, device_ids=[local_rank])
    
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    return model, tokenizer

# SLURM script uses:
# srun python -m torch.distributed.launch --nproc_per_node=4 script.py
```

### Using vLLM for Inference

```bash
#!/bin/bash
#SBATCH --gres=gpu:4
#SBATCH --mem=200GB

cd $SCRATCH

# Start vLLM server with tensor parallelism
singularity exec --nv overlay.img:ro vllm-openai_latest.sif \
    vllm serve microsoft/phi-4 \
    --tensor-parallel-size 4 \
    --gpu-memory-utilization 0.9 \
    --max-model-len 8192 \
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
singularity exec --nv overlay.img:ro vllm-openai_latest.sif \
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
singularity exec --nv overlay.img:ro vllm-openai_latest.sif \
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

## Model Inference

### Loading and Running Inference

```python
#!/usr/bin/env python3
# run_inference.py

import os
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from vllm import LLM, SamplingParams

def load_model_standard(model_name):
    """Load model using standard transformers"""
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.float16,
        device_map="auto",  # Automatically distribute across GPUs
        trust_remote_code=True
    )
    return model, tokenizer

def load_model_vllm(model_name):
    """Load model using vLLM for optimized inference"""
    llm = LLM(
        model=model_name,
        tensor_parallel_size=4,  # Number of GPUs
        gpu_memory_utilization=0.9,
        max_model_len=8192,
        trust_remote_code=True
    )
    return llm

def run_vllm_inference():
    """Example inference with vLLM"""
    # Load model
    llm = load_model_vllm("microsoft/phi-4")
    
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
    
    # Generate responses
    outputs = llm.generate(prompts, sampling_params)
    
    # Print results
    for i, output in enumerate(outputs):
        print(f"\n=== Prompt {i+1} ===")
        print(f"Prompt: {output.prompt}")
        print(f"Response: {output.outputs[0].text}")

if __name__ == "__main__":
    run_vllm_inference()
```

### Creating an Inference API Server

```python
#!/usr/bin/env python3
# inference_server.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from vllm import LLM, SamplingParams
import uvicorn

# Initialize FastAPI app
app = FastAPI(title="LLM Inference Server")

# Load model globally
llm = LLM(
    model="microsoft/phi-4",
    tensor_parallel_size=4,
    gpu_memory_utilization=0.9
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

## Fine-Tuning LLMs

### LoRA Fine-Tuning with Phi-4

LoRA (Low-Rank Adaptation) enables efficient fine-tuning of large models by training only a small number of additional parameters.

```python
#!/usr/bin/env python3
# fine_tune_phi4.py

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
from datasets import Dataset
import json

def setup_model_and_tokenizer(model_name="microsoft/phi-4"):
    """Setup model and tokenizer for LoRA fine-tuning"""
    
    # Load tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    # Load model with 4-bit quantization for memory efficiency
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.float16,
        device_map="auto",
        trust_remote_code=True,
        load_in_4bit=True,  # Enable 4-bit quantization
    )
    
    # Prepare model for training
    model = prepare_model_for_kbit_training(model)
    
    return model, tokenizer

def setup_lora_config():
    """Configure LoRA parameters"""
    lora_config = LoraConfig(
        task_type=TaskType.CAUSAL_LM,
        inference_mode=False,
        r=16,                    # Rank - higher = more parameters
        lora_alpha=32,          # Alpha scaling parameter
        lora_dropout=0.1,       # Dropout for LoRA layers
        target_modules=[        # Phi-4 specific attention modules
            "q_proj", "k_proj", "v_proj", "o_proj",
            "gate_proj", "up_proj", "down_proj"
        ],
    )
    return lora_config

def prepare_dataset(data_path, tokenizer, max_length=1024):
    """Prepare dataset for training"""
    
    # Load your dataset
    with open(data_path, 'r') as f:
        data = [json.loads(line) for line in f]
    
    def tokenize_function(examples):
        # Format: <|im_start|>user\n{prompt}<|im_end|>\n<|im_start|>assistant\n{response}<|im_end|>
        formatted_texts = []
        for item in examples['conversations']:
            user_msg = item['input']
            assistant_msg = item['output']
            
            formatted_text = f"<|im_start|>user\n{user_msg}<|im_end|>\n<|im_start|>assistant\n{assistant_msg}<|im_end|>"
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
    
    # Convert to HuggingFace dataset
    dataset = Dataset.from_list(data)
    tokenized_dataset = dataset.map(
        tokenize_function,
        batched=True,
        remove_columns=dataset.column_names
    )
    
    return tokenized_dataset

def fine_tune_model():
    """Main fine-tuning function"""
    
    # Setup model and tokenizer
    model, tokenizer = setup_model_and_tokenizer()
    
    # Setup LoRA
    lora_config = setup_lora_config()
    model = get_peft_model(model, lora_config)
    
    # Print trainable parameters
    model.print_trainable_parameters()
    
    # Prepare dataset
    train_dataset = prepare_dataset("$SCRATCH/training_data.jsonl", tokenizer)
    
    # Data collator
    data_collator = DataCollatorForLanguageModeling(
        tokenizer=tokenizer,
        mlm=False,  # Causal LM, not masked LM
    )
    
    # Training arguments
    training_args = TrainingArguments(
        output_dir="$SCRATCH/phi4_lora_checkpoints",
        overwrite_output_dir=True,
        per_device_train_batch_size=2,      # Adjust based on GPU memory
        gradient_accumulation_steps=8,       # Effective batch size = 2 * 8 * num_gpus
        num_train_epochs=3,
        learning_rate=2e-4,
        lr_scheduler_type="cosine",
        warmup_steps=100,
        logging_steps=10,
        save_steps=500,
        eval_steps=500,
        save_total_limit=3,
        load_best_model_at_end=True,
        ddp_find_unused_parameters=False,    # For multi-GPU training
        dataloader_pin_memory=False,
        bf16=True,                          # Use bfloat16 for RTX 8000
        gradient_checkpointing=True,        # Save memory
        report_to="none",                   # Disable wandb/tensorboard for now
    )
    
    # Initialize trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        data_collator=data_collator,
        tokenizer=tokenizer,
    )
    
    # Start training
    trainer.train()
    
    # Save the final model
    trainer.save_model("$SCRATCH/phi4_lora_final")
    tokenizer.save_pretrained("$SCRATCH/phi4_lora_final")

if __name__ == "__main__":
    fine_tune_model()
```

### LoRA Fine-Tuning SLURM Script

```bash
#!/bin/bash
#SBATCH --job-name=phi4_lora
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=16
#SBATCH --mem=200GB
#SBATCH --gres=gpu:rtx8000:4
#SBATCH --time=24:00:00
#SBATCH --partition=gpu48

cd $SCRATCH

# Load modules
module load singularity/3.11.3

# Set environment variables
export HF_HOME="/vast/$USER/cache"
export WANDB_DISABLED=true

# Install additional packages in overlay if needed
# singularity exec --overlay overlay.img:rw vllm-openai_latest.sif \
#     pip install peft bitsandbytes

# Run fine-tuning
singularity exec --nv --overlay overlay.img:ro vllm-openai_latest.sif \
    python fine_tune_phi4.py
```

### Data Format for Fine-Tuning

Create your training data in JSONL format:

```json
{"conversations": {"input": "What is machine learning?", "output": "Machine learning is a subset of artificial intelligence..."}}
{"conversations": {"input": "Explain neural networks", "output": "Neural networks are computational models inspired by..."}}
```

---

## Performance Optimization

### Memory Management

```python
# Enable gradient checkpointing to save memory
model.gradient_checkpointing_enable()

# Use mixed precision training
from torch.cuda.amp import autocast, GradScaler

scaler = GradScaler()

with autocast():
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

# View job output
tail -f slurm-<job_id>.out

# Cancel job if needed
scancel <job_id>
```

### GPU Monitoring

```bash
# Real-time GPU monitoring
watch -n 1 nvidia-smi

# Monitor specific GPUs
nvidia-smi -i 0,1,2,3 -l 1

# Check GPU memory usage
nvidia-smi --query-gpu=memory.used,memory.total --format=csv
```

### Common Issues and Solutions

#### Out of Memory Errors
- Reduce batch size
- Enable gradient checkpointing
- Use gradient accumulation
- Try model quantization (4-bit/8-bit)

#### Slow Data Loading
- Move data to VAST storage for faster I/O
- Increase number of data loader workers
- Use memory mapping for large datasets

#### Module Loading Issues
```bash
# Reset module environment
module purge
module load singularity/3.11.3

# Check module conflicts
module list
```

#### File Quota Issues
- Use Singularity containers instead of conda
- Clean up cache directories regularly
- Move large files to scratch space

---

## Remote Access

### SSH Tunneling for Development

```bash
# Forward ports for Jupyter/TensorBoard/APIs
ssh -L 8888:localhost:8888 -L 6006:localhost:6006 -L 8000:localhost:8000 \
    <netid>@greene.hpc.nyu.edu

# Forward Ray dashboard (if using Ray)
ssh -L 8265:localhost:8265 <netid>@greene.hpc.nyu.edu
```

### Setting Up Remote Development

```bash
# Start Jupyter in job
srun --pty --gres=gpu:1 --time=04:00:00 --partition=interact \
     singularity exec --nv overlay.img:ro vllm-openai_latest.sif \
     jupyter lab --ip=0.0.0.0 --port=8888 --no-browser
```

### Accessing Inference APIs

```python
# Client script to query your inference server
import requests

def query_model(prompt, server_url="http://localhost:8000"):
    response = requests.post(
        f"{server_url}/generate",
        json={
            "prompt": prompt,
            "max_tokens": 512,
            "temperature": 0.7
        }
    )
    return response.json()

# Example usage
result = query_model("Explain the concept of attention in transformers:")
print(result["generated_text"])
```

---

## Best Practices Summary

### Resource Planning for NYU Greene
- **RTX 8000 GPUs**: Optimal for most LLM tasks (48GB memory)
- **Memory estimation**: ~2GB per billion parameters for inference
- **Storage strategy**: Code in home, active data in scratch, models in VAST
- **Time planning**: Consider 60-day purge policy for scratch/VAST

### Container Strategy
- **Always use Singularity** to avoid file quota issues
- **Pre-build overlays** with all required packages
- **Cache models** in VAST storage for fast loading

### Job Submission Best Practices
- **Request any GPU type** (--gres=gpu:N) for faster scheduling
- **Use scratch space** for all job execution
- **Monitor job efficiency** with seff command
- **Plan for Spring 2025 refresh** when requesting long-term resources

### Model Selection and Optimization
- **Phi-4 (14B)**: Excellent balance of capability and resource requirements
- **LoRA fine-tuning**: Efficient way to customize models
- **Quantization**: Use 4-bit/8-bit for memory-constrained scenarios
- **vLLM**: Preferred for production inference workloads

### Data Management
- **Respect 60-day retention**: Archive important data regularly
- **Use appropriate storage**: VAST for models, scratch for datasets
- **Optimize data formats**: Prefer memory-mapped or chunked data