# RTS API Applications

Source code for RTS API Apps.

> [!NOTE]
> This repo is under development, only the quotas and IPA services function

---

1. IPA: FreeIPA API - list accounts, manage groups and memberships
1. ~~LDAP: NYU LDAP - query users to get attributes needed to build IPA accounts~~ Use NYU System API (requires code flow auth)
1. Keycloak: Keycloak - authenticate users and retrieve access tokens for app consumption
1. Storage: GPFS and VAST APIs - return all/specific user quotas on RT filesystems
1. Registry: Quay API - view and manage Quay repos, users, and quotas

> [!TIP]
> Architecture - The above services can be deployed as Serverless or Deployment resources in Kubernetes (RTC).

> [!IMPORTANT]
> Credentials - Keycloak client credentials and API service account credentials can be pulled from Vault.

## Setup

Applications are installed and managed via ArgoCD (```nyu-rts/rts-argocd```)

1. ```nyu-rts/rts-fastapi-apps``` - application source code
1. ```nyu-rts/rts-fastapi-k8s``` - application deployment resources
1. ```nyu-rts/rts-argocd``` - deployment CI/CD

## Redis
quotas are cached in a Redis store.<br>
| filesystem    | Redis DB ID |
|   :---        |     :---:   |
| /vast         | 0           |
| /gpfs/home    | 1           |
| /gpfs/scratch | 2           |
| /gpfs/archive | 3           |
| /gpfs/cgsb    | 4           |

## Adding/Modifying GPFS Endpoints
When adding or modifying GPFS endpoints, you'll need to update the following dictionaries in `gpfs/gpfs.py` in `__init__`:
- endpoints2filesystemset
   - a mapping from endpoint to filesystem and fileset
- filesystemset2db
   - a mapping from filesystem and fileset to Redis database number
