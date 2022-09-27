const StoredData = JSON.parse(localStorage.getItem('books'));

const bookIsEmpty = () => {
  if (StoredData.length === 0) {
    document.querySelector('.book-list').innerHTML = '<p class="empty">No books added yet</p>';
    document.querySelector('.empty').style.padding = '1rem';
  }
};

export default bookIsEmpty;