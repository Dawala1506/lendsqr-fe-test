import React, { useState } from "react";
import { Filter, MoreVertical, Eye, UserX, UserPlus } from "lucide-react";
import "./Users.scss";
const Profile = () => {
  const [showItemsPerPage, setShowItemsPerPage] = useState("100");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
export default Profile;
