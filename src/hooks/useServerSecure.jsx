import axios from "axios";
import { useEffect } from "react";

const secureReq = axios.create({
  baseURL: "https://api-repliq-commerce.vercel.app",
});

const useServerSecure = () => {
  useEffect(() => {
    secureReq.interceptors.request.use((req) => {
      const token = localStorage.getItem("RepliqCommerceToken");
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    secureReq.interceptors.response.use(
      (res) => res,
      async (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  return { secureReq };
};

export default useServerSecure;
