import {Coordinates} from "./coordinates.interface";

//25/ Definicja klasy
export class Party {
  /// Deklaracje domyślnie publicznej właściwości obiektu o typie Coordinates
  place: Coordinates;

  constructor(
    public name,
    public date: Date,
    lat: string,
    lng: string
  ) {
    this.place = <Coordinates>{ lat, lng };
  }

  getMapURL() {
    return `http://maps.google.com/maps?z=15&q=${this.place.lng},${this.place.lat}`;
  }

  getNiceDate() {
    return this.date.toJSON().match(/(\d{4}(-\d{2}){2})/)[1];
  }
}