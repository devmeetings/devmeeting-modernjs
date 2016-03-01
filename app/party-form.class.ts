import {Component} from "./component.interface";
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";

export class PartyForm implements Component {
  constructor(
    private list: PartyList
  ) {}

  handleSubmit(event) {
    if (event.target.id !== "PartyForm") return;
    event.preventDefault();
    const data = Array.prototype.slice.call(event.target.elements)
      .filter(element => element.value)
      .reduce((akk, element) => {
        akk[element.name] = element.value;
        return akk;
      }, {});

    this.list.add(new Party(data.name, new Date(data.date), data.lat, data.lng));
    return Promise.resolve();
  }

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
