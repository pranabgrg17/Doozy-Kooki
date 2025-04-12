import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setmenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Optional: clear from localStorage if used
    setToken("");                     // Clear from context
    navigate("/")
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      </div>

      <ul className="navbar-menu">
        <li><Link to='/' className="nav-link">Home</Link></li>
        <li><a href="#explore-menu" className="nav-link">Menu</a></li>
        <li><a href="#app-download" className="nav-link">Mobile App</a></li>
        <li><a href="#footer" className="nav-link">Contact</a></li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" className="nav-icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="cart" className="nav-icon" /></Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {!token ? (
          <button className="signin-btn" onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="profile" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="orders" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="logout" /><p>Log Out</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
