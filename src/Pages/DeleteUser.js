import React, { useState } from "react";
import axios from "axios";

const DeleteUser = () => {
  const handleDeleteUser = async () => {
    try {
      let token = localStorage.getItem("token")
     const response= await axios.delete(
        "https://interview-plus.onrender.com/api/delete-user",
        {
          headers: { "x-access-token": token },
        }
      );
      console.log(response);
  
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDeleteUser}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete User
      </button>
    
    </div>
  );
};

export default DeleteUser;
