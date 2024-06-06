class SearchError extends HTMLElement {
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
        .placeholder {
          color: var(--primary-color);
          font-family: var(--main-font);
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
          <h2 class="placeholder">Ups, something's went wrong!</h2>
          <slot></slot>
        </div>
      `;
  }
}

customElements.define("app-search-error", SearchError);
