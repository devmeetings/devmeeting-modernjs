//3/ Importujemy zależności
import {Component} from "./component.interface";
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";

export class PartyForm implements Component {
  render(): string {
    return `
      <form id="PartyForm">
        Name: <input name="name" required><br>
        Lng: <input name="lng" required><br>
        Lat: <input name="lat" required><br>
        Date: <input name="date" type="date" required><br>
        <input type="submit">
      </form>
    `;
  }
}