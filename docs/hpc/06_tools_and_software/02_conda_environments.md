# Conda Environments (Python, R)

## What is Conda?
Package, dependency and environment management for any language—Python, R, Ruby, Lua, Scala, Java, JavaScript, C/ C++, FORTRAN, and more.

Please find more information at this link: [https://docs.conda.io/en/latest/](https://docs.conda.io/en/latest/)

Conda provides a great way to install packages that are already compiled, so you don't need to go over the long compilation process. If a package you need is not available, you can install it (and compile it when needed) using pip (Python) or install.packages (R).

:::note
Reproducibility:
One of the ways to ensure the reproducibility of your results is to have an independent conda environment in the directory of each project (one of the options shown below). This will also keep conda environment files away from your /home/$USER directory.
:::

## Advantages/disadvantages of using Conda
### Advantages

-   A lot of pre-compiled packages (fast and easy to install)
-   Note for Python: pip also offers pre-compiled packages (wheels). List can be found here https://pythonwheels.com. However, Conda has a significantly larger number of pre-compiled packages.
-   Compiled packages use highly efficient Intel Math Kernel Library (MKL) library

### Disadvantages

-   Conda does not take advantage of packages already installed in the system (while [virtualenv and venv](./03_python_packages_with_virtual_environments.md) do)
-   As you will see below, you may need to do additional steps to keep track of all installed packages (including those installed by pip and/or install.packages)

## Initializing Conda
Load anaconda module
```sh
module purge
module load anaconda3/2020.07
```

Conda init can create problems with package installation, so we suggest using `source activate` instead of `conda activate`, even though conda activate is considered a best practice by the Anaconda developers.

### Automatic deletion of your files
This page describes the installation of packages on /scratch. One has to remember, though, that files stored in the HPC scratch file system are subject to the HPC Scratch old file purging policy: Files on the /scratch file system that have not been accessed for 60 or more days will be purged (read more about [Data Management](../03_storage/01_intro_and_data_management.mdx).

Thus you can consider the following options

-   Reinstall your packages if some of the files get deleted
    -   You can do this manually 
    -   You can do this automatically. For example, within a workflow of a pipeline software like [Nextflow](https://www.nextflow.io/)
-   Pay for "Research Project Space" - read more [here](../03_storage/05_research_project_space.mdx)
-   Use Singularity and install packages within a corresponding overlay file - read more [here](../07_containers/03_singularity_with_conda.md)  

## Python
Load anaconda module
```sh
module purge
module load anaconda3/2020.07
```
:::tip
Keep your program/project in `/scratch` and create conda environment using '-p' parameter. This will keep all the files inside the project's directory, instead of putting in in your `/home/$USER`
:::

```sh
conda create -p ./penv python=3  ## environment will be created in project directory
conda activate ./penv 
```
Also, you need to create a symbolic link, so conda will download files for packages to be installed into scratch, not your home directory.
```sh
mkdir /home/<NetID>/.conda
mkdir /scratch/<NetID>/conda_pkgs
ln -s /scratch/<NetID>/conda_pkgs /home/<NetID>/.conda/pkgs
```
[Install pre-compiled packages available in conda](https://anaconda.org/anaconda/repo)
```sh
conda install -c anaconda pandas
```

Other packages may be installed (and compiled when needed) using pip
```sh
pip install <package_name>
```
:::note
Conda and packages install by default to `~/.local/lib/python<version>`
:::

If you did use `'pip install --user'` to install some packages (without conda or other virtual environment), they will be available in `~/.local/lib/python<version>`

:::warning
***The primary takeaway:***

Let say you have tornado v.6 installed in `~/.local/lib/python<version>`, and tornado v.5 installed by `conda install`.

When you will do `conda activate` you will have tornado v.6 available!! Not v.5!!

(this behaviour is the same for packages installed by to `~/.local/lib/python<version>` before or after you create your conda environment)

`pip freeze` will give v.6

`conda list` will give v.5

***Solution***

To overcome this, do `export PYTHONNOUSERSITE=True` after conda activate
:::

## R
Load anaconda module
```sh
module load anaconda3/2020.07
```
:::tip
Keep your program/project in `/scratch` and create conda environment using '-p' parameter. This will keep all the files inside the project's directory, instead of putting them in your `/home/$USER`
:::

```sh
conda create -p ./renv r=3.5 ## environment will be created in project directory
## OR
conda create -c conda-forge -p ./penv r-base=3.6.3 ## environment will be created in project directory
conda activate ./renv
```

Install pre-compiled packages available in conda:

[https://docs.anaconda.com/anaconda/packages/r-language-pkg-docs/](https://docs.anaconda.com/anaconda/packages/r-language-pkg-docs/)

```sh
conda install -c r r-dplyr
```

Other packages may be installed (and compiled) using install.packages()
```sh
install.packages("<package_name>")
```

## Reproducibility
Packages installed only using conda

Save a list of packages (so you are able to report environment in publication, and to restore/reproduce env on another machine at any time)

```sh
# save
conda list --export > requirements.txt
# restore
conda create -p ./penv --file requirements.txt
```
:::note
This will not list packages installed by `pip` or `install.packages()`
:::

If you installed extra packages using pip (Python)

In this you can use
```sh
export PYTHONNOUSERSITE=True  ## to ingnore packages in ~/.local/lib/python<version>
# save
conda list --export > conda_requirements.txt
pip freeze > pip_requirements.txt
# restore
conda create -p ./penv --file conda_requirements.txt
pip install -r pip_requirements.txt
```

:::note
Alternatively, you can use conda env export > all_requirements.txt, which will save both: packages installed by conda and by pip.
:::

However, this may fail if your conda environment is created as a sub-directory of your project's directory (which we recommend)

Installed extra packages using install.packages? (R)

Usecase: You need packages not availalbe in conda channels, and want to use install.packages.

Command `conda list --export` will not include packages installed by "install.packages". So, do not use `conda install` at all. To have reproducibility in this case you need to use Conda and renv together, as described below

Conda + pakcrat: specific version of R and install.packages (R)

-   use conda to install version of R you need
-   do not use 'conda install' at all
-   use renv
-   install all the packages using install.packages
-   use [renv as described here](../06_tools_and_software/04_r_packages_with_renv.md) to keep track of the environment

In order for conda + renv to work, you need to add following steps:

-   After you activate conda AND before loading R
    ```sh
    export R_RENV_DEFAULT_LIBPATHS=<path_to_project_directory>/renv/lib/x86_64-conda_cos6-linux-gnu/<version>/
    ```
-   Start R and execute
    ```sh
    .libPaths(c(.libPaths(), Sys.getenv("R_RENV_SYSTEM_LIBRARY")))
    ```

## Use conda env in a batch script
The part of the batch script which will call the command shall look like (replace `<path_to_env>` to an appropriate value)

### Python

#### Single node
```bash
#!/bin/bash
#SBATCH --job-name=test
#SBATCH --nodes=1
#SBATCH --cpus-per-task=1
#SBATCH --ntasks-per-node=4
#SBATCH --mem=8GB
#SBATCH --time=1:00:00
module purge;
module load anaconda3/2020.07;
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;
source /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;
conda activate ./penv;
export PATH=./penv/bin:$PATH;
python python_script.py
```

#### Multiple nodes, using MPI
```sh
mpiexec --mca bash -c "module purge;
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;
module load anaconda3/2020.07;
source /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;
conda activate ./penv;
export PATH=./penv/bin:$PATH;
python python_script.py"
```

### R (conda packages only)
```bash
#!/bin/bash
#SBATCH --job-name=test
#SBATCH --nodes=1
#SBATCH --cpus-per-task=1
#SBATCH --ntasks-per-node=4
#SBATCH --mem=8GB
#SBATCH --time=1:00:00
module purge;
module load anaconda3/2020.07;
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;
source /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;
conda activate ./renv;
export PATH=./renv/bin:$PATH;
Rscript r_script.R
```

#### Multiple nodes, using MPI
```sh
mpiexec --mca bash -c "module purge;
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK;
module load anaconda3/2020.07;
source /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh;
conda activate ./renv;
export PATH=./renv/bin:$PATH;
Rscript r_script.R"
```

### R (conda with renv combination)

In this case, when you use sbatch you would activate conda in sbatch script, and R script will pickup packages installed in renv
```sh
module purge
module load  anaconda3/2020.07
source /share/apps/anaconda3/2020.07/etc/profile.d/conda.sh
conda activate ./renv
Rscript test.R
```
