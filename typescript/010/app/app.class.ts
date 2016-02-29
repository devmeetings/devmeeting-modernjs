import {Component} from "./component.interface";
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";
import {PartyForm} from "./party-form.class";

export class App implements Component {
  partyList: PartyList;
  partyForm: PartyForm;

  //4/ Tworzymy elementy aplikacji
  constructor() {
    this.partyList = new PartyList();
    this.partyList.add(new Party("Awesome party", new Date(), "52", "18"));
    this.partyList.add(new Party("Poor party", new Date(), "53", "21"));

    this.partyForm = new PartyForm();
  }
  
  //8/ Renderujemy oba komponenty
  render() {
    return `
      <div>
        ${this.partyForm.render()}
        ${this.partyList.render()}
      </div>
    `
  }
}
