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
console.log(buttonAlert)
// buttonAlert.addEventListener("click", alert("Welcome to JS"))

/*Multiline comments*/


let person = "poori", age = "22", price = 20;
console.log(typeof (undefined))

// Ternary Operator

console.log(age > 20 ? "Job" : "poori")