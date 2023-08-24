import axios from "axios";

const serverReq = axios.create({
  baseURL: "https://api-repliq-commerce.vercel.app",
});
const useServer = () => {
  return { serverReq };
};

export default useServer;
