/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) { // Completed
  // if input is negative
  if (n < 0) {
    // return null
    return null;
  } else if (n === 0) { // otherwise if input is 0
    // return 1
    return 1;
  }
  // declare factor variable set to n
  var factor = n;

  // BASE CASE ---
  // if n equals 1
  if (n === 1) {
    // multiply factor by n = 1
    factor *= n;
  } else { // otherwise if n is not 1
    // RECURSIVE CASE ---
    // multiply factor by factorial n minus 1
    factor *= factorial(n - 1); //
  }
  // return factor;
  return factor;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) { // Completed
  // declare add equal to 0
  var add = 0;

  // BASE CASE ---
  // if array variable is not an array
  if (!Array.isArray(array)) { // [1,2,3,4,5,6], 1,2,3,4,5,6
    // add the value to add variable
    return add += array; // add += 1,2,3,4,5,6
  }

  // RECURSIVE CASE ---
  // iterate through array
  array.forEach(function(currentValue) {
    // add the value of sum(currentValue) to add variable
    add += sum(currentValue); // add += 1,2,3,4,5,6
  });

  // return add variable
  return add;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) { // Completed
  // declare add equal to 0
  var add = 0;

  // BASE CASE ---
  // if array variable is not an array
  if (!Array.isArray(array)) {
    // add the value to add variable
    return add += array;
  }

  // RECURSIVE CASE ---
  // iterate through array
  array.forEach(function(currentValue) {
    // add the value of sum(currentValue) to add variable
    add += arraySum(currentValue);
  });

  // return add variable
  return add;
};

// 4. Check if a number is even.
var isEven = function(n) { // Completed
  // make n input an absolute value
  n = Math.abs(n);

  // BASE CASE ---
  // if num is 0
  if (n === 0) {
    // return true
    return true
  } else if (n === 1) { // otherwise if n equals 1
    // return false
    return false;
  }
  // RECURSIVE CASE ---
  n = isEven(n - 2);

  // return n variable
  return n;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) { // Completed
  // if n equals n is positive
  if (n > 0) {
    // assign n to n - 1 (one value less than original)
    n = n - 1;
  } else if (n < 0) { // else if n is a negative number
    // assign n to n + 1
    n = n + 1;
  }
  // declare sum equal to n value
  var sum = n;

  // BASE CASE ---
  // if n equals 0
  if (n === 0) {
    // return sum plus n value
    return sum += n;
  }
  // RECURSIVE CASE ---
  sum += sumBelow(n);

  // return sum variable;
  return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) { // Completed
  // if x equals y OR x is greater than y
  if (x + 1 === y || x === y) {
    // return empty array
    return [];
  }
  // if y is greater than x
  if (y > x) {
    // increment x by 1
    x++;
  } else { // otherwise
    // x minus 1
    x--;
  }

  // declare nums as empty array
  var nums = [];

  // BASE CASE ---
  // if x equals y - 1 OR x equals y + 1
  if (x === y - 1 || x === y + 1) {
    // return x
    return x;
  }
  // RECURSIVE CASE ---
  nums = [x].concat(range(x, y));

  // return nums
  return nums;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) { // Completed
  // if exponent is 0
  if (exp === 0) {
    // return 1
    return 1;
  } else if (exp === 1) { // otherwise if exponent is 1
    // return base
    return base;
  }
  // if exp is greater than 0
  if (exp > 0) {
    // declare count equal to base and subtract 1 from exp
    var count = base;
    exp--;
  } else { // otherwise
    // declare count equal to 1 over base and increment 1 on exp
    var count = 1/base;
    exp++;
  }

  // BASE CASE ---
  // if exp equals 1
  if (exp === 1) {
    // return count times base
    return count *= base;
  } else if (exp === -1) { // otherwise if exp equals -1 (negative exp)
    // return count times 1 over base
    return count *= 1/base;
  } else { // otherwise
    // RECURSIVE CASE ---
    // count multiplied by the exponent function
    count *= exponent(base, exp);
  }
  // return count
  return Number(count.toFixed(5));
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) { // Completed
  // if n equals 0
  if (n === 0) {
    // return false
    return false;
  }
  // BASE CASE ---
  // if n equals 1
  if (n === 1) {
    // return true
    return true;
  } else if (n % 2 !== 0) { // n is not an even number
    // return false
    return false;
  }
  // assign n to n divided by 2
  n = n / 2;

  // RECURSIVE CASE ---
  // return the function itself
  return powerOfTwo(n);
}

