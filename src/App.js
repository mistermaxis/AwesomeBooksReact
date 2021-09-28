import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Add from './Add';
import Contact from './Contact';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    let list = JSON.parse(window.localStorage.getItem('books'));

    setBooks(list);
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home books={books} />
            </Route>
            <Route path="/add">
              <Add books={books}/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
