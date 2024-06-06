class AppFooter extends HTMLElement {
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

        .footer-brand-name {
            color: var(--base-color);
            font-size: 1rem;
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
        <p class="footer-brand-name">Notes App &copy; 2024</p>
      </div>
    `;
  }
}

customElements.define("app-footer", AppFooter);
