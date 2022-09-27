const booksArray = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    booksArray.push(this);
  };

  static removeBooks = (index) => {
    booksArray.splice(index, 1);
  }
}

export { Book, booksArray };