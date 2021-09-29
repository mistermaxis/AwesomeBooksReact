import BookList from './BookList';

const Home = ({books, setBooks}) => {
  return (<div className="home container">
    <h3 className="header">Books</h3>
    {<BookList books={books} setBooks={setBooks}/>}
  </div>);
};

export default Home;
