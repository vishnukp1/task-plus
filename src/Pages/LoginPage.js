
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/inputs/Input";
import Button from "../components/button/Button";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const userRef = useRef();
  const [error, setError] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
  
    const userData = {
      email: userRef.current.email.value,
      password: userRef.current.password.value,
    };
  
    try {
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/login",
        userData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      
      if (token) {
        navigate("/items");
      }
    } catch (error) {
      console.error("Login failed:", error.response);
      setError(error.response.data.message || "An error occurred while logging in.");
    }
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
          onSubmit={(e) => loginUser(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <div>
            <Input
                id="password"
                name="password"
                type="password"
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
          </div>
          {error && <p className="text-center mb-4">{error}</p>}
          <div>
            <Button type="submit">Sign in</Button>
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
