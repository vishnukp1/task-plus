import axios from 'axios';

const Axios = axios.create({
  baseURL: "https://interview-plus.onrender.com",
  headers: {
    "Content-Type": "application/json",
   
      }
});

export default Axios;