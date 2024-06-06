import notesData from "../data/notesData.js";
import Utils from "../utils.js";

const home = () => {
  const form = document
    .querySelector("app-form")
    ._shadowRoot.querySelector("form");
  const titleInput = form.elements.title;
  const bodyInput = form.elements.body;
  const noteListElement = document.querySelector("app-note-list");
  const noteSearchError = document.querySelector("app-search-error");
  const loadingElement = document.querySelector(".search-loading");

  const timeOut = 1000;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteTitle = titleInput.value;
    const noteBody = bodyInput.value;

    const note = {
      title: noteTitle,
      body: noteBody,
    };

    notesData.createNote(note);
    showNonArchivedNotes();
  });

  const customValidationHandler = (e) => {
    const titleMinLength = titleInput.getAttribute("minLength");
    const bodyMinLength = bodyInput.getAttribute("minLength");

    e.target.setCustomValidity("");

    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("Mohon diisi.");
      return;
    }

    if (e.target.validity.tooShort && e.target.id == "title") {
      e.target.setCustomValidity(
        `Minimal panjang karakter adalah ${titleMinLength} karakter.`,
      );
      return;
    } else if (e.target.validity.tooShort && e.target.id == "body") {
      e.target.setCustomValidity(
        `Minimal panjang karakter adalah ${bodyMinLength} karakter.`,
      );
      return;
    }
  };

  const realTimeValidation = (e) => {
    const isValid = e.target.validity.valid;
    const errorMessage = e.target.validationMessage;

    const connectedValidationId = e.target.getAttribute("aria-describedby");
    const connectedValidationEl = connectedValidationId
      ? document
          .querySelector("app-form")
          ._shadowRoot.getElementById(connectedValidationId)
      : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
    } else {
      connectedValidationEl.innerText = "";
    }
  };

  titleInput.addEventListener("change", customValidationHandler);
  titleInput.addEventListener("invalid", customValidationHandler);
  titleInput.addEventListener("blur", realTimeValidation);

  bodyInput.addEventListener("change", customValidationHandler);
  bodyInput.addEventListener("invalid", customValidationHandler);
  bodyInput.addEventListener("blur", realTimeValidation);

  const searchFormElement = document.querySelector("app-search");
  const btnNonArchive = document.querySelector(".btn-non-archive");
  const btnArchive = document.querySelector(".btn-archive");

  btnNonArchive.addEventListener("click", () => {
    noteListElement.innerHTML = "";
    showNonArchivedNotes();
  });
  btnArchive.addEventListener("click", () => {
    noteListElement.innerHTML = "";
    showArchivedNotes();
  });

  const displaySearchNote = (query) => {
    Utils.hideElement(noteSearchError);

    noteListElement.innerHTML = "";

    Utils.showElement(loadingElement);

    setTimeout(() => {
      notesData
        .getSingleNote(query)
        .then((note) => {
          const noteItemElement = document.createElement("app-note-item");
          noteItemElement.note = note;

          noteListElement.innerHTML = "";
          noteListElement.appendChild(noteItemElement);
        })
        .catch(() => {
          noteSearchError.textContent = "Id was not found";
          Utils.showElement(noteSearchError);
        });

      Utils.hideElement(loadingElement);
    }, timeOut);
  };

  const onSearchHandler = (e) => {
    e.preventDefault();

    const { query } = e.detail;
    displaySearchNote(query);
  };

  const displayNotes = (notes) => {
    Utils.hideElement(noteSearchError);

    noteListElement.innerHTML = "";

    Utils.showElement(loadingElement);

    setTimeout(() => {
      const noteItemElements = notes.map((note) => {
        const noteItemElement = document.createElement("app-note-item");
        noteItemElement.note = note;
        return noteItemElement;
      });
      noteListElement.innerHTML = "";
      noteListElement.append(...noteItemElements);

      Utils.hideElement(loadingElement);
    }, timeOut);
  };

  const showNonArchivedNotes = () => {
    notesData.getNotes().then((notes) => {
      displayNotes(notes);
    });
  };

  const showArchivedNotes = () => {
    notesData.getArchivedNotes().then((notes) => {
      displayNotes(notes);
    });
  };

  Utils.hideElement(noteSearchError);
  searchFormElement.addEventListener("search", onSearchHandler);
  showNonArchivedNotes();
};

export default home;
