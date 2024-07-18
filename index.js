function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching data:', error));
}

function renderBooks(books) {
  const booksList = document.getElementById('books-list');
  if (booksList) {
    books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = book.name;
      booksList.appendChild(li);
    });
  } else {
    console.error('Element with id "books-list" not found.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});


