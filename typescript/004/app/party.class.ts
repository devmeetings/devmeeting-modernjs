import {Coordinates} from "./coordinates.interface";

//25/ Definicja klasy
export class Party {
  /// Deklaracje domyślnie publicznej właściwości obiektu o typie Coordinates
  place: Coordinates;

  //6/ Możemy iść na skróty i ustawić metodę jako publiczną już w definicji argumentów konstruktora
  constructor(
    public name,
    public date: Date,
    lat: string,
    lng: string
  ) {
    /// Jawna konwersja typów
    this.place = <Coordinates>{ lat, lng };
  }

  //3/ Zbuduj link do podglądu na Google Maps
  getMapURL() {
    return `http://maps.google.com/maps?z=15&q=${this.place.lng},${this.place.lat}`;
  }

  //3/ Pobierz datę w formacje YYYY-MM-DD
  getNiceDate() {
    return this.date.toJSON().match(/(\d{4}(-\d{2}){2})/)[1];
  }
}