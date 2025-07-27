// src/components/Layout/SideNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  UserCheck,
  CreditCard,
  Brain,
  PiggyBank,
  FileText,
  UserX,
  Target,
  Building,
  Briefcase,
  DollarSign,
  Settings,
  BarChart3,
  ScrollText,
  LogOut,
  ChevronDown,
} from "lucide-react";
import "./SideNav.scss";
// import "../styling";

const SideNav = ({ activeItem = "Users" }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", category: null, path: "/dashboard" },

    // CUSTOMERS
    { icon: Users, label: "Users", category: "CUSTOMERS", path: "/users" },
    {
      icon: UserCheck,
      label: "Guarantors",
      category: null,
      path: "/guarantors",
    },
    { icon: CreditCard, label: "Loans", category: null, path: "/loans" },
    {
      icon: Brain,
      label: "Decision Models",
      category: null,
      path: "/decision-models",
    },
    { icon: PiggyBank, label: "Savings", category: null, path: "/savings" },
    {
      icon: FileText,
      label: "Loan Requests",
      category: null,
      path: "/loan-requests",
    },
    { icon: UserX, label: "Whitelist", category: null, path: "/whitelist" },
    { icon: Target, label: "Karma", category: null, path: "/karma" },

    // BUSINESSES
    {
      icon: Building,
      label: "Organization",
      category: "BUSINESSES",
      path: "/organization",
    },
    {
      icon: Briefcase,
      label: "Loan Products",
      category: null,
      path: "/loan-products",
    },
    {
      icon: PiggyBank,
      label: "Savings Products",
      category: null,
      path: "/savings-products",
    },
    {
      icon: DollarSign,
      label: "Fees and Charges",
      category: null,
      path: "/fees-charges",
    },
    {
      icon: BarChart3,
      label: "Transactions",
      category: null,
      path: "/transactions",
    },
    { icon: Settings, label: "Services", category: null, path: "/services" },
    {
      icon: UserCheck,
      label: "Service Account",
      category: null,
      path: "/service-account",
    },
    {
      icon: ScrollText,
      label: "Settlements",
      category: null,
      path: "/settlements",
    },
    { icon: BarChart3, label: "Reports", category: null, path: "/reports" },

    // SETTINGS
    {
      icon: Settings,
      label: "Preferences",
      category: "SETTINGS",
      path: "/preferences",
    },
    {
      icon: DollarSign,
      label: "Fees and Pricing",
      category: null,
      path: "/fees-pricing",
    },
    {
      icon: ScrollText,
      label: "Audit Logs",
      category: null,
      path: "/audit-logs",
    },
  ];

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="sidenav">
      <div className="sidenav__container">
        {/* Logo */}
        {/* <div className="sidenav__logo">
          <div className="logo-text">lendsqr</div>
        </div> */}

        {/* Switch Organization */}
        <div className="sidenav__organization">
          <div className="sidenav__organization-dropdown">
            <Building className="icon" />
            <span className="text">Switch Organization</span>
            <ChevronDown className="dropdown-icon" />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidenav__nav">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <div key={index}>
                {item.category && (
                  <div className="nav-category">{item.category}</div>
                )}
                <div className={`nav-item ${isActive ? "active" : ""}`}>
                  <button
                    className="nav-link"
                    onClick={() => handleNavigation(item.path)}
                  >
                    <Icon className="nav-icon" />
                    <span className="nav-text">{item.label}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="sidenav__logout">
          <div className="logout-link" onClick={handleLogout}>
            <LogOut className="logout-icon" />
            <span className="logout-text">Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
