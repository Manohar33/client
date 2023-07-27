import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Room Booking</span>
        </Link>
        {user ? <>{user.username}<button onClick={()=>{localStorage.clear();window.location.reload()}}>Logout</button></> : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to='/login'><button className="navButton">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
