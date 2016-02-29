//3/ Importujemy zależności
import {Component} from "./component.interface";
import {Party} from "./party.class";
import {PartyList} from "./party-list.class";

export class PartyForm implements Component {
  //4/ Możemy też ustawić parametry konstruktora jako właściwości prywatne
  constructor(
    private list: PartyList
  ) {}

  handleSubmit(event) {
    /// Inne submity niż tego formularza nas nie interesują
    if (event.target.id !== "PartyForm") return;
    /// Zapobiegaj wysłaniu formularza
    event.preventDefault();
    //6/ Pobierz dane z formularza
    const data = Array.prototype.slice.call(event.target.elements)
      .filter(element => element.value)
      .reduce((akk, element) => {
        akk[element.name] = element.value;
        return akk;
      }, {});

    /// Dodaj imprezę
    this.list.add(new Party(data.name, new Date(data.date), data.lat, data.lng));
    /// Daj znać "Reactowi", że właśnie nadszedł czas na rerender
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