import {Coordinates} from "./coordinates.interface";

export class Party {
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
