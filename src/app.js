import marked from "marked";
import logoSrc from "./md-logo.png";
/// Import styli w JS
import "./style.css";
/// Import klasy dla modułu CSS
import {md__area} from "./style.css";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-output");

input.classList.add(md__area);
output.classList.add(md__area);

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);

const md   = document.querySelector(".md");
const logo = document.createElement("img");
logo.src   = logoSrc;
md.insertBefore(logo, md.firstChild);
