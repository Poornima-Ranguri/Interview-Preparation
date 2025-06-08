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