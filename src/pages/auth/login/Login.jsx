import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* Login Content */}
      <div className="flex-1 px-6">
        <div className="">
          <h1 className="text-6xl font-black py-2">Welcome Back</h1>
          <p className="py-4">Login with Profast</p>
          <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            <button className="btn btn-neutral mt-4 ">Login</button>

            <p className="text-lg font-bold">
              Don't have any account?
              <Link to="/auth/register" className="text-[#68811b]">
                Register
              </Link>
            </p>
          </form>
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
