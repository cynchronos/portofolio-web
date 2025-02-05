import axios from "axios";

const apiUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV,
});

apiUrl.defaults.timeout = 10000;  

export default apiUrl;