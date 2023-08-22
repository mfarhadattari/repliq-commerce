import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Error from "../layouts/Error";
import Main from "../layouts/Main";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <>Home</>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <>Dashboard Home</>,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routers;
