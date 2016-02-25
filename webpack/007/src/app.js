import marked from "marked";
/// Import styli w JS
import "./style.css";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-output");

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);
