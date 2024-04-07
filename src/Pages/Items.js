import React, { useState, useEffect } from "react";
import Axios from "../utils/axois";
import { data } from "../data";
import ShoppingItems from "../components/products/ShoppingItems";
import Navbar from "../components/navbar/Navbar";

const Items = () => {
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");

  console.log(data);


    const getShoopingItems= async () => {
      try {
       

        const response = await Axios.get(
          "/api/items",
         
        );
        console.log("list",response.data);
        setItem(response.data);
        setError("");
      } catch (error) {
      }
    };
    useEffect(() => {
 
        getShoopingItems();


  }, []);

  return (
   <div>
    <Navbar/>
     <ShoppingItems item={data} />
    </div>

  );
};

export default Items;
