const bookList = document.querySelector('.book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#addButton');

function Store(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

const booksArray = JSON.parse(localStorage.getItem('books')) || [];

const refreshList = () => {
  Store(booksArray);
  bookList.innerHTML = booksArray
    .map((data, index) => `<li><div class="book-info"><p>"${data.title}"</p>by<p>${data.author}</p></div>
      <button onclick=Book.removeBooks(${index}) class="removeButton">Remove</button></li>`).join('');
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    booksArray.push(this);
  }

  static removeBooks(index) {
    booksArray.splice(index, 1);
    refreshList();
  }
}

refreshList();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    return false;
  }
  const book = new Book(title.value, author.value);
  booksArray.push(book);
  refreshList();
  title.value = '';
  author.value = '';
  return true;
});