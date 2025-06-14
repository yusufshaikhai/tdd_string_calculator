const add = require(".");

test('value should be zero for empty string', () => { 
  expect(add("")).toBe(0);  
})

test('value should be 1 for string "1"', () => { 
  expect(add("1")).toBe(1);  
})

test('value should be 2 for string "2"', () => { 
  expect(add("2")).toBe(2);  
})

test('value should be 5 for string "2,3"', () => { 
  expect(add("2,3")).toBe(5);  
})

test('value should be sum of all number for given string', () => { 
  expect(add("3,2,5,6,7,1,10,34,24,35")).toBe(3+2+5+6+7+1+10+34+24+35);  
})

test('value should be sum of all number for given string with new lines', () => { 
  expect(add("1\n2,3")).toBe(6);
})

test('pass delimiter start of the string with new line & sum of all numbers', () => { 
  expect(add("//;\n1;2")).toBe(3);
})

test('negative numbers not allowed', () => { 
  expect(() => add("2,-3,1"))
      .toThrow('negative numbers not allowed -3');
})

test('negative numbers not allowed', () => { 
  expect(() => add("-2,-3,1"))
      .toThrow('negative numbers not allowed -2,-3');
})

// '12,213,asb,232,asd,as,23'
test('test the number & alphabets', () => {
  expect(() => add("12,213,asb,232,asd,as")).toThrow('invalid input asb,asd,as')
})

test('test the number & alphabets', () => {
  expect(() => add("12,213,asb,232,asd,as,-23")).toThrow('invalid input asb,asd,as')
})

// 1, 1001, 2 , 1003
test('number greater than 1000 should be ignored', () => {
  expect(add("1,1001,2,1003")).toBe(3);
})