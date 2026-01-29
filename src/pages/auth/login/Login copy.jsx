import React from "react";
import loginImg from "../../../assets/authImage.png";
const Login = () => {
  return (
    <div className="bg-base-200 min-h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-8">
        {/* Login Content */}
        <div className="flex-1">
          <div className="">
            <form className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 ">Login</button>
            </form>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 mx-auto bg-[#FAFDF0]">
          <img src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
