import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const { ceateUserEmailAndPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    ceateUserEmailAndPassword(email, password)
      .then((userData) => {
        console.log(userData);
      })
      .then((error) => {
        console.log(error.code);
      });
  };

  return (
    <>
      {/* Register Content */}
      <div className="flex-1 px-6">
        <div className="">
          <h1 className="text-6xl font-black py-2">Create an Account</h1>
          <p className="py-4">Register with Profast</p>
          <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              {...register("name", { required: true })}
              placeholder="name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name field is required</p>
            )}
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email field is required</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password field is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Length should be 8 Cahracters</p>
            )}

            <button className="btn btn-neutral mt-4 ">Register</button>
          </form>
          <SocialLogin />
          <p className="text-lg font-bold">
            Already have any account?
            <Link to="/auth/login" className="text-[#68811b]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
