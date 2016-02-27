import marked from "marked";
import logoSrc from "./md-logo.png";

const input  = document.getElementById("md-input");
const output = document.getElementById("md-output");

input.addEventListener("input", (event) => {
  output.innerHTML = marked(event.target.value);
}, false);

/// Znajdujemy element edytora
const md   = document.querySelector(".md");
/// Tworzymy element na nasze logo
const logo = document.createElement("img");
/// Ustawiamy src
logo.src   = logoSrc;
/// Dodajemy logo do edytora
md.insertBefore(logo, md.firstChild);
