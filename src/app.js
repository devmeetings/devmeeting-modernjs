import marked from "marked";

const input  = document.querySelector("#md-input");
const output = document.querySelector("#md-output");

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);
