import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div><h2>Awesome Books</h2></div>
            <menu className="nav-menu">
               <Link to="/">Home</Link>
               <Link to="/add">Add</Link>
               <Link to="/contact">Contact</Link>
            </menu>
        </nav>
    );
}
 
export default NavBar