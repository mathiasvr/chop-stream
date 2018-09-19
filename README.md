# chop-stream
[![npm](https://img.shields.io/npm/v/chop-stream.svg)](https://npm.im/chop-stream)
![downloads](https://img.shields.io/npm/dt/chop-stream.svg)
![dependencies](https://img.shields.io/:dependencies-none-green.svg)
[![license](https://img.shields.io/:license-MIT-blue.svg)](https://mvr.mit-license.org)

Chop a data stream into fixed size buffer chunks.
Written in ES2015.

## install
```
$ npm install chop-stream
```

## example
```javascript
const ChopStream = require('chop-stream')

const chop = new ChopStream({ size: 8, padding: true })

chop.on('data', (chunk) => console.log(chunk))

process.stdin.pipe(chop)
```

### output

```
<Buffer 61 62 63 64 65 66 67 68>
<Buffer 69 6a 6b 6c 6d 6e 6f 70>
<Buffer 71 72 73 74 75 76 77 78>
<Buffer 79 7a 0a 00 00 00 00 00>
```

See the [examples](examples) folder for more details on how to customize the animation.

## usage
ChopStream is a node [Transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform).

### `chop = new ChopStream(size, options = { padding: false, size: 1024 })`

`size`: size of output chunks. Can be omitted and set in options instead.

`padding`: pad the end of a stream with zeroes to align the last chunk.
