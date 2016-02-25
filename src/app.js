import marked from "marked";
import logoSrc from "./md-logo.png";
/// Import styli w JS
import "./style.css";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-output");

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);

const md   = document.querySelector(".md");
const logo = document.createElement("img");
logo.src   = logoSrc;
md.insertBefore(logo, md.firstChild);
