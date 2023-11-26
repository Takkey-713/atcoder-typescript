import * as fs from "fs";

const fileName = process.argv[2];
// 以下のコードから着手
const inputs = fs.readFileSync(fileName, "utf8");
const inputArray = inputs.split(/\s/);

console.log(inputArray)