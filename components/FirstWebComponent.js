class FirstWebComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  set testAddData(data) {
    this.root.innerHTML = `
        <h2>${data}</h2>
      
      
      `;
  }
}

window.customElements.define("first-web-component", FirstWebComponent);
