// Create a simple String calculator with a method signature like this:

// int add(string numbers)
// Input: a string of comma-separated numbers
// Output: an integer, sum of the numbers
// Examples:

// Input: “”, Output: 0
// Input: “1”, Output: 1
// Input: “1,5”, Output: 6
// Allow the add method to handle any amount of numbers.

// Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)

// Support different delimiters:

// To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
// Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".

// If there are multiple negative numbers, show all of them in the exception message, separated by commas.

function add(string_numbers) {
  let delimiter = ",";
  const m = string_numbers.match(/^\/\/(.+)\n/);
  if(m){
    delimiter = m[1];
    string_numbers = string_numbers.slice(m[0].length);
  }
  const regex = new RegExp(`[\n|${delimiter}]+`);
  const strNumbers = string_numbers.split(regex);
  const notNumber = strNumbers.filter(num => isNaN(num));
  if(notNumber.length){
    throw new Error(`invalid input ${notNumber.join(",")}`);
  }
  const negative_numbers = strNumbers.filter(n => Number(n) < 0);
  if(negative_numbers.length){
    throw new Error(`negative numbers not allowed ${negative_numbers.join(",")}`);
  }
  return strNumbers.reduce((total, value) => total + Number(value), 0);
}

module.exports = add;