// 9. Write a function that reverses a string.
var reverse = function(string) { // Completed
  // if string is empty
  if (string === "") {
    // return empty string
    return "";
  } else { // otherwise
    // return the function itself with a slice string as input and added by the first letter in string
    return reverse(string.slice(1)) + string[0];
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) { // Completed
  // convert string into lower caps
  string = string.toLowerCase();

  // if string length is less than or equal to 1
  if (string.length <= 1) {
    // return true
    return true;
  } else if (string[0] !== string[string.length - 1]) {
  // otherwise if first letter in string doesn't match the last letter in string
    // return false
    return false;
  }
  // return the function itself with string sliced from the second letter of the string to the second to last letter as input
  // ex. 'racecar', 'aceca', 'cec', 'e' - Everything matched so true
  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// Completed
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    return -modulo(-x,  y);
  }

  if (y < 0) {
    return  modulo( x, -y);
  }

  if (x < y) {
    return  x;
  }

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// PESEUDOCODE -----
// if y equals 0
  // return 0

// if equals 1
  // return x
// else if x is less than 0
  // return the recursive function negative with x negative
// else if y is less than 0
  // return the recursive function negative with y negative
// else
  // add the recursive function with y minus 1 to x

// return x
// Completed ---
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }

  if (y === 1) {
    return x;
  } else if (x < 0) {
    return -multiply(-x, y);
  } else if (y < 0) {
    return -multiply(x, -y);
  } else {
    x += multiply(x, y - 1);
  }
  return x;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// Completed
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  var count = 0;
  count++;

  if (x < 0) {
    return -divide(-x, y);
  } else if (y < 0) {
    return -divide(x, -y);
  } else if (x < y) {
    return 0;
  } else {
    count += divide(x - y, y);
  }
  return count;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) { // Completed
  // if x or y are negative
  if (x < 0 || y < 0) {
    // return null
    return null;
  }
  // BASE CASE ---
  // if x is greater than or equal to y
  if (!y) { // else if x and y is modulo 0
    // return x
    return x;
  } else { // else
    // RECURSIVE CASE ---
    // assign x to recursion with x + 1 as input
    // console.log("---")
    x = gcd(y, x % y);
  }

  // return x
  return x;
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) { // Completed
  // declare index set to 0
  var index = 0;

  // BASE CASE ---
  // if a character does not match from the string
  if (str1[index] !== str2[index]) {
    // return false
    return false;
  } else if (str1[index] === undefined && str2[index] === undefined) {
  // else if both strings are undefined
    // return true
    return true;
  } else { // otherwise
  // RECURSIVE CASE ---
    // return recursion with input of both strings being sliced each time
    // starting from index 1
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) { // Completed
  // declare empty array and variable set to 0
  var result = [];
  var index = 0;

  // BASE CASE ---
  // if str index is undefined
  if (str[index] === undefined) {
    // return result array
    return result;
  } else { // otherwise
    // RECURSIVE CASE ---
    // push value into array
    result.push(str[index]);
    // recursive function with sliced string input from index 1
    result = result.concat(createArray(str.slice(1)));
  }
  // return array
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) { // Completed
  // declare empty array and index set to last value in array
  var result = [];
  var index = array.length - 1;

  // BASE CASE ---
  // if array is empty
  if (array.length === 0) {
    // return empty array
    return result;
  } else { // otherwise
    // RECURSIVE CASE ---
    // push value into empty array
    result.push(array[index]);
    // pop off value in array
    array.pop();
    // use recursion
    result = result.concat(reverseArr(array));
  }
  // return result array
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) { // Completed
  // declare result array
  var result = [];

  // BASE CASE ---
  // if length equals 0
  if (length === 0) {
    // return result array
    return result;
  } else { // otherwise
    // RECURSIVE CASE ---
    // push value into result
    result.push(value);
    // concat recursion function with input length minus 1 in result array
    result = result.concat(buildList(value, length - 1));
  }
  // return result
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) { // Completed
  // declare result array empty
  var result = [];

  // BASE CASE ---
  // if n equals 0
  if (n === 0) {
    // return result
    return result;
  } else if (n % 3 === 0 && n % 5 === 0) { // otherwise if n is modulo of 3 AND of 5
    // push 'FizzBuzz' into result
    result.push('FizzBuzz');
  } else if (n % 3 === 0) { // otherwise if n is modulo to 3 only
    // push 'Fizz' into result
    result.push('Fizz');
  } else if (n % 5 === 0) { // otherwise if n is modulo to 5 only
    // push 'Buzz' into result
    result.push('Buzz');
  } else { // otherwise
    // push n into result array
    result.push('' + n + '');
  }

  // RECURSIVE CASE ---
  // result equals result concat with recursive function
  // n - 1 as input and in reverse
  result = result.concat(fizzBuzz(n - 1).reverse());

  // return result array in reverse
  return result.reverse();
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) { // Completed
  // declare result variable set to 0
  var result = 0;

  // BASE CASE ---
  // if array at index 0 is undefined
  if (array.length === 0) {
    // return result
    return result;
  } else if (array[0] === value) { // else if array at index 0 is value
    // increment result
    result++;
  }
  // RECURSIVE CASE ---
  // shift array (removes first value of array)
  array.shift();
  // result equals plus the recursive function
  result += countOccurrence(array, value);
  // return result
  return result;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) { // Completed
  // delcare result array empty
  var result = [];

  // BASE CASE ---
  // if the type of array is a number
  if (typeof (array) === 'number') {
    // push the value into result with the callback function
    result.push(callback(array));
    // return result array
    return result;
  }

  // RECURSIVE CASE ---
  // iterate through array using forEach
  array.forEach(function(currentValue) {
    // result equals result concat with recursive function
    result = result.concat(rMap(currentValue, callback));
  })
  // return result array
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) { // Completed
  // declare result variable set to 0
  var result = 0;

  // iterate through object
  for (var keyObj in obj) {
    // BASE CASE ---
    // if key equals key
    if (keyObj === key) {
      // increment result
      result++;
    } else if (typeof(obj[keyObj]) === 'object') { // else if value is an object
    // RECURSIVE CASE ---
      // result plus recursive function with value as obj input
      result += countKeysInObj(obj[keyObj], key);
    }
  }
  // return result variable
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
/*
var obj = {
  'e':{'x':'y'},
  't':{'r':{'e':'r'},'p':{'y':'r'}},
  'y':'e'
};
*/
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) { // Completed
  // declare result set to 0
  var result = 0;

  // iterate through object
  for (let key in obj) {
    // BASE CASE ---
    // if object value is not an object AND if object value equals the input value
    if (typeof(obj[key]) !== 'object' && obj[key] === value) {
      // return 1
      return 1;
    } else if (typeof(obj[key]) === 'object') { // otherwise
      // RECURSIVE CASE ---
      // add the returned value of countValuesInObj to result variable
      result += countValuesInObj(obj[key], value);
    }
  }
  // return the result variable
  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) { // Completed
  // iterate through object
  for (var key in obj) {
    // BASE CASE ---
    // if key equals oldKey
    if (key === oldKey) {
      // add newKey to object with the value of the previous key
      obj[newKey] = obj[key];
      // delete old key propery
      delete obj[oldKey];
    } else if (typeof obj[key] === 'object') { // otherwise if a key value is an object
      // RECURSIVE CASE ---
      // the obj key equals to the function itself with input of the key value
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  // return the object
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
