import { useRef, useState } from "react";
import Axios from "../utils/axois";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const navigate = useNavigate();
  const userRef = useRef();
  const [error, setError] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: userRef.current.name.value,
      password: userRef.current.name.value,
    };
    try {
      const response = await Axios.put("/api/update-user", userData);
      console.log(response);
    } catch (error) {
      setError("Email or password are invalid");
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await Axios.delete(
        "https://interview-plus.onrender.com/api/delete-user"
      );
      console.log(response);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Update user details
        </h2>
        <form
          ref={userRef}
          className="mt-8 space-y-6"
          onSubmit={(e) => loginSubmit(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="name"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                placeholder="Enter new name"
              />
            </div>
            <div>
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
                placeholder="Enter new Password"
              />
            </div>
          </div>

          {error && <p className="text-center mb-4">{error}</p>}
          <div>
            <button
              type="submit"
              className="group mb-5 relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
            <button
              onClick={handleDeleteUser}
              className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Delete
            </button>
          </div>
        </form>

        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <div
            className="text-red-600 hover:underline hover:underline-offset-4"
            onClick={() => navigate("/")}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
}
