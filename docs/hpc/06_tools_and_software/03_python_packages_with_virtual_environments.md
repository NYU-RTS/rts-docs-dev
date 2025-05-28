# Python Packages with Virtual Environments

In order to be able to install new Python packages and make your work reproducible, please use virtual environments.

There is more than one way to create a private environment in Python.

## Create project directory and load Python module
```sh
## Find python version you need
module avail python
## created directory for your project and cd there
mkdir /scratch/$USER/my_project
cd /scratch/$USER/my_project
## load python module (different versions available)
module load  python/intel/3.8.6
```

## Automatic deletion of your files
This page describes the installation of packages on /scratch. One has to remember, though, that files stored in the HPC scratch file system are subject to the HPC Scratch old file purging policy: Files on the /scratch file system that have not been accessed for 60 or more days will be purged (read [more](../03_storage/01_intro_and_data_management.mdx)).

Thus you can consider the following options

-   Reinstall your packages if some of the files get deleted
    -   You can do this manually 
    -   You can do this automatically. For example, within a workflow of a pipeline software like [Nextflow](https://www.nextflow.io/)
-   Pay for "Research Project Space" - read more [here](../03_storage/05_research_project_space.mdx) 
-   Use Singularity and install packages within a corresponding overlay file - read more [here](../07_containers/03_singularity_with_conda.md)  

## Create virtual environment
It is advisable to create private environment inside the project directory. This boosts reproducibility and does not use space in `/home/$USER`

### virtualenv
[virtualenv](https://virtualenv.pypa.io/en/latest/) is a tool to create isolated Python environments

Since Python 3.3, a subset of it has been integrated into the standard library under the venv module.

Note: you may need to install virtualenv first, if it is not yet installed ([instructions](https://virtualenv.pypa.io/en/latest/installation.html))

Now create new virtual environment in current directory

-   Empty
-   OR
-   inherit all packages from those installed on HPC already (and available in PATH after you load python module)
```sh
## created directory for your project and cd there
mkdir /scratch/$USER/my_project
cd /scratch/$USER/my_project

## Create an EMPTY virtual environment
virtualenv venv

## Create an virtual environment that inherits system packages
virtualenv venv --system-site-packages
```

### venv
[venv](https://docs.python.org/3/library/venv.html) is package shipped with Python3. It provides subset of options available in virtualenv tool ([link](https://virtualenv.pypa.io/en/latest/)).
```sh
python3 -m venv venv
```

Create new virtual environment in current directory

-   Empty
-   OR
-   inherit all packages from those installed on HPC already (and available in PATH after you load python module)
```sh
## created directory for your project and cd there
mkdir /scratch/$USER/my_project
cd /scratch/$USER/my_project
##EMPTY
## (use venv command to create environment called "venv")

python3 -m venv venv

## Inhering all packages
python3 -m venv venv --system-site-packages
```

## Install packages. Keep things reproducible
```sh
## activate
source venv/bin/activate
## install packages
pip install <package you need>
## If package was inherited, but you want to install it in your own env anyway
pip install <package you need> --ignore-installed
## export list of packages (to report together with paper and/or to reproduce environment on another computer)
pip freeze > requirements.txt
## restore
pip install -r requirements.txt
```

## Close an Activated Virtual Environment
If you have activated a virtual environment, you can exit it with the following command:
```sh
deactivate
```

## Use with sbatch
When you use this env in sbatch script, please use
```sh
module purge;
source venv/bin/activate;
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;
python python_script.py
```

If you use mpi
```sh
mpiexec  bash -c "module purge;
                  source venv/bin/activate;
                  export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;
                  python python_script.py"
```
