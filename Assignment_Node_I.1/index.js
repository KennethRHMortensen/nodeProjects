/*  Now write a JavaScript/node program requesting the user to enter a userid on the console.
    Then ask her to enter an email address on the console. When both have been accomplished,
    write the two pieces of information into a text file on your computer.
    You might consider using the module from the previous assignment to check for values in the user entered data.
    Think about the format for storing the information in the file. Make a comment in the program that reflects
    your choice and why.
*/

// import readline-sync modules
const readline = require("readline-sync"); // import readline-sync module
const lib = require("./lib"); // import bool module
let fs = require("fs");
let readMe = fs.readFileSync("userdata.txt", "utf-8");

// ask for inputs
let name = readline.question("Enter first name: "); // ask for name
console.log(`Hi ${name}`); // log name
let email = readline.question("Enter email adress: "); // ask for email
console.log(`Thank you ${name} for putting in your email: ${email}`); // log name and email

const validate = lib.validateInputs(`${name}`, `${email}`);
console.log(validate);
content = "name: " + name + "\n" + "email adress: " + email;

fs.writeFile("userdata.txt", content, (err) => {
  if (err) {
    throw err;
  }
  console.log(readMe);
});

// The right format for storing the information would be to make it as a new object,
// that gathers its keys from a class in the lib.js file, stored in a class named User.
// This would allow us to access and manipulate with the data, as well as store new users with their data as well.

// New object User
/*
const userData = lib.User(new User(`${name}, ${email}`));
console.log(userData.name + " " + userData.email);
*/
