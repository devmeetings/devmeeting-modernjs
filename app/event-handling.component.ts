//3/ Interfejs określający metodę, która zwaraca Promise, który ma być rozwiązany bez wartości
export interface EventHandlingComponent {
  eventListener(event: Event): Promise<void>;
}
