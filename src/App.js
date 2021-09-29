import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Add from './Add';
import Contact from './Contact';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let list = JSON.parse(window.localStorage.getItem('books'));

    setBooks(list);
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <main className="content">
          <Switch>
            <Route exact path="/">
              <Home books={books} setBooks={setBooks}/>
            </Route>
            <Route path="/add">
              <Add books={books} setBooks={setBooks}/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
