import axios from "axios";
const baseURL = "http://be.aarggvtech.com/api/v1/";
// const baseURL = process.env.REACT_APP_BASE_BACKEND_API_URL
const axiosInstance = axios.create({
  baseURL,
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
