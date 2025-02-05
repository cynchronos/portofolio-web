import axios from "axios";

const apiUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.33:3000",
});

apiUrl.defaults.timeout = 10000;  

export default apiUrl;