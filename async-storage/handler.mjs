import { setTimeout } from 'node:timers/promises'
import executionContext from './execution-context.mjs'
export async function handler(a, b) {
  const context = executionContext.current
  context.log(`handler started ${JSON.stringify({ a, b })}`)
  await setTimeout(10, { signal: context.abortSignal })
  context.abortSignal.throwIfAborted()
  context.log(`handler completed ${JSON.stringify({ a, b })}`)
  return a * b
}
