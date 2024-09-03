const bs58 = require('bs58');

function base58ToUint8Array(base58String) {
  return bs58.default.decode(base58String);
}


const base58 = "9Ajdvzr";
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58); 