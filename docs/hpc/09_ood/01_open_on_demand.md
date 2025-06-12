# Open OnDemand (OOD) with Conda/Singularity

[Open OnDemand](https://ood.hpc.nyu.edu/) is a tool that allows users to launch Graphical User Interfaces (GUIs) based applications are accessible without modifying your HPC environment. You can log into the Open OnDemand interface at [https://ood.hpc.nyu.edu](https://ood.hpc.nyu.edu). Once logged in, select the **Interactive Apps** menu, select the desired application, and submit the job based on required resources and options. 

:::note
If you're not on the NYU network, you may need to connect via NYU's Virtual Private Network (VPN) before connecting to [https://ood.hpc.nyu.edu](https://ood.hpc.nyu.edu).  [Read the details about NYU's VPN and instructions for connecting](https://www.nyu.edu/life/information-technology/infrastructure/network-services/vpn.html).
:::

## OOD + Singularity + conda
This page describes how to use your Singularity with conda environment in Open OnDemand (OOD) GUI at Greene. 

### Log Into Greene via the Terminal
The following commands must be run from the terminal. Information on accessing via the terminal can be found at the [Connecting to the HPC page](../02_connecting_to_hpc/01_connecting_to_hpc.mdx). 

### Preinstallation Warning
:::warning
If you have initialized Conda in your base environment, your prompt on Greene may show something like:
```sh
(base) [NETID@log-1 ~]$
```
then you must first comment out or remove this portion of your `~/.bashrc` file:

```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/share/apps/anaconda3/2020.07/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh" ]; then
        . "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh"
    else
        export PATH="/share/apps/anaconda3/2020.07/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

The above code automatically makes your environment look for the default shared installation of Conda on the cluster and will sabotage  any attempts to install packages to a Singularity environment. Once removed or commented out, log out and back into the cluster for a fresh environment.
:::

### Prepare Overlay File 
```sh
mkdir /scratch/$USER/my_env
cd /scratch/$USER/my_env
cp -rp /scratch/work/public/overlay-fs-ext3/overlay-15GB-500K.ext3.gz .
gunzip overlay-15GB-500K.ext3.gz
```
Above we used the overlay file "overlay-15GB-500K.ext3.gz" which will contain all of the installed packages. There are more optional overlay files. You can find instructions on the following pages: [Singularity with Conda](../07_containers/03_singularity_with_conda.md), [Squash File System and Singularity](../07_containers/04_squash_file_system_and_singularity.md). 

### Launch Singularity Environment for Installation
```sh
singularity exec --overlay /scratch/$USER/my_env/overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif /bin/bash
```
Above we used the Singularity OS image "cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif " which provides the base operating system environment for the conda environment. There are other Singularity OS images available at `/scratch/work/public/singularity`

Launching Singularity with the --overlay flag mounts the overlay file to a new directory: /ext3 - you will notice that when not using Singularity /ext3 is not available. Be sure that you have the Singularity prompt (Singularity>) and that /ext3 is available before the next step:
```sh
Singularity> ls -lah /ext3
total 8.5K
drwxrwxr-x.  2 root root 4.0K Oct 19 10:01 .
drwx------. 29 root root 8.0K Oct 19 10:01 ..
```

### Install Miniforge to Overlay File
```sh
wget --no-check-certificate https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
sh Miniforge3-Linux-x86_64.sh -b -p /ext3/miniforge3
```
Next, create a wrapper script at /ext3/env.sh
```sh
touch /ext3/env.sh
echo '#!/bin/bash' >> /ext3/env.sh
echo 'unset -f which' >> /ext3/env.sh
echo 'source /ext3/miniforge3/etc/profile.d/conda.sh' >> /ext3/env.sh
echo 'export PATH=/ext3/miniforge3/bin:$PATH'         >> /ext3/env.sh
echo 'export PYTHONPATH=/ext3/miniforge3/bin:$PATH'   >> /ext3/env.sh
```
Your /ext3/env.sh file should now contain  the following:
```bash
#!/bin/bash
   unset -f which
source /ext3/miniforge3/etc/profile.d/conda.sh
export PATH=/ext3/miniforge3/bin:$PATH
export PYTHONPATH=/ext3/miniforge3/bin:$PATH
```
The wrapper script will activate your conda environment, to which you will be installing your packages and dependencies. 

Next, activate your conda environment with the following:
```sh
source /ext3/env.sh
```

### Install Packages to Miniforge Environment
Now that your environment is activated, you can update and install packages
```sh
conda config --remove channels defaults
conda update -n base conda -y
conda clean --all --yes
conda install pip --yes
conda install ipykernel --yes # Note: ipykernel is required to run as a kernel in the Open OnDemand Jupyter Notebooks
```
To confirm that your environment is appropriately referencing your Miniforge installation, try out the following:
```sh
unset which
which conda
# output: /ext3/miniforge3/bin/conda

which python
# output: /ext3/miniforge3/bin/python

python --version
# output: Python 3.8.5

which pip
# output: /ext3/miniforge3/bin/pip
```

Now use either conda install or pip to install your required python packages to the Miniforge environment.

To install larger packages, like Tensorflow, you must first start an interactive job with adequate compute and memory resources to install packages. The login nodes restrict memory to 2GB per user, which may cause some large packages to crash.
```sh
srun --cpus-per-task=2 --mem=10GB --time=04:00:00 --pty /bin/bash

# wait to be assigned a node

singularity exec --overlay /scratch/$USER/my_env/overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif /bin/bash

source /ext3/env.sh
# activate the environment
```

After it is running, you’ll be redirected to a compute node. From there, run singularity to setup on conda environment, same as you were doing on login node.

### Configure iPython Kernels
To create a kernel named my_env copy the template files to your home directory.
```sh
mkdir -p ~/.local/share/jupyter/kernels
cd ~/.local/share/jupyter/kernels
cp -R /share/apps/mypy/src/kernel_template ./my_env # this should be the name of your Singularity env
cd ./my_env 

ls
#kernel.json  logo-32x32.png  logo-64x64.png  python # files in the ~/.local/share/jupyter/kernels directory
```

To set the conda environment, edit the file named 'python' in /.local/share/jupyter/kernels/my_env/. 

The python file is a wrapper script that the Jupyter notebook will use to launch your Singularity container and attach it to the notebook.

At the bottom of the file we have the template singularity command.
```sh
singularity exec $nv \
  --overlay /scratch/$USER/my_env/overlay-15GB-500K.ext3:ro \
  /scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif \
  /bin/bash -c "source /ext3/env.sh; $cmd $args"
```
:::warning
If you used a different overlay (/scratch/$USER/my_env/overlay-15GB-500K.ext3 shown above) or .sif file (/scratch/work/public/singularity/cuda12.3.2-cudnn9.0.0-ubuntu-22.04.4.sif shown above), you MUST change those lines in the command above to the files you used.
:::

Edit the default kernel.json file by setting PYTHON_LOCATION and KERNEL_DISPLAY_NAME using a text editor like nano/vim.
```json
{
 "argv": [
  "PYTHON_LOCATION",
  "-m",
  "ipykernel_launcher",
  "-f",
  "{connection_file}"
 ],
 "display_name": "KERNEL_DISPLAY_NAME",
 "language": "python"
}
```
to
```json
{
 "argv": [
  "/home/<Your NetID>/.local/share/jupyter/kernels/my_env/python",
  "-m",
  "ipykernel_launcher",
  "-f",
  "{connection_file}"
 ],
 "display_name": "my_env",
 "language": "python"
}
```
Update the `"<Your NetID>"` to your own NetID without the `"<>"` symbols.

### Launch an Open OnDemand Jupyter Notebook
[https://ood.hpc.nyu.edu](https://ood.hpc.nyu.edu)

![OOD Launch](./static/OOD_launch.png)
