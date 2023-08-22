import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  return { authUser, setAuthUser };
};

export default useAuth;
