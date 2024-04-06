import { LockClosedIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useRef } from "react";

export default function RegisterPage() {
  const userRef = useRef();
  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      name: userRef.current.name.value,
      email: userRef.current.email.value,
      password: userRef.current.name.value,
    };
    
    try {
      const response = await axios.post(
        "/api/register",
        userData
      );
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
    } catch (error) {}
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <form
          ref={userRef}
          className="mt-8 space-y-6"
          onSubmit={(e) => handleRegister(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input
                id="email-address"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-b-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
