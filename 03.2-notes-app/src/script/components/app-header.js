class AppHeader extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  _styling() {
    this._style.textContent = `
        :host {
            display: block;
            font-family: var(--main-font);
        }

        .header-brand-name {
            color: var(--base-color);
            font-size: 1.6rem;
            font-weight: 800;
        }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._emptyContent();
    this._styling();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <div>
            <h1 class="header-brand-name">Notes App</h1>
        </div>
    `;
  }
}

customElements.define("app-header", AppHeader);
