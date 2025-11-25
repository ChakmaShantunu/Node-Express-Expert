
const crypto = require("crypto");

const sha256Hash = crypto.createHash("sha256").update("password123").digest("hex");
console.log("input: password123");
console.log("sha256 password: ", sha256Hash);

const sha512Hash = crypto.createHash("sha512").update("password123").digest("hex");
console.log("input: password123");
console.log("sha512 password: ", sha512Hash);

console.log((2 ** 32 / 10 ** 9));