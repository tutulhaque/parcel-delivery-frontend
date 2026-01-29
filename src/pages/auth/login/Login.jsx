import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
const Login = () => {
  const { register, handleSubmit } = useForm();
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
              {...register("password")}
              className="input w-full"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4 ">Login</button>
            {/* Google Button */}

            <div className="my-2">
              <button className="btn bg-[#fdebea] text-black w-full border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <p className="text-lg font-bold">
              Don't have any account?
              <Link to="/auth/register" className="text-[#68811b]">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
