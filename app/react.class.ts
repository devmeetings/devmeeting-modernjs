export class React {
  //14/ Metoda statyczna nie posiada kontekstu (this)
  static render(root, target:HTMLElement) {
    //3/ Prosta funkcja renderująca
    function rerender() {
      target.innerHTML = root.render();
    }

    //5/ Uniwersalny handler dla wszystkich eventów 
    function eventHandler(event: Event) {
      root.eventListener(event)
        .then(rerender)
        .catch(() => {});
    }
    
    //2/ Rejestruj handler na wybranych zdarzeniach
    const supportedEvents = ["submit", "click"];
    supportedEvents.map(event => target.addEventListener(event, eventHandler));
    
    ///Początkowe wyrenderowanie aplikacji
    rerender();
  }
}