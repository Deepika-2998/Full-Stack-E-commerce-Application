// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/products">Products</Link>
//     <Link to="/cart">Cart</Link>
//   </nav>
// );

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional: Include a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          E-Commerce
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

