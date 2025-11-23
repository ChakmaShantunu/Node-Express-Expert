const path = require("path");

console.log("Current files Info: \n");
console.log("filename: ", __filename);
console.log("Directory Name: ", __dirname);

console.log("\n"+"-".repeat(50) + "\n");

const filePath = "/shantunu/documents/nextLevel.pdf";

console.log("analyzing Path :", filePath, "\n");

console.log("Directory Name: ", path.dirname(filePath));
console.log("Base Name: ", path.basename(filePath));
console.log("File Extention: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("analyzing Path :", filePath, "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("formatted path: ", path.format(parsed));