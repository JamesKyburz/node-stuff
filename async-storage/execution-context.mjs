import { AsyncLocalStorage } from 'async_hooks'

const store = new AsyncLocalStorage()

/**
 * @typedef {function(string): void} LogFunction
 * @typedef {{
 *   abortSignal: AbortSignal
 *   log: LogFunction
 * }} ExecutionContext
 */

export default {
  /** @returns {ExecutionContext} */
  get current() {
    return store.getStore()
  },
  /** @returns {AsyncLocalStorage<ExecutionContext>} */
  get store() {
    return store
  }
}
