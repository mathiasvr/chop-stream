const ChopStream = require('.')

const chop = new ChopStream({ size: 8, padding: true })

chop.on('data', (chunk) => console.log(chunk))

process.stdin.pipe(chop)
