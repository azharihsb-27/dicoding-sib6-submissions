const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
};

const getBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  const availableBooks = books.length > 0;
  const availableBooksDetail = books.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  const readBooks = books
    .filter((book) => book.reading === true)
    .map(({ id, name, publisher }) => ({
      id,
      name,
      publisher,
    }));

  const unreadBooks = books
    .filter((book) => book.reading === false)
    .map(({ id, name, publisher }) => ({
      id,
      name,
      publisher,
    }));

  const finishedBooks = books
    .filter((book) => book.finished === true)
    .map(({ id, name, publisher }) => ({
      id,
      name,
      publisher,
    }));

  const unfinishedBooks = books
    .filter((book) => book.finished === false)
    .map(({ id, name, publisher }) => ({
      id,
      name,
      publisher,
    }));

  const booksNamedDicoding = books
    .filter((book) => book.name.toLowerCase().includes('dicoding'))
    .map(({ id, name, publisher }) => ({
      id,
      name,
      publisher,
    }));

  if (availableBooks && reading === '1') {
    const response = h.response({
      status: 'success',
      data: {
        books: readBooks,
      },
    });
    response.code(200);
    return response;
  } else if (availableBooks && reading === '0') {
    const response = h.response({
      status: 'success',
      data: {
        books: unreadBooks,
      },
    });
    response.code(200);
    return response;
  } else if (availableBooks && finished === '1') {
    const response = h.response({
      status: 'success',
      data: {
        books: finishedBooks,
      },
    });
    response.code(200);
    return response;
  } else if (availableBooks && finished === '0') {
    const response = h.response({
      status: 'success',
      data: {
        books: unfinishedBooks,
      },
    });
    response.code(200);
    return response;
  } else if (availableBooks && name === 'Dicoding') {
    const response = h.response({
      status: 'success',
      data: {
        books: booksNamedDicoding,
      },
    });
    response.code(200);
    return response;
  } else if (availableBooks) {
    const response = h.response({
      status: 'success',
      data: {
        books: availableBooksDetail,
      },
    });
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: 'success',
      data: {
        books: [],
      },
    });
    response.code(200);
    return response;
  }
};

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const book = books.filter((book) => book.id === bookId)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

const updateBookHandler = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = books.findIndex((book) => book.id === bookId);

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  } else if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addBookHandler,
  getBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookByIdHandler,
};
