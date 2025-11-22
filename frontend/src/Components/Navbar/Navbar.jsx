import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import './Navbar.css';
import logo from '../Assets/white_logo.png';
import cart_icon from '../Assets/shopping-bag.png';
import search_icon from '../Assets/search.png';
import dropdown from '../Assets/left-arrows.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      e.preventDefault();
      const encodedQuery = encodeURIComponent(query.trim());
      navigate(`/search?q=${encodedQuery}`);
    }
  };

  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  

  return (
    <>
    <div className='top-info-bar'>
      🚚💨 FREE DELIVERY FOR ORDERS ABOVE Rs.7000
    </div>

    
    <div className="navbar">
      {/* Logo */}
      <div className="nav_logo">
        <Link to="/Nils">
          <img src={logo} alt="Nils" />
        </Link>
      </div>
      

      {/* Navigation Menus */}
      <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown} alt="" />

      <ul ref={menuRef} className="nav-menu">
        {/* Shop by Category */}
        <li className="nav-item" onMouseEnter={() => toggleMenu('category')} onMouseLeave={() => toggleMenu(null)}>
          <span className="nav-link">Shop by Category</span>
          {openMenu === 'category' && (
            <ul className="dropdown">
              <li><Link to="/Category/tops">Tops</Link></li>
              <li><Link to="/Category/dresses">Dresses</Link></li>
              <li><Link to="/Category/bottoms">Bottoms</Link></li>
              <li><Link to="/Category/jumpsuits">Jumpsuits & Rompers</Link></li>
              <li><Link to="/Category/kurtas">Kurtas & Tunics</Link></li>
              <li><Link to="/Category/footwear">Footwear</Link></li>
              <li><Link to="/Category/accessories">Accessories</Link></li>
              <li><Link to="/Category/undergarments">Undergarments</Link></li>
            </ul>
          )}
        </li>

        {/* Shop by Occasion */}
        <li className="nav-item" onMouseEnter={() => toggleMenu('occasion')} onMouseLeave={() => toggleMenu(null)}>
          <span className="nav-link">Shop by Occasion</span>
          {openMenu === 'occasion' && (
            <ul className="dropdown">
              <li><Link to="/Occasion/office">Office Wear</Link></li>
              <li><Link to="/Occasion/casual">Casual Wear</Link></li>
              <li><Link to="/Occasion/party">Party Wear</Link></li>
              <li><Link to="/Occasion/resort">Resort Wear</Link></li>
              <li><Link to="/Occasion/evening">Evening Wear</Link></li>
              <li><Link to="/Occasion/festive">Festive & Wedding</Link></li>
            </ul>
          )}
        </li>

        {/* Featured & Deals */}
        <li className="nav-item" onMouseEnter={() => toggleMenu('featured')} onMouseLeave={() => toggleMenu(null)}>
          <span className="nav-link">Featured & Deals</span>
          {openMenu === 'featured' && (
            <ul className="dropdown">
              <li><Link to="/Featured/new">New In</Link></li>
              <li><Link to="/Featured/white">White Collection</Link></li>
              <li><Link to="/Featured/black">Black Collection</Link></li>
              <li><Link to="/Featured/sale">Clearance Sale</Link></li>
              <li><Link to="/Featured/gift">Gift Vouchers</Link></li>
              <li><Link to="/Featured/best">Best Sellers</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Login & Cart */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        
        <div className="nav-search-wrapper">
        
        <input
              type="text"
              placeholder="Search products..."
              className="nav-search-box"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
        />
        <img src={search_icon} alt="search" className="search-icon-outside" />
        </div>


        <Link to="/Cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
