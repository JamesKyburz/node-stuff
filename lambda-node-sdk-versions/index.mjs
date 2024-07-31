import path from 'node:path'
import fs from 'node:fs/promises'
import process from 'node:process'

const RUNTIME_SDK_DIRECTORY = '/var/runtime/node_modules/@aws-sdk/'

const directories = await fs.readdir(RUNTIME_SDK_DIRECTORY)

/** @type {Array<{name: string, version: string}>} */
const modules = await Promise.all(
  directories
    .filter((x) => x !== 'node_modules')
    .map(async (x) => {
      const { name, version } = JSON.parse(
        await fs.readFile(path.join(RUNTIME_SDK_DIRECTORY, x, 'package.json')),
      )
      return { name, version }
    }),
)

const versions = {
  process: {
    versions: process.versions,
  },
  sdk: modules.reduce((sum, { name, version }) => {
    sum[version] ||= []
    sum[version].push(name.replace(/^@aws-sdk\//, ''))
    return sum
  }, {}),
}


export async function handler() {
  return versions
}
