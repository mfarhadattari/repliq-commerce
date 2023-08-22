import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // auth state
  const [authUser, setAuthUser] = useState(null);
  console.log(authUser);

  //   auth value
  const authValue = {
    authUser,
    setAuthUser,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
