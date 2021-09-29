const BookList = ({ books, setBooks }) => {

  const handleRemove = (e) => {
    const bookId = e.currentTarget.parentElement.id;
    const intId = parseInt(bookId)

    const newList = books.filter(book => book.id !== intId);

    newList.forEach((book, index) => {
      book.id = index;
    })

    window.localStorage.setItem('books', JSON.stringify(newList));
    setBooks(newList);
  }

  if (books === null || books.length === 0){
    return (
      <div>
        <span>Please add a book.</span>
      </div>
    )
  }
  else {
    return (<div className="booklist">
      { books.map((book) => (
        <div key={book.id} id={book.id}>
            <span>"{book.title}" by {book.author}</span>
            <button onClick={(e) => handleRemove(e)}>Remove</button>
        </div>
      ))
  }
    </div>);
  }
};

export default BookList;
