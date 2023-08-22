import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>This is Main Layout</h1>
      <Outlet />
    </div>
  );
};

export default Main;
