const container = document.querySelector(".poori")
const template = document.querySelector("#product")
const clone = template.content.cloneNode(true);
let para = clone.querySelector("p")
para.innerHtml = "AmmaNannaNANNAAMMA"
container.appendChild(para)
console.log(para)