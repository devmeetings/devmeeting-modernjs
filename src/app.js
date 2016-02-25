/// Importujemy bibliotekę do zmany markdown na HTML
import marked from "marked";

//2/ Input i output naszego edytora
const input  = document.querySelector("#md-input");
const output = document.querySelector("#md-output");

/// Na każdą zamianę inputu
input.addEventListener("input", (event) => {
  /// generuj i ustaw nowy output
  output.innerHTML = marked(event.target.value);
}, false);
