/// Importuj zależności
import {App} from "./app.class";

const app = document.getElementById("app");
/// Renderuj aplikację
app.innerHTML = new App().render();
