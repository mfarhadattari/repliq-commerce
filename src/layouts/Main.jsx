import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/Navigation/NavigationBar";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between font-primary">
      <div>
        <NavigationBar />
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
