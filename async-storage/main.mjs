import executionContext from './execution-context.mjs'
import { handler } from './handler.mjs'
import { setTimeout } from 'node:timers/promises'


const results = await Promise.allSettled([...Array(3).keys()].map(async (id) => {
  const abortSignal = AbortSignal.timeout(30)
  /** @type {import('./execution-context.mjs').ExecutionContext */
  const context = {
    abortSignal,
    log: createLog(id)
  }
  return executionContext.store.run(context, async function run(...args) {
    const result = await handler(...args)
    context.abortSignal.throwIfAborted()
    return result
  }, Math.random(), Math.random() )
}))

for (const result of results) {
  console.log(result.reason ?? result.value)
}

/**
 * @param {string} id
 * @returns {import('./execution-context.mjs').LogFunction}
 */
function createLog(id) {
  /** @type {import('./execution-context.mjs').LogFunction} */
  return function log(message) {
    console.log(`id ${id} %s`, message)
  }
}
