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
Quotas are cached in a Redis store.<br>
| filesystem                    | Redis DB ID |
|   :---                        |    :---:    |
| /vast                         | 0           |
| utils (not an endpoint)       | 1           |
| dynamically added filesystems | 2-99        |

### Utils database
The utils database contains two dictionaries that map the relationship between endoints, filesystems & filesets, and Redis databases:

- endpoints2filesystemset
   - a mapping from endpoint to filesystem and fileset
- filesystemset2db
   - a mapping from filesystem and fileset to Redis database number

### Dynamically added filesystems
The code creates and maintains a database for each endpoint.  The databases are updated around every 20 minutes.  This can be changed by setting a different value in `load_user_quotas_redis()` in vast.py for Vast and in `load_quotas()` in gpfs.py for GPFS.

## Valid endpoints

- `/dicts`
   - return the utility dictionaries described above
- `/filesets/{filesystem}`
   - returns all filesets for a given filesystem
- `/filesystems`
   - returns all filesystems
- `/healthz`
   - returns a status message of 'ok' to confirm that the system is running normally
   - also starts a background task to check and update the cache
- `/quota/gpfs/{endpoint}/{username}`
   - returns a given user's quota for a given endpoint
      - Note: endpoints are defined in the endpoints2filesystemset dictionary described above
   - also starts a background task to check and update the cache
- `/quotas/gpfs/{endpoint}`
   - returns all quotas for a given endpoint
      - Note: endpoints are defined in the endpoints2filesystemset dictionary described above
   - also starts a background task to check and update the cache
- `/rebuild_cache`
   - does a full rebuild of the Redis cache
- `/update_cache/{endpoint}`
   - updates the cache for a given endpoint
   - Note: endpoints are defined in the endpoints2filesystemset dictionary described above
