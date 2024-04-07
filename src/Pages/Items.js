import React, { useState, useEffect } from "react";
import Axios from "../utils/axoisAuth";
import ShoppingItems from "../components/products/ShoppingItems";
import Navbar from "../components/navbar/Navbar";

const Items = () => {
  const [item, setItem] = useState([]);
  const getShoopingItems = async () => {
    try {
      const response = await Axios.get("/api/items");
      
      setItem(response.data);

    } catch (error) {
    console.error("error occured:", error);
    }
  };
  useEffect(() => {
    getShoopingItems();
  }, []);

  return (
    <div>
      <Navbar />
      <ShoppingItems item={item} />
    </div>
  );
};

export default Items;
