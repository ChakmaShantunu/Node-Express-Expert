const fs = require("fs");

fs.writeFileSync("./output/temporary.txt", "this is a temp file");
console.log("temp created");

if(fs.existsSync("./output/temporary.txt")) {
    console.log("file exist");
    fs.unlinkSync("./output/temporary.txt");
    console.log("file deleted");
}
