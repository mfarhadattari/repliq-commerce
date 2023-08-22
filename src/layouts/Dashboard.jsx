import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>This Is Dashboard Layout</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
