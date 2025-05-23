# Fine tune LLMs on HPC

## System Environment Setup

### Singularity Container & Overlay Configuration

|Component|Configuration|
|---|---|
|Singularity Image|`/scratch/work/public/singularity/cuda11.2.2-cudnn8-devel-ubuntu20.04.sif`|
|Overlay|Created using `singularity overlay create --size 25000 overlay-25GB-conda.ext3`|
|Conda Path|`/ext3/miniconda3` within overlay|
|Singularity Shell Command|See below|

```bash
singularity shell --nv \
  --overlay /scratch/ml7612/fine-tune/overlay-25GB-conda.ext3:rw \
  /scratch/work/public/singularity/cuda11.2.2-cudnn8-devel-ubuntu20.04.sif
```

### Python Environment and Dependency Installation

```bash
bash Miniconda3-latest-Linux-x86_64.sh -b -p /ext3/miniconda3
source /ext3/miniconda3/bin/activate
pip install torch transformers datasets accelerate peft trl
```

### Model Cache Configuration for Hugging Face

To avoid exceeding home directory quotas during large model downloads:

```bash
export HF_HOME=/scratch/ml7612/.cache/huggingface
```

Ensure this is set both interactively and within sbatch scripts.

---

## Operational Troubleshooting: Common Errors and Recommended Fixes

This section provides a comprehensive overview of all environment-related issues encountered during the fine-tuning of `NousResearch/Llama-2-7b-chat-hf` on the NYU Greene HPC cluster. Each entry includes the error symptom, root cause, and resolution strategy, categorized for clarity.

### 1. Filesystem and Path Setup Issues

|Problem|Symptom|Cause|Resolution|
|---|---|---|---|
|Incorrect overlay filename|No such file: `overlay-50GB-500K.ext3.gz`|The filename was incorrectly assumed|Use `ls /scratch/work/public/overlay-fs-ext3/` to verify the correct file: `overlay-50G-10M.ext3.gz`|
|Compressed overlay used directly|`FATAL: while loading overlay images...`|Attempted to use `.gz` file directly with Singularity|Run `gunzip overlay-50G-10M.ext3.gz` before using the file|
|Overlay missing in working directory|sbatch cannot find the overlay file|Overlay not copied to the training directory|Ensure the overlay file is placed in `/scratch/ml7612/fine-tune/` where sbatch accesses it|
|Invalid overlay structure|`FATAL: could not create upper dir`|Overlay created via `fallocate` + `mkfs.ext3`, missing necessary internal structure|Always use `singularity overlay create --size 25000` to create overlays|

### 2. Container Runtime and Overlay Mounting Errors

|Problem|Symptom|Cause|Resolution|
|---|---|---|---|
|GPU warning on login node|`WARNING: Could not find any nv files`|`--nv` flag used outside GPU-enabled session|Ignore the warning, or only use `--nv` within a `srun --gres=gpu:1` session|
|Overlay locked by another process|`overlay in use by another process`|An interactive container shell using the overlay was still active|Run `lsof` or `ps aux` and terminate blocking process|

### 3. Python Package Installation and Environment Setup Errors

|Problem|Symptom|Cause|Resolution|
|---|---|---|---|
|`which pip` returns `Illegal option --`|Unexpected error when checking pip|Uses `/usr/bin/which` instead of Bash built-in|Use `command -v pip` or simply run `pip --version`|
|`xformers` install fails due to missing torch|`No module named torch` during install|PyTorch not installed before building `xformers`|Install torch first: `pip install torch`, then `pip install xformers`|
|Missing `transformers` in sbatch|`ImportError: No module named transformers`|Conda not activated in job script|Add `source /ext3/miniconda3/bin/activate` before executing the training script|
|Installed pip packages not found|Training job fails to locate modules|pip used outside overlay context|Only install packages while the overlay is mounted with `:rw` in an active container session|

### 4. Disk Quota and Cache Management Issues

|Problem|Symptom|Cause|Resolution|
|---|---|---|---|
|Quota exceeded on home|`OSError: [Errno 122] Disk quota exceeded: ~/.cache/huggingface`|Default HuggingFace cache path inside `/home`|Set `HF_HOME=/scratch/$USER/.cache/huggingface`|
|Cache redownloading on each sbatch|Hugging Face cache not shared|`HF_HOME` not consistently defined|Persist and reuse the same `HF_HOME` path across runs|

### 5. Slurm Job Submission and Runtime Failures

|Problem|Symptom|Cause|Resolution|
|---|---|---|---|
|Invalid Slurm account|`sbatch: Invalid account`|`--account` flag not set or invalid|Use `--account=pr_100_tandon_priority`|
|Conda environment not recognized|`No module named transformers`|Activation missing in sbatch|Add `source /ext3/miniconda3/bin/activate` in sbatch|
|Overlay not found during job|sbatch fails to locate file|Overlay not placed in expected directory|Ensure all relevant files are in `/scratch/ml7612/fine-tune/` or update paths accordingly|

---

## Recommended Best Practices for Stable Execution

| Recommendation                                        | Rationale                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| Use `singularity overlay create` for overlay creation | Ensures `upper/` and `work/` directories are properly set up |
| Install pip packages only after mounting overlay      | Ensures packages persist and are isolated inside the overlay |
| Activate Conda explicitly in sbatch                   | Slurm jobs do not inherit interactive shell environments     |
| Set `HF_HOME` to `/scratch`                           | Prevents hitting disk quota limits in home directories       |
| Avoid `return_tensors="pt"` in tokenizer mapping      | Leads to shape mismatch errors in batched training           |
| Use subset sampling (e.g., `train[:1%]`) for testing  | Minimizes resource consumption and enables fast debugging    |

---

## Model and Dataset Selection Rationale

|Component|Configuration|
|---|---|
|Model|`NousResearch/Llama-2-7b-chat-hf`|
|Dataset|`timdettmers/openassistant-guanaco`|
|Justification|Lightweight, instruction-style dataset ideal for adapter-based fine-tuning|

---

## LoRA Configuration Parameters

```python
peft_config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type=TaskType.CAUSAL_LM
)
```

---

## sbatch Job Script for Model Training

```bash
#!/bin/bash
#SBATCH --job-name=llama2-finetune
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=4
#SBATCH --mem=40GB
#SBATCH --gres=gpu:1
#SBATCH --time=12:00:00
#SBATCH --output=/scratch/ml7612/fine-tune/phi4_train_%j.out
#SBATCH --error=/scratch/ml7612/fine-tune/phi4_train_%j.err
#SBATCH --mail-type=END,FAIL
#SBATCH --mail-user=ml7612@nyu.edu

export HF_HOME=/scratch/ml7612/.cache/huggingface

singularity exec --nv \
  --overlay /scratch/ml7612/fine-tune/overlay-25GB-conda.ext3:rw \
  /scratch/work/public/singularity/cuda11.2.2-cudnn8-devel-ubuntu20.04.sif \
  /bin/bash -c "
    source /ext3/miniconda3/bin/activate
    cd /scratch/ml7612/fine-tune
    python train_phi4.py
"
```

---

## Generated Output Artifacts

|File|Description|
|---|---|
|`adapter_model.safetensors`|LoRA adapter weights|
|`adapter_config.json`|Adapter architecture definition|
|`trainer_state.json`|Training metadata|
|`training_args.bin`|Saved training configuration|
|`tokenizer_config.json`, `tokenizer.json`|Tokenizer data|

Location: `/scratch/ml7612/fine-tune/llama2_output/checkpoint-13/`

---

## Training Completion Summary

|Epochs|Steps|Status|
|---|---|---|
|1|13|Completed successfully|
