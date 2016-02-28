import {Component} from "./component.interface";
import {Party} from "./party.class";

/// Klasa implementująca interface
export class PartyList implements Component {
  parties: Party[] = [];

  add(party: Party) {
    this.parties = [...this.parties, party];
  }

  //7/ Metoda wymagana przez interface
  render(): string {
    return `
      <ul>
        ${this.parties.map(party => `
          <li>
            ${party.name}
            (${party.getNiceDate()})
            <a href=${party.getMapURL()}>Mapa</a>
          </li>`)
        .join("")}
      </ul>
    `;
  }
}
