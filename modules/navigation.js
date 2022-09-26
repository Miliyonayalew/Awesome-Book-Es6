/* const bookList = document.querySelector('.list-book-page'); */
const list = document.querySelector('.list-book-page');
const addBook = document.querySelector('.add-book-page');
const contact = document.querySelector('.contact-page');
const listPage = document.querySelector('#listPage');
const addPage = document.querySelector('#addPage');
const contactPage = document.querySelector('#contactPage');
const date = document.querySelector('#date');
const year = document.querySelector('.year');
class Time {
  static display() {
    const today = new Date();
    const locale = navigator.language;
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: 'true',
    };
    date.textContent = today.toLocaleString(locale, options);
    year.textContent = today.getFullYear();
  }
}

window.addEventListener('load', () => {
  Time.display();
  setInterval(Time.display, 10);
});

list.addEventListener('click', () => {
  listPage.style.display = 'flex';
  list.classList.add('active');
  addBook.classList.remove('active');
  contact.classList.remove('active');
  addPage.style.display = 'none';
  contactPage.style.display = 'none';
});

addBook.addEventListener('click', () => {
  addPage.style.display = 'flex';
  addBook.classList.add('active');
  list.classList.remove('active');
  contact.classList.remove('active');
  contactPage.style.display = 'none';
  listPage.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactPage.style.display = 'flex';
  contact.classList.add('active');
  list.classList.remove('active');
  addBook.classList.remove('active');
  listPage.style.display = 'none';
  addPage.style.display = 'none';
});