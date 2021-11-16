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

module.exports = {
  validateInputs,
  User,
};
