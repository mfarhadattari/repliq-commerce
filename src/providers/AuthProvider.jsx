import { createContext, useEffect, useState } from "react";
import successAlert from "../components/Message/successAlert";
import useServerSecure from "../hooks/useServerSecure";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // auth state
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const { secureReq } = useServerSecure();

  // ! --------- LOGGED USER -------------
  const logout = () => {
    localStorage.removeItem("RepliqCommerceToken");
    setAuthUser(null);
    setAuthLoading(false);
    successAlert("Successfully Logout!");
  };

  // ! ----- GET LOGGED USER ----------
  useEffect(() => {
    secureReq("/auth/user").then(({ data }) => {
      if (data.user) {
        setAuthUser(data.user);
        setAuthLoading(false);
      } else {
        setAuthUser(null);
        setAuthLoading(false);
      }
    });
  }, [secureReq]);

  //! ------  AUTH VALUE ----
  const authValue = {
    authUser,
    authLoading,
    setAuthUser,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
