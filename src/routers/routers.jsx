import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Error from "../layouts/Error";
import Main from "../layouts/Main";
import LoginPage from "../pages/account/LoginPage";
import ProfilePage from "../pages/account/ProfilePage";
import RegisterPage from "../pages/account/RegisterPage";
import HomePage from "../pages/public/Home/HomePage";
import ProductDetailsPage from "../pages/public/ProductDetails/ProductDetailsPage";
import ProductsPage from "../pages/public/Products/ProductsPage";
import CartsPage from "../pages/user/CartsPage";
import CheckoutPage from "../pages/user/CheckoutPage";
import OrdersPage from "../pages/user/OrdersPage";
import UserHomePage from "../pages/user/UserHomePage";

const routers = createBrowserRouter([
  //---------------- Main Route -----------
  {
    path: "/",
    element: <Main />,
    children: [
      // PUBLIC ROUTE
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      //   ACCOUNT ROUTE
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      //   USER ROUTE
      {
        path: "/carts",
        element: <CartsPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
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
        element: <UserHomePage />,
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
