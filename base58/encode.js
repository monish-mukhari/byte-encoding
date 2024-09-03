const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.default.encode(uint8Array);
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String);
