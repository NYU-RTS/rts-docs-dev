# Data Transfers

## Data-Transfer nodes
Attached to the NYU HPC cluster Greene, the Greene Data Transfer Node (gDTN) are  nodes optimized for transferring data between cluster file systems (e.g. scratch)  and other endpoints outside the NYU HPC clusters, including user laptops and desktops. The gDTNs have 100-Gb/s Ethernet connections to the High Speed Research Network (HSRN) and are connected to the HDR Infiniband fabric of the HPC clusters. 

### Data Transfer Nodes Specs (gDTN)
-   Node type: Lenovo SR630
-   Number of nodes: 2
-   CPU:  2x Intel Xeon Gold 6244 8C 150W 3.6GHz Processor
-   Memory: 192GB   (total) - 12x 16GB DDR4, 2933MHz
-   Local disk:  1x 1.92TB SSD
-   Infiniband interconnect: 1x Mellanox ConnectX-6 HDR100 /100GbE VPI 1-Port x16 PCIe 3.0 HCA
-   Ethernet connectivity to the NYU High-Speed Research Network ( HSRN ):  200Gbit  - 1x Mellanox ConnectX-5 EDR IB/100GbE VPI Dual-Port x16 PCIe 3.0 HCA

### Data Transfer Node Access
The HPC cluster filesystems include `/home`, `/scratch`, `/archive` and the [HPC Research Project Space](./05_research_project_space.md) are available on the gDTN.

The Data-Transfer Node (DTN) can be accessed in a variety of ways
-   From NYU-net and the High Speed Research Network: use SSH to the DTN hostname `gdtn.hpc.nyu.edu`
-   From the Greene cluster (e.g., the login nodes): the hostname can be shortened to `gdtn`
:::tip
For example, to log in to a DTN from the Greene cluster, to carry out some copy operation, and to log back out, you can use a command sequence like:
```sh
ssh gdtn
rsync ...
logout
```
:::
-   Via specific tools like [Globus](#globus)

## Tools for Data Transfer

### Linux & Mac Tools
#### scp and rsync
:::warning
Please use Data Transfer Nodes (DTNs) with these tools. While one can transfer data while on login nodes, it is  considered a bad practice because it can degrate the node's performance.
:::

Sometimes these two tools are convenient for transferring small files. Using the DTNs does not require to set up an SSH tunnel; use the hostname `dtn.hpc.nyu.edu` for one-step copying. See below for examples of commands invoked on the command line on a laptop running a Unix-like operating system:
```sh
scp HMLHWBGX7_n01_HK16.fastq.gz jdoe55@dtn.hpc.nyu.edu:/scratch/jdoe55/
rsync -av HMLHWBGX7_n01_HK16.fastq.gz jdoe55@dtn.hpc.nyu.edu:/scratch/jdoe55/ 
```
In particular, rsync can also be used on the DTNs to copy directories recursively between filesystems, e.g. (assuming that you are logged in to a DTN),
```sh
rsync -av /scratch/username/project1 /rw/sharename/
```
where username would be your user name, project1 a directory to be copied to the Research Workspace, and sharename the name of a share on the Research Workspace (either your NetID or the name of a project you're a member of).

### Windows Tools
#### File Transfer Clients
Windows 10 machines may have the Linux Subsystem installed, which will allow for the use of Linux tools, as listed above, but generally it is recommended to use a client such as [WinSCP](https://winscp.net/eng/docs/tunneling) or [FileZilla](https://filezilla-project.org/) to transfer data. Additionally, Windows users may also take advantage of [Globus](./04_globus.md) to transfer files.

### Tunneling
[Read the detailed instructions for setting up tunnels.](../02_connecting_to_hpc/02_ssh_tunneling_and_x11_forwarding.md)

### Globus
Globus is the recommended tool to use for large-volume data transfers. It features automatic performance tuning and automatic retries in cases of file-transfer failures. Data-transfer tasks can be submitted via a web portal. The Globus service will take care of the rest, to make sure files are copied efficiently, reliably, and securely. Globus is also a tool for you to share data with collaborators, for whom you only need to provide the email addresses.

The Globus endpoint for Greene is available at `nyu#greene`. The endpoint `nyu#prince` has been retired.

Detailed instructions available at [Globus](./04_globus.md)

### rclone
rclone - rsync for cloud storage, is a command line program to sync files and directories to and from cloud storage systems such as Google Drive, Amazon Drive, S3, B2 etc. rclone is available on DTNs.

[Please see the documentation for how to use it.](https://rclone.org/)

### Open OnDemand (OOD)
One can use [Open OnDemand (OOD)](../09_ood/01_open_on_demand.md) interface to upload data.
:::warning
Please only use OOD for small data transfers!  Please use Data-Transfer Nodes (DTNs) for moving large data.
:::

### FDT
[FDT](https://fast-data-transfer.github.io/) stands for "Fast Data Transfer". It is a command line application written in Java. With the plugin mechanism, FDT allows users to load user-defined classes for Pre- and Post-Processing of file transfers. Users can start their own server processes. If you have use cases for FDT, visit the [download page](https://github.com/fast-data-transfer/fdt/releases) to get `fdt.jar` to start. Please contact [hpc@nyu.edu](mailto:hpc@nyu.edu) for any questions.
