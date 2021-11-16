// write function that takes two values, and returns true or false when calling through node
module.exports = {
  // export function
  bool: function (foo, bar) {
    if (foo && bar) {
      return true;
    } else {
      return false;
    }
  },
};
