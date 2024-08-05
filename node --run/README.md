# node --run vs npm run

## What's the difference?

No script hooks!

And basically the same except the following env differences

None of the following

- NODE
- INIT_CWD
- npm_config_global_prefix
- npm_config_email
- npm_config_noproxy
- npm_config_local_prefix
- npm_config_globalconfig
- npm_execpath
- npm_package_json
- npm_config_userconfig
- npm_config_init_module
- npm_command
- npm_lifecycle_event
- npm_package_name
- npm_config_npm_version
- npm_config_node_gyp
- npm_package_version
- npm_config_cache
- npm_lifecycle_script
- npm_config_user_agent
- npm_node_execpath
- npm_config_prefix

And a slightly different PATH

npm adds .bin paths to package.json files found in parent directories and also adds

Also as of node 22 we get a warning as this is an experimental feature :)

Both npm and node --run require an extra -- to parse flags to the node script

Example
```sh
npm run x -- --help
node --run x -- --help
```
