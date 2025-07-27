// src/pages/Users.jsx
import React, { useState } from "react";
import { Filter, MoreVertical, Eye, UserX, UserPlus } from "lucide-react";
import "./Users.scss";

// Icon Components
const UsersIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient1)" />
    <path
      d="M20 18C21.6569 18 23 16.6569 23 15C23 13.3431 21.6569 12 20 12C18.3431 12 17 13.3431 17 15C17 16.6569 18.3431 18 20 18Z"
      fill="white"
    />
    <path
      d="M20 20C16.6863 20 14 22.6863 14 26V28H26V26C26 22.6863 23.3137 20 20 20Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient1"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DF18FF" />
        <stop offset="1" stopColor="#9718FF" />
      </linearGradient>
    </defs>
  </svg>
);

const ActiveUsersIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient2)" />
    <path
      d="M16 18C17.6569 18 19 16.6569 19 15C19 13.3431 17.6569 12 16 12C14.3431 12 13 13.3431 13 15C13 16.6569 14.3431 18 16 18Z"
      fill="white"
    />
    <path
      d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"
      fill="white"
    />
    <path
      d="M16 20C12.6863 20 10 22.6863 10 26V28H22V26C22 22.6863 19.3137 20 16 20Z"
      fill="white"
    />
    <path
      d="M24 20C23.1 20 22.25 20.15 21.45 20.4C22.45 21.6 23 23.2 23 25V28H30V26C30 22.6863 27.3137 20 24 20Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient2"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5718FF" />
        <stop offset="1" stopColor="#9718FF" />
      </linearGradient>
    </defs>
  </svg>
);

const LoansIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient3)" />
    <path
      d="M26 14H14C13.45 14 13 14.45 13 15V25C13 25.55 13.45 26 14 26H26C26.55 26 27 25.55 27 25V15C27 14.45 26.55 14 26 14ZM26 24H14V16H26V24Z"
      fill="white"
    />
    <path
      d="M20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient3"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F55F44" />
        <stop offset="1" stopColor="#FF8C73" />
      </linearGradient>
    </defs>
  </svg>
);

const SavingsIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient4)" />
    <path
      d="M24 16H16C14.9 16 14 16.9 14 18V26C14 27.1 14.9 28 16 28H24C25.1 28 26 27.1 26 26V18C26 16.9 25.1 16 24 16ZM24 26H16V18H24V26Z"
      fill="white"
    />
    <path
      d="M20 12C18.34 12 17 13.34 17 15H19C19 14.45 19.45 14 20 14C20.55 14 21 14.45 21 15C21 15.55 20.55 16 20 16H19V18H20C21.66 18 23 16.66 23 15C23 13.34 21.66 12 20 12Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient4"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3366" />
        <stop offset="1" stopColor="#FF6B94" />
      </linearGradient>
    </defs>
  </svg>
);

const UsersPage = () => {
  const [showItemsPerPage, setShowItemsPerPage] = useState("100");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const statsCards = [
    {
      icon: UsersIcon,
      title: "USERS",
      value: "2,453",
      className: "users-card",
    },
    {
      icon: ActiveUsersIcon,
      title: "ACTIVE USERS",
      value: "2,453",
      className: "active-users-card",
    },
    {
      icon: LoansIcon,
      title: "USERS WITH LOANS",
      value: "12,453",
      className: "loans-card",
    },
    {
      icon: SavingsIcon,
      title: "USERS WITH SAVINGS",
      value: "102,453",
      className: "savings-card",
    },
  ];

  const usersData = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "08160780928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Pending",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "07003309226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Inactive",
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const ActionDropdown = ({ isVisible, onClose }) => (
    <div className={`action-dropdown ${isVisible ? "active" : ""}`}>
      <div className="dropdown-content">
        <button className="dropdown-item" onClick={onClose}>
          <Eye size={14} />
          <span>View Details</span>
        </button>
        <button className="dropdown-item" onClick={onClose}>
          <UserX size={14} />
          <span>Blacklist User</span>
        </button>
        <button className="dropdown-item" onClick={onClose}>
          <UserPlus size={14} />
          <span>Activate User</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="users-page">
      {/* Page Title */}
      <h1 className="page-title">Users</h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        {statsCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className={`stat-card ${card.className}`}>
              <div className="stat-icon">
                <IconComponent />
              </div>
              <div className="stat-content">
                <div className="stat-title">{card.title}</div>
                <div className="stat-value">{card.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Container */}
      <div className="table-container">
        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>
                  <div className="header-cell">
                    <span>ORGANIZATION</span>
                    <Filter size={12} className="filter-icon" />
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>USERNAME</span>
                    <Filter size={12} className="filter-icon" />
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>EMAIL</span>
                    <Filter size={12} className="filter-icon" />
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>PHONE NUMBER</span>
                    <Filter size={12} className="filter-icon" />
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>DATE JOINED</span>
                    <Filter size={12} className="filter-icon" />
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>STATUS</span>
                    <Filter size={12} className="filter-icon" />
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <tr key={index}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.dateJoined}</td>
                  <td>
                    <span
                      className={`status-badge status-${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-cell">
                      <button
                        className="action-button"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <MoreVertical size={16} />
                      </button>
                      <ActionDropdown
                        isVisible={activeDropdown === index}
                        onClose={() => setActiveDropdown(null)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <div className="pagination-info">
            <span>Showing</span>
            <select
              value={showItemsPerPage}
              onChange={(e) => setShowItemsPerPage(e.target.value)}
              className="items-select"
            >
              <option value="100">100</option>
              <option value="50">50</option>
              <option value="25">25</option>
            </select>
            <span>out of 100</span>
          </div>

          <div className="pagination-controls">
            <button
              className="pagination-button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              &lt;
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`pagination-button ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <span className="pagination-ellipsis">...</span>

            {[15, 16].map((page) => (
              <button
                key={page}
                className="pagination-button"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="pagination-button"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
