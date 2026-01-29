// AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import authRightImg from "../assets/authImage.png";
import Logo from "../pages/shared/logo/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo */}
      <Logo />

      {/* Main Content */}
      <div className="flex bg-white flex-1 w-full rounded-4xl">
        {/* Left Column - Form */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 bg-[#FAFDF0] flex items-center justify-center rounded-4xl">
          <img
            src={authRightImg}
            alt="Auth Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
