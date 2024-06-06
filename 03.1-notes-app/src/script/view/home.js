import notesData from "../data/data.js";

const home = () => {
  const form = document
    .querySelector("app-form")
    ._shadowRoot.querySelector("form");
  const titleInput = form.elements.title;
  const bodyInput = form.elements.body;

  const noteListElement = document.querySelector("app-note-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addNote();
  });

  const generateId = () => {
    let generatedId = "";
    let generatedCharacters = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 6; i++) {
      generatedCharacters += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    generatedId = `notes-${generatedCharacters}-${Date.now()}`;

    return generatedId;
  };

  const generateNote = (id, title, body, createdAt, archived) => {
    return {
      id,
      title,
      body,
      createdAt,
      archived,
    };
  };

  const addNote = () => {
    const noteId = generateId();
    const noteTitle = titleInput.value;
    const noteBody = bodyInput.value;
    const noteCreatedAt = new Date().toISOString();
    const noteArchived = false;

    const newNote = generateNote(
      noteId,
      noteTitle,
      noteBody,
      noteCreatedAt,
      noteArchived
    );
    notesData.push(newNote);
    displayNotes(notesData);
  };

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
        `Minimal panjang karakter adalah ${titleMinLength} karakter.`
      );
      return;
    } else if (e.target.validity.tooShort && e.target.id == "body") {
      e.target.setCustomValidity(
        `Minimal panjang karakter adalah ${bodyMinLength} karakter.`
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

  const displayNotes = (notes) => {
    const noteItemElements = notes.map((note) => {
      const noteItemElement = document.createElement("app-note-item");
      noteItemElement.note = note;
      return noteItemElement;
    });
    noteListElement.innerHTML = "";
    noteListElement.append(...noteItemElements);
  };

  displayNotes(notesData);
};

export default home;
