import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Layout from "../components/Layout/Layout";
import Users from "../pages/Users";
import UsersPage from "../pages/Users";

const AppRoutes = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <Layout>
    //           <Dashboard />
    //         </Layout>
    //       }
    //     />
    //     <Route
    //       path="/users"
    //       element={
    //         <Layout>
    //           <Users />
    //         </Layout>
    //       }
    //     />
    //     <Route path="*" element={<div>404 Not Found</div>} />
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes with layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/guarantors" element={<Profile />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          {/* Add other protected routes here */}
        </Route>

        {/* 404 route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
