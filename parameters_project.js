/* Part 1 - Even Or Odd */
function evenOrOdd(num) {
  console.log('Your number is', num);
  if (num % 2 == 0) {
    console.log(num, 'is even');
  } else {
    console.log(num, 'is odd');
  }
  console.log('');
}

evenOrOdd(7);
evenOrOdd(6872);
evenOrOdd(-5);
evenOrOdd(0);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - Divisible Or Not? */
function divisor(num1, num2) {
  if (num1 % num2 == 0) {
    console.log(num1, 'is divisible by', num2);
  } else {
    console.log(num1, 'is NOT divisible by', num2);
  }
}

divisor(9, 3);
divisor(27, 5);
divisor(10001, 10);
divisor(598, 13);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3 - The Distance Calculator */
function distanceCalculator(name1, x1, y1, name2, x2, y2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  console.log(name1, 'and', name2, 'are', distance, 'meter(s) apart');
}

distanceCalculator('Michael', 3.28, 2.26, 'Anthony', 3.92, 3);
distanceCalculator('you', 0, 0, 'I', 0, 0);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 4 - Array and Data Types */

function arrayHandler(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
      console.log(array[i]);
    }
  }
}

arrayHandler([1, 'a', 2, 'b', 3, 'c']);
console.log('');
arrayHandler(['H', 'E', 'L', false, true, 1, 2, 55, 'L', 'O']);
console.log('');
arrayHandler(['string numbers', '1', '2', '3']);
console.log('');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Prime Numbers */
// There are different ways to make this, this is one of them
function primeOrNot(num) {
  let isPrime;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = true;
      console.log(num, 'is divisible by', i);
      break;
    }
    console.log(num, 'is NOT divisible by', i);
  }
  if (isPrime) {
    console.log(num, 'is NOT a PRIME NUMBER');
  } else {
    console.log(num, 'is a PRIME NUMBER');
  }
}

primeOrNot(7);
console.log('');
primeOrNot(9);
console.log('');
primeOrNot(13);
