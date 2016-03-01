export class React {
  static render(root, target:HTMLElement) {
    function rerender() {
      target.innerHTML = root.render();
    }

    function eventHandler(event: Event) {
      root.eventListener(event)
        .then(rerender)
        .catch(() => {});
    }

    const supportedEvents = ["submit", "click"];
    supportedEvents.map(event => target.addEventListener(event, eventHandler));

    rerender();
  }
}
