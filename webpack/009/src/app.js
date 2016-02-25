import marked from "marked";
import {md__area} from "./style.css";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-output");

input.classList.add(md__area);
output.classList.add(md__area);

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);
