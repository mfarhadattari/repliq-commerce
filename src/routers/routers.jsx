import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import ErrorPage from "../layouts/ErrorPage";
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
import PrivateRouter from "./PrivateRouter";

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
        element: (
          <PrivateRouter>
            <ProfilePage />
          </PrivateRouter>
        ),
      },
      //   USER ROUTE
      {
        path: "/carts",
        element: (
          <PrivateRouter>
            <CartsPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <CheckoutPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <OrdersPage />
          </PrivateRouter>
        ),
      },
    ],
  },
  //----------   Dashboard Route ------------
  {
    path: "/admin",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/admin",
        element: <h1>Admin Home</h1>,
      },
    ],
  },
  //   Error Route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routers;
