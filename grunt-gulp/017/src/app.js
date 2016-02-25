import marked from "marked";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-soutput");

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);
