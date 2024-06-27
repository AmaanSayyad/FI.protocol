import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import UserDashBoard from "./pages/UserDashboard";
import toast, { Toaster } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import FeedBackForm from "./pages/FeedBackForm";
import RegisterUser from "./pages/RegisterPage";
import CompanyDashboard from "./pages/CompanyDashboard";
import ReclaimVerification from "./pages/ReclaimVerification";

const App = () => {

 


  return (
    <>
      <Toaster
        position="top-right"
      />
      {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50vh" }}>
      {!url && (
        <button onClick={generateVerificationRequest}>
          Create Claim QrCode
        </button>
      )}
      {url && (
        <QRCode value={url} />
      )}
    </div> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/user-dashboard" element={<UserDashBoard />} />
        <Route exact path="/feedback-form" element={<FeedBackForm />} />
        <Route exact path="/reclaim-verification" element={<ReclaimVerification />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/company-dashboard" element={<CompanyDashboard />} />
      </Routes>
    </>
  );
};

export default App;
