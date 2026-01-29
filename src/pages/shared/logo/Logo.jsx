import React from "react";
import MainLogo from "../../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Link to={`/`}>
        <img className="mb-3" src={MainLogo} alt="" />
      </Link>
      <Link to={`/`}>
        <p className="text-2xl font-extrabold">PostiFast</p>
      </Link>
    </div>
  );
};

export default Logo;
