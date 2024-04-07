import { useRef, useState } from "react";
import Axios from "../utils/axoisAuth";
import Input from "../components/inputs/Input";



export default function UpdateUser() {

  const userRef = useRef();
  const [error, setError] = useState("");

  //------------- updating user details like name and password---------------

  const updateSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: userRef.current.name.value,
      password: userRef.current.password.value,
    };
    try {
      const response = await Axios.put("/api/update-user", userData);
      console.log(response);
    } catch (error) {
      setError("error ocurred:",error);
    }
  };

  //------------- delect user account ---------------

  const delectUser = async () => {
    try {
      const response = await Axios.delete(
        "api/delete-user"
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
          Update user delection
        </h2>
        <form
          ref={userRef}
          className="mt-8 space-y-6"
          onSubmit={(e) => updateSubmit(e)}
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
                id="password"
                name="password"
                type="password"
                placeholder="Password"
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
            Update name and password
            </button>
            <button
              onClick={delectUser}
              className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Delete account
            </button>
          </div>
        </form>

        
   
      </div>
    </div>
  );
}
