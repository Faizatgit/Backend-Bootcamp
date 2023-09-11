const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Data', 'file1.txt');

const data = `We are writing this data using fs module`;

const data1 = "This is some new data\n";

console.log('START');

fs.appendFileSync(filePath,data,{ encoding: 'utf-8', flag: 'a' });

console.log('Data appended successfully');
console.log('END');

