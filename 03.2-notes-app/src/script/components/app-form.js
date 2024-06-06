class AppForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _titleLength = 12;
  _bodyLength = 20;

  static get observedAttributes() {
    return ["titleLength", "bodyLength"];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  _styling() {
    this._style.textContent = `
      :host {
        font-family: var(--main-font);
      }

      .form-container {
        padding: 150px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .form-container h1{
        margin-bottom: 50px;
        color: #000000;
      }

      form {
        height: 100%;
        width: 500px;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      .form-group {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
      }

      .form-input {
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .form-input label {
        position: absolute;
        top: -8px;
        left: 0;
        font-size: 1rem;
        margin-block-end: 8px;
        user-select: none;
        pointer-events: none;
        transition: 150ms all ease-in-out;
        color: var(--primary-color);
      }

      .form-input input {
        height: 22px;
        padding: 8px;
        border: none;
        outline: none;
        border-block-end: 2px solid var(--primary-color);
      }

      .form-input input:focus-visible ~ label,
      .form-input input:valid ~ label {
        top: -20px;
        color: #000000;
      }

      .form-input textarea {
        height: 200px;
        padding: 8px;
        border: none;
        outline: none;
        border-block-end: 2px solid var(--primary-color);
        resize: vertical;
        font-family: var(--main-font);
      }

      .form-input textarea:focus-visible ~ label,
      .form-input textarea:valid ~ label {
        top: -20px;
        color: #000000;
      }

      .form-input input:focus-visible,
      .form-input input:valid,
      .form-input textarea:focus-visible,
      .form-input textarea:valid {
        border: 2px solid var(--primary-color);
        border-radius: 2px;
      }

      .form-group button {
        height: 35px;
        border:none ;
        background-color: var(--primary-color);
        color: var(--base-color);
        text-transform: uppercase;
        cursor: pointer;
      }

      .form-group button:hover {
        background-color: #7ba1b8;
      }

      .form-group .form-input p.validation-message {
        color: #FF204E;
        font-size: 0.8rem;
        margin-block-start: 6px;
        padding-inline-start: 8px;
      }

      @media screen and (max-width: 568px) {
        form {
          width: 80%;
        }
      }
    `;
  }

  set titleLength(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this._titleLength = value;
  }

  get titleLength() {
    return this._titleLength;
  }

  set bodyLength(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this._bodyLength = value;
  }

  get bodyLength() {
    return this._bodyLength;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._emptyContent();
    this._styling();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <div class="form-container">
          <h1>Add Your Notes</h1>
          <form>
            <div class="form-group">
              <div class="form-input">
                <input type="text" name="title" id="title" minLength=${this.titleLength} aria-describedby="titleValidation" required>
                <label>Title</label>
                <p id="titleValidation" class="validation-message"></p>
              </div>
              <div class="form-input">
                <textarea name="body" id="body" minLength=${this.bodyLength} aria-describedby="bodyValidation" required></textarea>
                <label>Body</label>
                <p id="bodyValidation" class="validation-message"></p>
              </div>
              <button>Add</button>
            </div>
          </form>
        </div>
    `;
  }

  attributeChangeCallback(name, oldValue, newValue) {
    switch (name) {
      case "titleLength":
        this.titleLength = newValue;
        break;
      case "bodyLength":
        this.bodyLength = newValue;
        break;
    }

    this.render();
  }
}

customElements.define("app-form", AppForm);
