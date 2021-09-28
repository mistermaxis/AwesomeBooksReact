const BookList = ({ books }) => {
  return (<div className="blog-list">
      {books.map((book) => (
        <div key={book.id}>
            <span>{book.title} by "{book.author}"</span>
        </div>
      ))
  }
    </div>);
};

export default BookList;
