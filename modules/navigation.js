const list = document.querySelector('.list-book-page');
const addBook = document.querySelector('.add-book-page');
const contact = document.querySelector('.contact-page');
const listPage = document.querySelector('#listPage');
const addPage = document.querySelector('#addPage');
const contactPage = document.querySelector('#contactPage');

const navigator = () => {
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
};

export default navigator;
