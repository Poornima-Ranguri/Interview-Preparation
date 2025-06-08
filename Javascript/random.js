function upadateName() {
    const name = prompt("Enter your name")
    buttonEl.textContent = `Name : ${name}`
}

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", upadateName)

const paraDemo = document.getElementById("demo");
paraDemo.innerHTML = "<h2>Poori</h2>"
paraDemo.innerText = "AmmaNanna"


const buttonAlert = document.querySelector(".alertWorks");
// console.log(buttonAlert)
// buttonAlert.addEventListener("click", alert("Welcome to JS"))

/*Multiline comments*/


let person = "poori", age = "22", price = 20;
// console.log(typeof (undefined))

// Ternary Operator

console.log(age > 20 ? "Job" : "poori")

for (let i = 0; i < 4; i++) {
    console.log(i)
}

let i = 10;
while (i > 4) {
    console.log(i);
    i--
}

const obj = { a: 1, b: 2 };

for (let key in obj) {
    console.log(key, obj[key])
}

const arr = [10, 20, 30];
for (let val of arr) {
    console.log(val)
}