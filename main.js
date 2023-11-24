const bookList = document.getElementById("book-list");
const addBookForm = document.getElementById("add-book-form");
const searchInput = document.getElementById("search");

const books = []; // An array to simulate book data

function displayBooks() {
  bookList.innerHTML = "";
  for (const book of books) {
    const bookItem = document.createElement("li");
    bookItem.textContent = `${book.title} by ${book.author} (${book.genre})`;
    bookList.appendChild(bookItem);
  }
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  // Check for duplicate entries
  const isDuplicate = books.some((book) =>
    book.title.toLowerCase() === title.toLowerCase() &&
    book.author.toLowerCase() === author.toLowerCase() &&
    book.genre.toLowerCase() === genre.toLowerCase()
  );

  if (isDuplicate) {
    alert("This book already exists in the library.");
  } else {
    books.push({ title, author, genre });
    displayBooks();

    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
  }
}

function searchBooks() {
  const searchTerm = searchInput.value.toLowerCase();
  const searchResults = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.genre.toLowerCase().includes(searchTerm)
  );
  bookList.innerHTML = "";
  if (searchResults.length === 0) {
    bookList.innerHTML = "No matching books found.";
  } else {
    for (const book of searchResults) {
      const bookItem = document.createElement("li");
      bookItem.textContent = `${book.title} by ${book.author} (${book.genre})`;
      bookList.appendChild(bookItem);
    }
  }
}

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});
