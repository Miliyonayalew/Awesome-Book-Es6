import refreshList from './booksFunctions.js';
import { Book, booksArray } from './Book.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#addButton');
const Info = document.querySelector('.info');

const Add = () => {
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value === '' && author.value === '') {
      Info.style.display = 'block';
      Info.style.color = 'red';
      Info.textContent = 'Please fill in all fields';
      return false;
    }
    const book = new Book(title.value, author.value);
    booksArray.push(book);
    Info.style.display = 'block';
    Info.style.color = 'green';
    Info.textContent = 'Book added successfully';
    refreshList();
    title.value = '';
    author.value = '';
    return true;
  });
};

const displayNone = () => {
  Info.style.display = 'none';
};

window.addEventListener('load', () => {
  setInterval(displayNone, 5000);
});

export default Add;