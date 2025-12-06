import {Link} from "react-router-dom";
import '../css/NavBar.css'

/* This function renders the navbar */
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    </nav>

}

export default NavBar