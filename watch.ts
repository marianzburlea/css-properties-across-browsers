// watch.ts
import { watch } from 'bun'

watch('count.ts', {
  onChange: () => {
    console.clear() // Optional: Clear the console for cleaner output
    console.log('File changed! Restarting...')
    Bun.spawn(['bun', 'run', 'count.ts'])
  },
})

console.log('Watching count.ts for changes...')
