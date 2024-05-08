const result = await globalThis.products({ term: 'computer', properties: ['name'], tolerance: 1 })

console.log(JSON.stringify(result, undefined, 2))

/*

import { fork } from 'node:child_process'
console.time('fork')
const child = fork('./snapshot.blob', [], { execArgv: ['--snapshot-blob'] })
console.timeEnd('fork')

console.time('searching')

const result = await new Promise((resolve, reject) => {
  child.once('message', resolve)
  child.once('exit', code => reject(new Error(`child exited with ${code}`)))
  child.send({ term: 'wireless' })
})

console.log('got! %s', JSON.stringify(result, null, 2))
console.timeEnd('searching')

{
console.time('searching again')

const result = await new Promise((resolve, reject) => {
  child.once('message', resolve)
  child.once('exit', code => reject(new Error(`child exited with ${code}`)))
  child.send({ term: 'wireless' })
})

console.log('got! %s', JSON.stringify(result, null, 2))
console.timeEnd('searching again')
}

*/
