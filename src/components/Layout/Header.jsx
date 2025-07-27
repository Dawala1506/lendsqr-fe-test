// src/components/Layout/Header.jsx
import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <div className="logo-text">lendsqr</div>
        </div>

        {/* Search Bar */}
        <div className="header__search">
          <div className="header__search-container">
            <input
              type="text"
              placeholder="Search for anything"
              className="header__search-input"
            />
            <button className="header__search-button">
              <Search className="search-icon" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="header__right">
          <a href="#" className="docs-link">
            Docs
          </a>

          <div className="notification">
            <Bell className="notification-icon" />
          </div>

          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">Adedeji</span>
              <ChevronDown className="dropdown-icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
