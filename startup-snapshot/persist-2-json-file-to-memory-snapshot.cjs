'strict on'

const { create, search, insert } = require('@orama/orama')
const { createReadStream } = require('node:fs')

if (process.execArgv.length < 3) {
  throw new Error('missing --snapshot-blob blob-filename --build-snapshot')
} else if (!process.execArgv.includes('--snapshot-blob')) {
  throw new Error('missing --snapshot-blob')
} else if (!process.execArgv.includes('--build-snapshot')) {
  throw new Error('missing --build-snapshot')
}

const [filePath, globalEnvName] = process.argv.slice(2)

if (!filePath) {
  throw new Error('missing file path first argument')
}

if (!globalEnvName) {
  throw new Error('missing global env name second argument')
}

buildSearch().catch(err => {
  console.error(err.toString())
  process.exit(1)
})

async function buildSearch() {
  const db = await create({
    schema: {
      name: "string",
      description: "string",
      price: "number",
      meta: {
        rating: "number",
      },
    }
  })

  for await (const product of ldjson(filePath)) {
    await insert(db, product)
  }
  globalThis[globalEnvName] = async function searchByArgs(...args) {
    return await search(db, ...args)
  }
}

async function * ldjson (filePath) {
  const stream = createReadStream(filePath)

  let incomplete = ''

  for await (const chunk of stream) {
    const data = chunk.toString('utf8').split(/\n/)
    for (const line of data) {
      try {
        const json = JSON.parse(incomplete + line)
        incomplete = ''
        yield json
      } catch {
        incomplete = line
      }
    }
  }
}
