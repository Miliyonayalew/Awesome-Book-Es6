import navigator from './modules/navigation.js';
import bookIsEmpty from './modules/bookIsEmpty.js';
import refreshList from './modules/booksFunctions.js';
import Add from './modules/addBooks.js';
import Date from './modules/date.js';

window.onload = refreshList();
Add();
navigator();
bookIsEmpty();
setInterval(Date, 10);
