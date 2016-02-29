//3/ Importuj zależności
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";
import {PartyForm} from "./party-form.class";

const partyList = new PartyList();
partyList.add(new Party("Awesome party", new Date(), "52", "18"));
partyList.add(new Party("Poor party", new Date(), "53", "21"));

/// Utwórz instancje PartyForm
const partyForm = new PartyForm();

const app = document.getElementById("app");
/// Renderuj PartyForm i PartyList
app.innerHTML = partyForm.render() + partyList.render();
