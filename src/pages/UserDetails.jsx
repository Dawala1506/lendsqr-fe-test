import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import "./styles/UserDetails.scss";
import { users as mockUsers } from "./MockApiData";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //   const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("General Details");
  let user = null;
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  const selectedUser = localStorage.getItem("selectedUser");
  if (selectedUser) {
    user = JSON.parse(selectedUser);
  } else {
    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    user = usersList.find((u) => String(u.id) === String(id));
  }

  if (!user) {
    return (
      <div>
        <p>User not found.</p>
        <button onClick={() => navigate("/users")}>Back</button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="not-found">
        <p>User not found</p>
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="user-details">
      <div className="header-top">
        <div className="back-button" onClick={() => navigate(-1)}>
          <svg
            className="back-icon"
            width="16"
            height="16"
            viewBox="0 0 28 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
              fill="currentColor"
            />
          </svg>
          Back to Users
        </div>
        <div className="header-container">
          <h1 className="page-title">User Details</h1>

          <div className="action-buttons">
            <button className="btn btn-blacklist">BLACKLIST USER</button>
            <button className="btn btn-activate">ACTIVATE USER</button>
          </div>
        </div>
      </div>
      <div className="header-profile">
        <div className="header-content">
          <div className="user-info">
            <div className="avatar">
              {user.avatar || user.username.charAt(0).toUpperCase()}
            </div>
            <div className="user-text">
              <div className="user-name">{user.username}</div>
              <div className="user-id">{user.id}</div>
            </div>
          </div>

          <div className="tier-info">
            <div className="tier-label">User's Tier</div>
            <div className="tier-stars">
              <Star className="star filled" />
              <Star className="star empty" />
              <Star className="star empty" />
            </div>
          </div>

          <div className="balance-info">
            <div className="balance">{user.accountBalance}</div>
            <div className="bank-info">
              {user.accountNumber}/{user.bank}
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <ul className="tab-list">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        <div className="section">
          <h3 className="section-title">Personal Information</h3>
          <div className="info-grid personal-grid">
            <div className="info-item">
              <div className="info-label">Full Name</div>
              <div className="info-value">
                {user.personalInformation.fullName}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone Number</div>
              <div className="info-value">{user.phoneNumber}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email Address</div>
              <div className="info-value">{user.email}</div>
            </div>
            <div className="info-item">
              <div className="info-label">BVN</div>
              <div className="info-value">{user.personalInformation.bvn}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Gender</div>
              <div className="info-value">
                {user.personalInformation.gender}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Marital Status</div>
              <div className="info-value">
                {user.personalInformation.maritalStatus}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Children</div>
              <div className="info-value">
                {user.personalInformation.children}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Type of Residence</div>
              <div className="info-value">
                {user.personalInformation.residenceType}
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Education and Employment</h3>
          <div className="info-grid employment-grid">
            <div className="info-item">
              <div className="info-label">Level of Education</div>
              <div className="info-value">
                {user.educationEmployment.educationLevel}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Employment Status</div>
              <div className="info-value">
                {user.educationEmployment.employmentStatus}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Sector of Employment</div>
              <div className="info-value">
                {user.educationEmployment.sector}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Duration of Employment</div>
              <div className="info-value">
                {user.educationEmployment.duration}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Office Email</div>
              <div className="info-value">
                {user.educationEmployment.officeEmail}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Monthly Income</div>
              <div className="info-value">
                {user.educationEmployment.monthlyIncome}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Loan Repayment</div>
              <div className="info-value">
                {user.educationEmployment.loanRepayment}
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Socials</h3>
          <div className="info-grid socials-grid ">
            <div className="info-item">
              <div className="info-label">Twitter</div>
              <div className="info-value">{user.socials.twitter}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Facebook</div>
              <div className="info-value">{user.socials.facebook}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Instagram</div>
              <div className="info-value">{user.socials.instagram}</div>
            </div>
          </div>
        </div>

        <div className="section guarantor-section">
          <h3 className="section-title">Guarantor</h3>
          <div className="info-grid guarantor-grid">
            <div className="info-item">
              <div className="info-label">Full Name</div>
              <div className="info-value">{user.guarantor.fullName}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone Number</div>
              <div className="info-value">{user.guarantor.phoneNumber}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">{user.guarantor.email}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Relationship</div>
              <div className="info-value">{user.guarantor.relationship}</div>
            </div>
          </div>

          <div className="info-grid guarantor-grid">
            <div className="info-item">
              <div className="info-label">Full Name</div>
              <div className="info-value">{user.guarantor.fullName}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone Number</div>
              <div className="info-value">{user.guarantor.phoneNumber}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">{user.guarantor.email}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Relationship</div>
              <div className="info-value">{user.guarantor.relationship}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
