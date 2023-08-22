import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Error from "../layouts/Error";
import Main from "../layouts/Main";

const routers = createBrowserRouter([
  //---------------- Main Route -----------
  {
    path: "/",
    element: <Main />,
    children: [
      // PUBLIC ROUTE
      {
        path: "/",
        element: <>Home</>,
      },
      {
        path: "/products",
        element: <>Products Page</>,
      },
      {
        path: "/products/:id",
        element: <>Product Details Page Page</>,
      },
      //   ACCOUNT ROUTE
      {
        path: "/login",
        element: <>Login Page</>,
      },
      {
        path: "/register",
        element: <>Register Page</>,
      },
      {
        path: "/profile",
        element: <>Profile Page</>,
      },
      //   USER ROUTE
      {
        path: "/carts",
        element: <>Cart Page</>,
      },
      {
        path: "/checkout",
        element: <>Checkout Page</>,
      },
      {
        path: "/orders",
        element: <>Orders Page</>,
      },
    ],
  },
  //----------   Dashboard Route ------------
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
  //   Error Route
  {
    path: "*",
    element: <Error />,
  },
]);

export default routers;
