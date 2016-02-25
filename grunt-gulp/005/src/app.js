import marked from "marked";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-output");

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);
