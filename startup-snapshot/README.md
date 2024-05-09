# in memory search using startup snapshot

```sh
npx esbuild \
  --bundle \
  --minify \
  --platform=node \
  persist-2-json-file-to-memory-snapshot.cjs \
  > persist-2-json-file-to-memory-snapshot-bundle.cjs
```

```sh
node \
  --snapshot-blob \
  snapshot.blob \
  --build-snapshot \
  persist-2-json-file-to-memory-snapshot-bundle.cjs \
  products.ldjson \
  products
```

```sh
node --snapshot-blob snapshot.blob main.mjs
```

## thoughts?

We could use this approach to build a snapshot.

Then we could override AWS_LAMBDA_EXEC_WRAPPER in lambda to add the --snapshot-blob argument (and download it from s3 if not using efs)....

## limitations?

Lots....

- user snap shots can't include any ESM code, even if dynamic imports are used from cjs
- not all cjs code works either
- if the snapshot becomes large we need either EFS (which would also meen a VPC), or to increase the 512MB storage for the lambda
- downloading from s3 to lambda ephemeral storage would increase cold starts
- the exec wrapper has it's own limitions
- example bootstrap.sh (AWS_LAMBDA_EXEC_WRAPPER /var/task/bootstrap.sh)
```sh
#!/usr/bin/env bash

args=("$@")
  
# remove last runtime argument
if ! "${@:1:$#-1}" /var/task/download-snapshot.mjs; then
  echo failed to download
fi

# the extra options to pass to the interpreter
extra_args=("--snapshot-blob" "/tmp/snapshot.blob")

# insert the extra options
args=("${args[@]:0:$#-1}" "${extra_args[@]}" "${args[@]: -1}")

# start the runtime with the extra options
exec "${args[@]}"
```
