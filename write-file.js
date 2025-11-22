const { error } = require("console");
const fs = require("fs");

const content1 = "This is a content \n node js is awesome";

try {
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("file written sync");
} catch (error) {
    console.log(error.message);
}

const content2 = "This is a content too \n async!!";

fs.writeFile("./output/test-async.txt", content2, (error) => {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("file written async");
    }

});