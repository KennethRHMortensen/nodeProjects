
// sync == any time a function ends with a 'sync', it works as a blocking feature
// meaning it will need to finnish all of its work before any other code can be run

const { readFile, readFileSync } = require('fs'); // 

// read a text file in node, by assigning its path and specifying its encoding
// it might take a while to load if it's a large file
const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt);

// Here we make a code thats non-blocking, by refacturing it to a callback
// in readFile we set the same first two arguments as readFileSync, but we also add a callback function as the third argument
// inside this function we add an error object if the call fails, or when succesfull the actual text from the file
readFile('./hello.txt', 'utf-8', (err, txt) => { // node registers this callback, executes the rest of the script, and then finally runs this callback when the file has been read
    console.log(txt);
})

console.log('If this is above txt, it was loaded async');
