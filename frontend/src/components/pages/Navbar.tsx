import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  isLoggedIn: boolean;
  handleLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, handleLogout }) => {
  const renderNavigationLinks = () => {
    if (isLoggedIn) {
      return (
        <>
          <li>
            <Link to="/quiz">Home</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <ul>
            {renderNavigationLinks()}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
