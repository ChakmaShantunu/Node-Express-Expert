
const crypto = require("crypto");

const sha256Hash = crypto.createHash("sha256").update("password123").digest("hex");
console.log("input: password123");
console.log("sha256 password: ", sha256Hash);