import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const { authUser, authLoading, setAuthUser, logout } =
    useContext(AuthContext);
  return { authUser, authLoading, setAuthUser, logout };
};

export default useAuth;
