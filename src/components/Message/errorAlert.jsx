import { toast } from "react-hot-toast";

const errorAlert = (message) => {
  toast.error(message);
};

export default errorAlert;
