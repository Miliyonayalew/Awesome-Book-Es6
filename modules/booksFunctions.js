import { Book, booksArray } from './Book.js';

const bookList = document.querySelector('.book-list');

const Store = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const refreshList = () => {
  Store(booksArray);
  bookList.innerHTML = booksArray
    .map((data) => `<li><div class="book-info"><p>"${data.title}"</p>by<p>${data.author}</p></div>
      <button class="removeButton">Remove</button></li>`).join('');

  const removeBtn = document.querySelectorAll('.removeButton');
  removeBtn.forEach((button, index) => button.addEventListener('click', () => {
    Book.removeBooks(index);
    refreshList();
  }));
};

export default refreshList;