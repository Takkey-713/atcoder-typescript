import * as fs from "fs";

const inputs = fs.readFileSync(0, "utf8");


const inputArray = inputs.split(/\s/);

console.log(inputArray)