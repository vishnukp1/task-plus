import React, { useState, useEffect } from "react";
import Axios from "../utils/axois";

const ProfilePage = ({token}) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
       

        const response = await Axios.get(
          "/api/items",
          {
            headers: { "x-access-token": token },
          }
        );
        console.log("list",response);
        setItems(response.data);
        setError("");
      } catch (error) {
        setError("Failed to fetch items. Please log in again.");
      }
    };

    if (token) {
      fetchItems();
    }

  }, [token]);

  return (
    <div className="p-4">
        jhjhgjhg
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {items.map((item) => (
        <div key={item.id} className="bg-gray-200 p-4 my-2 rounded">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
