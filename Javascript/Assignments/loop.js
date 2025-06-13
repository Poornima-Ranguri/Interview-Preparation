function generateTable() {
    const num = parseInt(document.getElementById("tableNum").value);
    let result = ""
    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}` + "\n"
    }
    document.getElementById("tableOutput").innerHTML = result
}



//Sum of Numbers

function sumNumbers() {
    const num = parseInt(document.getElementById("sumNum").value);
    let result = 0;
    let i = 1;
    while (i <= num) {
        result += i
        i++;
    }
    document.getElementById("sumOutput").textContent = result;
}

//Factorial
function calculateFactorial() {
    let num = parseInt(document.getElementById("factNum").value);
    let result = 1;
    let steps = "";
    let i = 1;
    do {
        result *= i;
        steps += i + (i < num ? " x " : "");
        i++;
    } while (i <= num)
    steps += ` = ${result}`;
    document.getElementById("factOutput").textContent = steps;
}


//Array sum and Average

function arrayStats() {
    const inputArrray = document.getElementById("arrayInput").value;
    const numbers = inputArrray.split(",").map(n => parseFloat(n.trim()));
    let sum = 0
    for (let num of numbers) {
        sum += num;
    }

    const avg = (sum / numbers.length)
    document.getElementById("arrayOutput").textContent = `Sum: ${sum}, Average: ${parseInt(avg)}`


}


//Char Frequency
function charFrequency() {
    const str = document.getElementById("charInput").value;
    const freq = {};
    for (let index in str) {
        let char = str[index]
        freq[char] = (freq[char] || 0) + 1
    }

    let output = "";
    for (let char in freq) {
        output += `${char} : ${freq[char]}\n `
    }
    document.getElementById("charOutput").textContent = output;

}

//Primes

function findPrimes() {
    const start = parseInt(document.getElementById("primeStart").value);
    const end = parseInt(document.getElementById("primeEnd").value);
    let primes = "";
    for (let num = start; num <= end; num++) {
        if (num < 2) continue;
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) primes += num + " ";
    }

    document.getElementById("PrimeOutput").textContent = primes;
}

//Pyramid Pattern


