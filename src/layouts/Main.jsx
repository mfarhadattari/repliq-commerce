import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navigation/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Main;
