class AppNoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _styling() {
    this._style.textContent = `
        :host {
        display: block;
        border-radius: 6px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
        font-family: var(--main-font);
        }

        .note-item {
          padding: 0 16px 20px;
        }

        .note-item.completed .note-item__title, 
        .note-item.completed .note-item__body {
          color: #b8b8b8;
          text-decoration-line: line-through;
        }

        .note-item.completed .btn-done {
          background-color: #b8b8b8;
        }
        
        .note-item .note-item__title {
          font-size: 1.1rem;
          color: var(--primary-color);
        }
        
        .note-item .note-item__body {
          font-size: 0.9rem;
          margin-block-start: -16px;
        }
        

        .btn {
          border: none;
          padding: 8px 12px;
          border-radius: 2px;
          cursor: pointer;
        }

        .btn-done {
          background-color: var(--primary-color);
          color: var(--base-color);
        }
        
        .btn-done:hover {
          background-color: #7ba1b8;
        }

        .btn-delete {
          background-color: #FA7070;
          color: var(--base-color);
        }

        .btn-delete:hover {
          background-color: #dd6363;
        }
    `;
  }

  render() {
    this._emptyContent();
    this._styling();

    this._shadowRoot.appendChild(this._style);

    this._note.archived == false
      ? (this._shadowRoot.innerHTML += `
        <div class="note-item">
          <div class="note-item__title">
            <h3>${this._note.title}</h3>
          </div>
          <div class="note-item__body">
            <p>${this._note.body}</p>
          </div>
        </div>
      `)
      : (this._shadowRoot.innerHTML += `
          <div class="note-item completed">
            <div class="note-item__title">
              <h3>${this._note.title}</h3>
            </div>
            <div class="note-item__body">
              <p>${this._note.body}</p>
            </div>
          </div>
        `);
  }
}

customElements.define("app-note-item", AppNoteItem);
