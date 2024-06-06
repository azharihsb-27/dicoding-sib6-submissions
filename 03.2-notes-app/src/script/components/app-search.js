class AppSearch extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = "submit";
  _searchEvent = "search";

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }
  connectedCallback() {
    this._shadowRoot
      .querySelector("form")
      .addEventListener("submit", (event) => this._onFormSubmit(event, this));
    this.addEventListener(this._submitEvent, this._onAppSearchSubmit);
  }

  _onFormSubmit(event, appSearchInstance) {
    appSearchInstance.dispatchEvent(new CustomEvent("submit"));

    event.preventDefault();
  }

  _onAppSearchSubmit() {
    const query = this._shadowRoot.querySelector("input#name").value;

    if (!query) return;

    this.dispatchEvent(
      new CustomEvent(this._searchEvent, {
        detail: { query },
        bubbles: true,
      }),
    );
  }

  _styling() {
    this._style.textContent = `
        .floating-form {
            margin: 80px 0;
        }

        .search-form {
            display: flex;
            justify-content: center;
            gap: 12px;
        }

        .search-form .form-group input {
            width: 600px;
            height: 35px;
            padding: 8px;
            border: none;
            outline: none;
            border-block-end: 2px solid var(--primary-color);
        }

        .search-form .form-group input:focus-visible,
        .search-form .form-group input:valid {
            border: 2px solid var(--primary-color);
            border-radius: 2px;
        }

        .search-form button {
            padding: 8px 12px;
            border:none ;
            background-color: var(--primary-color);
            color: var(--base-color);
            text-transform: uppercase;
            cursor: pointer;
        }

        .search-form button:hover {
            background-color: #7ba1b8;
        }
        
        @media screen and (max-width: 568px) {
          .search-form .form-group input {
            width: 400px;
          }
        }

        @media screen and (max-width: 400px) {
          .search-form .form-group input {
            width: 250px;
          }
        }

        @media screen and (max-width: 320px) {
          .search-form .form-group input {
            width: 180px;
          }
        }
    `;
  }

  render() {
    this._emptyContent();
    this._styling();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
          <div class="floating-form">
            <form id="searchForm" class="search-form">
              <div class="form-group">
                <input id="name" name="name" type="search" required placeholder="Note-id"/>
              </div>
    
              <button>Search</button>
            </form>
          </div>
        `;
  }
}

customElements.define("app-search", AppSearch);
