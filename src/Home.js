import BookList from './BookList';

const Home = ({books}) => {
  return (<div className="home">
    <h3 className="header">Books</h3>
    {books && <BookList books={books}/>}
  </div>);
};

export default Home;
