# Demo: Using and Fine-Tuning Instruction-Tuned Models on NYU HPC

This tutorial demonstrates how to use and fine-tune instruction-tuned language models on NYU's Greene HPC cluster, specifically showcasing Microsoft's Phi-4 model.

## Prerequisites

Before starting this tutorial, ensure you have:
- An active NYU HPC account with access to Greene
- Completed the [environment setup](03_llm_on_hpc.md#environment-setup) from the main guide
- Basic familiarity with SLURM job submission
- Access to GPU resources on Greene

## Why Instruction-Tuned Models?

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

## Part 1: Inference Demonstration

### Step 1: Create the Inference Script

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
        torch_dtype=torch.float16,  # Use FP16 for efficiency
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

### Step 2: Create the SLURM Job Script

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

# Run the demonstration using Singularity container
echo "Starting Phi-4 demonstration..."

singularity exec --nv \
    --overlay /path/to/your/ml_overlay.img:ro \
    /path/to/your/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python phi4_demo.py

# Check exit status
if [ $? -eq 0 ]; then
    echo "Demonstration completed successfully!"
else
    echo "Demonstration failed with exit code $?"
fi

echo "Job completed on $(date)"
```

### Step 3: Run the Demonstration

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

## Expected Output Examples

### Example 1: Technical Explanation (LoRA Benefits)

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

---

## Part 2: Fine-Tuning LLMs on NYU HPC

We'll demonstrate two approaches to fine-tuning: standard full fine-tuning (similar to the Llama-2 example) and efficient LoRA fine-tuning with Phi-4.

### Option A: Standard Fine-Tuning (Full Parameter Update)

This approach updates all model parameters, similar to the original Llama-2 fine-tuning guide.

#### Create Standard Fine-Tuning Script (`standard_finetune.py`):

```python
#!/usr/bin/env python3
"""
standard_finetune.py - Standard fine-tuning example for LLMs on NYU HPC
Based on the Llama-2 fine-tuning approach using TRL
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

# Set cache directory
os.environ['TRANSFORMERS_CACHE'] = '/vast/$USER/.cache'
os.environ['HF_HOME'] = '/vast/$USER/.cache'

def main():
    # Model selection (Phi-4 as a smaller alternative to Llama-2)
    model_name = "microsoft/phi-4"  # or "NousResearch/Llama-2-7b-chat-hf"
    
    # Load tokenizer and model
    print(f"Loading model: {model_name}")
    tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
    
    # For full fine-tuning, load in FP16 to save memory
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.float16,
        device_map="auto",
        trust_remote_code=True
    )
    
    # Set padding token
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    # Load dataset (using same dataset as Llama-2 example)
    dataset = load_dataset("timdettmers/openassistant-guanaco", split="train")
    
    # Tokenize dataset
    def tokenize_function(examples):
        return tokenizer(
            examples["text"],
            truncation=True,
            padding="max_length",
            max_length=512
        )
    
    tokenized_dataset = dataset.map(tokenize_function, batched=True)
    
    # Training arguments (similar to Llama-2 example)
    training_args = TrainingArguments(
        output_dir="./results",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        gradient_accumulation_steps=2,
        warmup_steps=500,
        learning_rate=2e-5,
        fp16=True,
        logging_steps=10,
        save_steps=1000,
        eval_steps=1000,
        save_total_limit=3,
    )
    
    # Data collator
    data_collator = DataCollatorForLanguageModeling(
        tokenizer=tokenizer,
        mlm=False,
    )
    
    # Create Trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=tokenized_dataset,
        data_collator=data_collator,
        tokenizer=tokenizer,
    )
    
    # Start training
    print("Starting standard fine-tuning...")
    trainer.train()
    
    # Save model
    trainer.save_model("./phi4_standard_finetuned")
    print("Fine-tuning completed!")

if __name__ == "__main__":
    main()
```

#### SLURM Script for Standard Fine-Tuning (`submit_standard_finetune.sh`):

```bash
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=8
#SBATCH --time=24:00:00
#SBATCH --mem=100GB
#SBATCH --job-name=llm-finetune
#SBATCH --gres=gpu:rtx8000:1    # Need 48GB for full fine-tuning

# Navigate to scratch
cd $SCRATCH

# Load modules
module purge
module load singularity/3.11.3

# Set cache directory
export TRANSFORMERS_CACHE=/vast/$USER/.cache

# Copy training script
cp $HOME/llm_demos/phi4_instruction/standard_finetune.py .

# Run fine-tuning using TRL (similar to Llama-2 example)
singularity exec --nv \
    --overlay /path/to/your/ml_overlay.img:ro \
    /path/to/your/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    /bin/bash -c "source /ext3/env.sh; python standard_finetune.py"
```

### Option B: LoRA Fine-Tuning (Parameter Efficient)

LoRA (Low-Rank Adaptation) is more efficient than standard fine-tuning, updating only ~1% of parameters while achieving comparable results.

### Step 1: Prepare Your Dataset

First, create a sample dataset for fine-tuning. Create `prepare_dataset.py`:

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
            "response": "Distributed training in deep learning refers to the practice of training neural networks across multiple computing devices (GPUs or TPUs) to accelerate the training process and handle larger models..."
        },
        {
            "instruction": "What are the main differences between data parallelism and model parallelism?",
            "response": "Data parallelism and model parallelism are two fundamental approaches to distributed training:\n\n1. Data Parallelism: The model is replicated across devices, each processing different batches of data...\n\n2. Model Parallelism: The model itself is split across devices, with different layers or components on different devices..."
        },
        {
            "instruction": "Write a Python function to initialize a distributed training environment using PyTorch.",
            "response": "Here's a Python function to initialize distributed training in PyTorch:\n\n```python\nimport torch\nimport torch.distributed as dist\nimport os\n\ndef init_distributed():\n    # Get rank and world size from environment\n    rank = int(os.environ['RANK'])\n    world_size = int(os.environ['WORLD_SIZE'])\n    \n    # Initialize process group\n    dist.init_process_group(\n        backend='nccl',\n        init_method='env://',\n        world_size=world_size,\n        rank=rank\n    )\n    \n    # Set device\n    torch.cuda.set_device(rank)\n    \n    return rank, world_size\n```"
        },
        # Add more samples for better fine-tuning results
    ]
    
    # Extend with more examples (you'd want 100-1000+ for real fine-tuning)
    extended_samples = []
    for i in range(20):  # Create 20 examples for demo
        extended_samples.append({
            "instruction": f"Explain optimization technique {i+1} for large language models.",
            "response": f"Optimization technique {i+1} focuses on improving efficiency through..."
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

### Step 2: Create the Fine-Tuning Script

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
        torch_dtype=torch.float16,
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
        fp16=True,                      # Use mixed precision
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

### Step 3: Create Fine-Tuning SLURM Script

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
    --overlay /path/to/your/ml_overlay.img:rw \
    /path/to/your/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python prepare_dataset.py

# Run fine-tuning
echo "Starting LoRA fine-tuning..."
singularity exec --nv \
    --overlay /path/to/your/ml_overlay.img:rw \
    /path/to/your/pytorch_2.1.0-cuda12.1-cudnn8-runtime.sif \
    python phi4_lora_finetune.py

echo "Fine-tuning completed on $(date)"
```

### Step 4: Test the Fine-Tuned Model

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
        torch_dtype=torch.float16,
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

### Comparison: Standard vs LoRA Fine-Tuning

| Aspect | Standard Fine-Tuning | LoRA Fine-Tuning |
|--------|---------------------|------------------|
| **Memory Usage** | ~30-40GB for 7B model | ~10-15GB for 7B model |
| **Training Time** | 16+ hours | 3-6 hours |
| **Parameters Updated** | All (100%) | ~0.1-1% |
| **Storage per Checkpoint** | Full model size (14-28GB) | ~10-50MB |
| **Original Model Preserved** | No | Yes |
| **Multi-task Capability** | Requires separate models | Swap LoRA adapters |

### Which Approach to Choose?

- **Use Standard Fine-Tuning when**:
  - You need maximum performance on a specific task
  - You have sufficient GPU memory (48GB+)
  - You're creating a production model for a single use case
  
- **Use LoRA Fine-Tuning when**:
  - You have limited GPU resources
  - You need to fine-tune for multiple tasks
  - You want to preserve the original model's capabilities
  - You're experimenting or prototyping

## Running the Complete Pipeline

1. **Prepare your environment**:
   ```bash
   cd $HOME/llm_demos/phi4_instruction
   # Create all the Python scripts shown above
   ```

2. **Run inference demo**:
   ```bash
   sbatch submit_phi4_demo.sh
   ```

3. **Run fine-tuning**:
   ```bash
   sbatch submit_phi4_finetune.sh
   ```

4. **Test the fine-tuned model**:
   ```bash
   # After fine-tuning completes
   sbatch --wrap="singularity exec --nv --overlay /path/to/overlay.img:ro \
                  /path/to/container.sif python test_finetuned_model.py"
   ```

## Key Benefits of LoRA Fine-Tuning

1. **Memory Efficiency**: Only ~0.1% of parameters are trainable
2. **Fast Training**: 3-5x faster than full fine-tuning
3. **Preservation**: Original model knowledge is retained
4. **Flexibility**: Multiple LoRA adapters for different tasks
5. **Storage**: Each adapter is only ~10-50MB

## Troubleshooting

### Common Issues and Solutions

1. **Out of Memory (OOM) Error**
   - Use 4-bit quantization (as shown)
   - Reduce batch size
   - Enable gradient checkpointing

2. **Slow Fine-Tuning**
   - Ensure using VAST storage for cache
   - Check GPU utilization with `nvidia-smi`
   - Consider reducing number of epochs

3. **Poor Fine-Tuning Results**
   - Increase dataset size (100+ examples minimum)
   - Adjust learning rate (try 1e-4 to 5e-4)
   - Increase LoRA rank (r=32 or r=64)

## Next Steps

1. **Scale up your dataset** - Use your domain-specific data
2. **Experiment with hyperparameters** - Adjust LoRA rank, learning rate
3. **Deploy the fine-tuned model** - See [vLLM deployment guide](03_llm_on_hpc.md#model-inference)
4. **Try other models** - Apply same technique to Mistral, Llama, etc.

## Alternative Inference Frameworks

### Vector Inference: Simplified vLLM Deployment on Slurm

The Vector Institute's [vector-inference](https://github.com/VectorInstitute/vector-inference) framework provides an easy-to-use solution for running inference servers on Slurm-managed clusters. It acts as a wrapper around vLLM, simplifying deployment and management.

**Key Features**:
- **Simple CLI/API Interface**: Launch models with a single command (e.g., `vec-inf launch Meta-Llama-3.1-8B-Instruct`)
- **Slurm-Native Integration**: Automatically handles job submission, monitoring, and resource allocation
- **Pre-configured Models**: Supports popular models with optimized settings out-of-the-box
- **Custom Model Support**: Deploy any vLLM-compatible model with custom configurations
- **Built-in Monitoring**: Stream performance metrics and check model status
- **Dynamic Configuration**: Override default parameters for QoS, partitions, and vLLM engine arguments

**Installation and Basic Usage**:
```bash
# Install vector-inference
pip install vec-inf

# Launch a model (example with Phi-4)
vec-inf launch microsoft/phi-4 --gpus-per-node 1 --qos normal

# Check status
vec-inf status <job_id>

# Shutdown when done
vec-inf shutdown <job_id>
```

**Custom Model Configuration Example for NYU HPC**:
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
      --dtype: float16
```

**Advantages for NYU HPC Users**:
1. **Simplified Workflow**: No need to write complex SLURM scripts for inference servers
2. **Automatic URL Management**: Exposes endpoints automatically when models are ready
3. **Resource Optimization**: Pre-tuned configurations for common models
4. **Easy Scaling**: Built-in support for multi-node deployments

**Current Status**: Vector Inference is ready for testing on NYU Greene. To adapt for NYU's environment:
1. Update environment variables for NYU's Slurm configuration
2. Modify model paths to use NYU's storage systems (VAST/Scratch)
3. Adjust QoS and partition settings to match NYU's queue structure

**Integration with This Tutorial**: You can use Vector Inference as an alternative to manually managing vLLM servers. For example, instead of the manual vLLM setup shown earlier, you could:
```bash
# Using Vector Inference for Phi-4
vec-inf launch microsoft/phi-4 --vllm-args '--tensor-parallel-size=1,--gpu-memory-utilization=0.9'
```