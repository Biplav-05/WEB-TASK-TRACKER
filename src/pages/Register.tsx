import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Logo from "../components/shared/Logo";
import { googleIcon } from "../components/shared/Icons";
type RegisterFormType = {
  cPassword: string;
  email: string;
  password: string;
};

const registerUser = async (data: FormData) => {
  console.log("at last");
  for (const [key, value] of data) {
    console.log(`${key}: ${value}\n`);
  }
  const response = await fetch("http://localhost:8000/api/v1/users/register", {
    method: "POST",
    body: data,
  });
  if (response && "data" in response) {
    toast.success("user is register successfully");
  } else {
    toast.error("Failed to registration.");
  }
};
const Registration = () => {
  const { register, handleSubmit } = useForm<RegisterFormType>();
  const [error, setError] = useState<string>("");
  const onFormSubmit = (data: RegisterFormType) => {
    console.log(data);
    if (data.password === data.cPassword) {
      setError("Password did not match");
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      registerUser(formData);
      //   reset();
    }
  };

  return (
    <section className="bg-gray-200 py-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0 ">
        <NavLink
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo logoTitle="Task Tracker" />
        </NavLink>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-8">
              Create an account
            </h1>
            <div className="text-center flex flex-col gap-3">
              <button
                type="button"
                className="text-base border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg"
              >
                <span className="me-2 text-red-500">{googleIcon}</span> Continue
                with Google
              </button>
              <span>Or</span>
              <hr />
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onFormSubmit)}
            >
              <h1>{error ? error : ""}</h1>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  {...register("cPassword")}
                  type="password"
                  name="cPassword"
                  id="cPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-base text-center font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <NavLink
                  to="/login"
                  className="ms-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
