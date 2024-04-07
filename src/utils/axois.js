import axios from "axios";
const token = localStorage.getItem("token");
const Axios = axios.create({
  baseURL: "https://interview-plus.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": token,
  },
});

export default Axios;
