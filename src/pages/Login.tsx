import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/shared/Logo";
import { googleIcon } from "../components/shared/Icons";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../redux/slices/accessSlice";
import { useRepository } from "../hooks/UseRepository";
type LoginForm = {
  email: string;
  password: string;
};
const Login = () => {
  const { repo, storage } = useRepository();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginForm>();
  const dispatch = useDispatch();

  const loginByEmail = async (data: LoginForm) => {
    const loginResponse = await repo.requestEmailLogin(data);
    if (loginResponse) {
      if ("accessToken" in loginResponse) {
        storage.setAccessToken(loginResponse.accessToken);
        dispatch(setAuthToken(loginResponse.accessToken));
        storage.setRefreshToken(loginResponse.refreshToken);
        navigate("/dashboard");
        toast.success("You are logged in successfully");
      } else {
        toast.error(loginResponse.message);
      }
    }
  };
  const handleLogin = (data: LoginForm) => {
    loginByEmail(data);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      const gt: GoogleLoginRequest = { access_token: response.access_token };
      const loginResponse = await repo.requestGoogleLogin(gt);
      if (loginResponse) {
        if ("accessToken" in loginResponse) {
          storage.setAccessToken(loginResponse.accessToken);
          dispatch(setAuthToken(loginResponse.accessToken));
          storage.setRefreshToken(loginResponse.refreshToken);
          navigate("/dashboard");
          toast.success("You are logged in successfully");
        } else {
          toast.error(loginResponse.message);
        }
      }
    },
    onError: () => {
      console.log("something went wrong");
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NavLink
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo logoTitle="Task Tracker" />
        </NavLink>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="mb-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Log in!
            </h1>
            <div className="text-center flex flex-col gap-3">
              <button
                onClick={() => googleLogin()}
                type="button"
                className="text-base border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg"
              >
                <span className="me-2 text-red-500">{googleIcon}</span> Sign in
                with Google
              </button>
              <span>Or</span>
              <hr />
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>

              <p className="text-center text-base font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <NavLink
                  to="/register"
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
