const readline = require("readline-sync"); // import readline-sync module

// function that validates if all inputs are filled
function validateInputs(foo, bar) {
  if (foo && bar) {
    return true;
  } else if (!foo) {
    return "You forgot to type your name!";
  } else if (!bar) {
    return "You forgot to type your email!";
  }
}

//
class User {
  constructor(firstName, email) {
    this.name = firstName;
    this.email = email;
  }
  printContent = function () {
    return this.name + "/n" + this.email;
  };
}

function askForInputs(name, email) {
  let name = readline.question("Enter first name: "); // ask for name
  console.log(`Hi ${name}`); // log name
  let email = readline.question("Enter email adress: "); // ask for email
  console.log(`Thank you ${name} for putting in your email: ${email}`); // log name and email
}

module.exports = {
  askForInputs,
  validateInputs,
  User,
};
