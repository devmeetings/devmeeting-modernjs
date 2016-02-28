//2/ Importuj zależności
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";

//3/ Stwórz i dodaj elementy do listy
const partyList = new PartyList();
partyList.add(new Party("Awesome party", new Date(), "52", "18"));
partyList.add(new Party("Poor party", new Date(), "53", "21"));

/// Renderuj lise
document.getElementById("app").innerHTML = partyList.render();
