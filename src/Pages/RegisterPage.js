
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/inputs/Input";
import Button from "../components/button/Button";

export default function RegisterPage() {
  const navigate = useNavigate();
  const userRef = useRef();
  const [error, setError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const userData = {
      name: userRef.current.name.value,
      email: userRef.current.email.value,
      password: userRef.current.name.value,
    };

    try {
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/register",
        userData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      if (token) {
        navigate("/items");
      }
    } catch (error) {
      setError("Enter valid email and details");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <form
          ref={userRef}
          className="mt-8 space-y-6"
          onSubmit={(e) => registerUser(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name"
              />
            </div>
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

          <div>
            {error && <p className="text-center mb-4">{error}</p>}
            <Button type="submit">Register</Button>
          </div>
        </form>
        <div className="mt-4 font-semibold  text-sm text-slate-500 text-center md:text-left">
          Already registered?{" "}
          <div
            className="text-red-600 hover:underline hover:underline-offset-4"
            onClick={() => navigate("/login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
