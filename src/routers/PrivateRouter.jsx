import { Navigate, useLocation } from "react-router-dom";
import Loaders from "../components/common/Loaders";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { authUser, authLoading } = useAuth();
  const location = useLocation();
  if (authLoading && !authUser) {
    return <Loaders />;
  }
  if (authUser) {
    return children;
  } else {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
};

export default PrivateRouter;
