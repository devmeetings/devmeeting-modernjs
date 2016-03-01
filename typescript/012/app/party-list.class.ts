import {Component} from "./component.interface";
import {Party} from "./party.class";

export class PartyList implements Component {
  parties: Party[] = [];

  add(party: Party) {
    this.parties = [...this.parties, party];
  }

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
