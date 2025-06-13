function add(a, b) { //ACcessing by using paramenters a, b
    return a + b
}

console.log(add(1, 3)) // Passing Arguments
console.log(add(2, 6))

//function expression

let greet = function () {
    return "Hi"
}

console.log(greet())

function Friend(name = "Vinod") {
    return `Thank you for being my friend ${name}`
}

console.log(Friend())
console.log(Friend("Mudavath"))

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.name);
};

const john = new Person('John', 30);
john.greet(); // 'Hello John'

const fruits = ["Banana", "Orange", "Apple"];
console.log(typeof (fruits))
console.log(Array.isArray(fruits))
console.log(fruits instanceof Array)

//Hacker Rank 

// Factorial
class Solution {
    factorial(n) {
        let product = 1;
        for (let i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
}


// Prime Factorization  - Prime factorization means breaking down a number into its prime factors (prime numbers that multiply together to give the original number).

class SolutionR {
    primeFactors(n) {
        let result = [];

        // Handle 2 separately to allow incrementing by 2 later
        while (n % 2 === 0) {
            result.push(2);
            n = n / 2;
        }

        // Check for odd numbers from 3 to sqrt(n)
        for (let i = 3; i * i <= n; i += 2) {
            while (n % i === 0) {
                result.push(i);
                n = n / i;
            }
        }

        // If n becomes a prime > 2
        if (n > 2) {
            result.push(n);
        }

        console.log(result.join(" "));
    }
}


//Anagaram

class Solution2 {
    areAnagrams(s1, s2) {
        if (s1.length !== s2.length) {
            return false
        }

        let sortedS1 = s1.split('').sort().join('')
        let sortedS2 = s2.split('').sort().join('')
        return sortedS1 === sortedS2

    }
}

/*Given two strings s1 and s2 which are of lengths n and n+1. The second string contains all the character of the first string, but there is one extra character. Your task to find the extra character in the second string and return it. 

Examples:

Input: s1 = abcd, s2 = badce
Output: e */

class Solution3 {
    extraChar(s1, s2) {
        let sum1 = 0, sum2 = 0;
        for (let char of s1) {
            sum1 += char.charCodeAt(0)
        }

        for (let char of s2) {
            sum2 += char.charCodeAt(0)
        }

        return String.fromCharCode(sum2 - sum1)
    }
}

// reduce

array = [1, 2, 3, 4, 5, 6];
const helperSum = (acc, curr) => acc + curr
sum = array.reduce(helperSum, 0);

console.log(array)
console.log(sum);


// Set Interval

let intervalId = setInterval(() => {
    console.log("Poori R")
}, 1000)

setTimeout(() => {
    clearInterval(intervalId)
}, 3000)

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

