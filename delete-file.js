const fs = require("fs");

fs.writeFileSync("./output/temporary.txt", "this is a temp file");
console.log("temp created");

if (fs.existsSync("./output/temporary.txt")) {
    console.log("file exist");
    fs.unlinkSync("./output/temporary.txt");
    console.log("file deleted");
}

try {
    fs.unlinkSync("./output/temporary.txt")
} catch (error) {
    console.log(error.message, "Error");
}

fs.writeFile("./output/temp2.txt", "another temp file", (err) => {
    if (err) return console.error(err.message);

    console.log("another temp file created");

    fs.unlink("./output/temp2.txt", (err) => {
        if (err) {
            console.error("Error:", err.message);
        } else {
            console.log("temp2 deleted")
        }
    })
})