const books = [];
const RENDER_BOOKS = "renderBooks";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

function generateId() {
  return +new Date();
}

function generateBook(id, title, author, year, description, isComplete) {
  return {
    id,
    title,
    author,
    year,
    description,
    isComplete,
  };
}

function addBook() {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookYear = parseInt(document.getElementById("year").value);
  const bookDesc = document.getElementById("description").value;
  const isComplete = document.getElementById("checkbox").checked;
  const generatedId = generateId();
  const bookObject = generateBook(
    generatedId,
    bookTitle,
    bookAuthor,
    bookYear,
    bookDesc,
    isComplete
  );

  books.push(bookObject);
  document.dispatchEvent(new Event(RENDER_BOOKS));

  saveData();
}

function createBook(bookObject) {
  if (!bookObject.isComplete) {
    const textTitle = document.createElement("h3");
    textTitle.innerText = bookObject.title;
    textTitle.classList.add("title");

    const textAuthor_year = document.createElement("p");
    textAuthor_year.innerText = `${bookObject.author}, ${bookObject.year}`;
    textAuthor_year.classList.add("author_year");

    const description = document.createElement("p");
    description.innerText = bookObject.description;
    description.classList.add("description");

    const doneButton = document.createElement("button");
    doneButton.classList.add("done");
    doneButton.innerText = "Selesai";
    doneButton.addEventListener("click", function () {
      addBookToCompleted(bookObject.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Hapus";
    deleteButton.addEventListener("click", function () {
      // adding custom dialog
      const deleteAlert = document.getElementById("delete-alert");
      deleteAlert.setAttribute("style", "padding: 12px 20px");
      deleteAlert.innerHTML = "";

      const alertText = document.createElement("p");
      alertText.innerText = "Buku berhasil dihapus";
      deleteAlert.append(alertText);
      setTimeout(() => {
        deleteAlert.setAttribute("style", "opacity: 0");
      }, 2000);

      deleteBook(bookObject.id);
    });

    const uncompleted_book_action = document.createElement("div");
    uncompleted_book_action.classList.add("uncompleted_book_action");
    uncompleted_book_action.append(doneButton, deleteButton);

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    bookInfo.append(
      textTitle,
      textAuthor_year,
      description,
      uncompleted_book_action
    );

    const container = document.createElement("div");
    container.classList.add("uncompleted_book");
    container.append(bookInfo);
    return container;
  } else {
    const textTitle = document.createElement("h3");
    textTitle.innerText = bookObject.title;
    textTitle.classList.add("title");

    const textAuthor_year = document.createElement("p");
    textAuthor_year.innerText = `${bookObject.author}, ${bookObject.year}`;
    textAuthor_year.classList.add("author_year");

    const completed_book_details = document.createElement("div");
    completed_book_details.append(textTitle, textAuthor_year);

    const undoneButton = document.createElement("button");
    undoneButton.classList.add("undone");
    undoneButton.innerText = "Belum Selesai";
    undoneButton.addEventListener("click", function () {
      undoBookFromCompleted(bookObject.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Hapus";
    deleteButton.addEventListener("click", function () {
      // adding custom dialog
      const deleteAlert = document.getElementById("delete-alert");
      deleteAlert.setAttribute("style", "padding: 12px 20px");
      deleteAlert.innerHTML = "";

      const alertText = document.createElement("p");
      alertText.innerText = "Buku berhasil dihapus";
      deleteAlert.append(alertText);
      setTimeout(() => {
        deleteAlert.setAttribute("style", "opacity: 0");
      }, 2000);

      deleteBook(bookObject.id);
    });

    const completed_book_action = document.createElement("div");
    completed_book_action.classList.add("completed_book_action");
    completed_book_action.append(undoneButton, deleteButton);

    const container = document.createElement("div");
    container.classList.add("completed_book");
    container.append(completed_book_details, completed_book_action);
    return container;
  }
}

function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_BOOKS));
  saveData();
}

function findBook(bookId) {
  for (bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
}

function deleteBook(bookId) {
  bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_BOOKS));
  saveData();
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }

  return -1;
}

function undoBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_BOOKS));
  saveData();
}

const SAVED_EVENT = "saved-books";
const TODO_APPS = "TODO_APPS";

const saveData = function () {
  if (isStorageExist()) {
    const parsedData = JSON.stringify(books);
    localStorage.setItem(TODO_APPS, parsedData);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
};

const isStorageExist = function () {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
};

const loadDataFromStorage = function () {
  const serializedData = localStorage.getItem(TODO_APPS);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_BOOKS));
};

document.addEventListener(RENDER_BOOKS, function () {
  const uncompletedBooks = document.getElementById("uncompleted");
  uncompletedBooks.innerHTML = "";

  const completedBooks = document.getElementById("completed");
  completedBooks.innerHTML = "";

  for (const item of books) {
    const bookElement = createBook(item);
    if (!item.isComplete) {
      uncompletedBooks.append(bookElement);
    } else {
      completedBooks.append(bookElement);
    }
  }
});

// search function
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  const searchInput = document.getElementById("search-input").value;
  const titles = document.querySelectorAll(".title");

  titles.forEach((title) => {
    let text = title.innerText;
    if (text.toLowerCase().includes(searchInput.toLowerCase())) {
      title.parentElement.parentElement.style.display = "";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
  });
});
