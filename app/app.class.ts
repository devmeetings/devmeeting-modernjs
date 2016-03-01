import {EventHandlingComponent} from "./event-handling.component";
import {Component} from "./component.interface";
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";
import {PartyForm} from "./party-form.class";

/// Jedna klasa może implementować wiele interfejsów
export class App implements Component,EventHandlingComponent {
  partyList: PartyList;
  partyForm: PartyForm;

  constructor() {
    this.partyList = new PartyList();
    this.partyList.add(new Party("Awesome party", new Date(), "52", "18"));
    this.partyList.add(new Party("Poor party", new Date(), "53", "21"));

    this.partyForm = new PartyForm(this.partyList);
  }
  
  //8/ Nasz eventListener zawsze musi zwracać Promise
  eventListener(event: Event): Promise<any> {
    if (event.type === "submit" && (<HTMLFormElement>event.target).id == "PartyForm") {
      /// Wyrenderuj aplikację po zmianie jej stanu.
      return this.partyForm.handleSubmit(event);
    }

    /// Nie renderuj aplikacji gdy żaden z listenerów nie może zmienić stanu.
    return new Promise((resolve, reject) => reject());
  }

  render() {
    return `
      <div>
        ${this.partyForm.render()}
        ${this.partyList.render()}
      </div>
    `
  }
}
