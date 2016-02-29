import {Component} from "./component.interface";
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";
import {PartyForm} from "./party-form.class";

export class App implements Component {
  partyList: PartyList;
  partyForm: PartyForm;

  constructor() {
    this.partyList = new PartyList();
    this.partyList.add(new Party("Awesome party", new Date(), "52", "18"));
    this.partyList.add(new Party("Poor party", new Date(), "53", "21"));
    
    /// Przekazujemy instancję PartyList do konstruktora
    this.partyForm = new PartyForm(this.partyList);
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
