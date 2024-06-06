import Utils from "../utils.js";

class AppNoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _gutter = 16;

  static get observedAttributes() {
    return ["gutter"];
  }

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
      }

      .note-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr));
        gap: ${this.gutter}px;
      }

      @media screen and (max-width: 942px) {
        .note-list {
          grid-template-columns: repeat(2, minmax(150px, 1fr));
        }
      }
      @media screen and (max-width: 568px) {
        .note-list {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    `;
  }

  set gutter(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this._gutter = value;
  }

  get gutter() {
    return this._gutter;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._emptyContent();
    this._styling();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div class="note-list">
      <slot></slot>
    </div>
    `;
  }

  attributeChangeCallback(name, oldValue, newValue) {
    switch (name) {
      case "gutter":
        this.gutter = newValue;
        break;
    }

    this.render();
  }
}

customElements.define("app-note-list", AppNoteList);
