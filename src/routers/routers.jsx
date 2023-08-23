import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import ErrorPage from "../layouts/ErrorPage";
import Main from "../layouts/Main";
import LoginPage from "../pages/account/LoginPage";
import ProfilePage from "../pages/account/ProfilePage";
import RegisterPage from "../pages/account/RegisterPage";
import AdminHome from "../pages/admin/AdminHome/AdminHomePage";
import AddCustomerPage from "../pages/admin/Customers/AddCustomerPage";
import CustomerDetailsPage from "../pages/admin/Customers/CustomerDetailsPage";
import CustomersPage from "../pages/admin/Customers/CustomersPage";
import AdminOrdersPage from "../pages/admin/Orders/AdminOrdersPage";
import OrdersDetailsPage from "../pages/admin/Orders/OrdersDetailsPage";
import AddProductPage from "../pages/admin/Products/AddProductPage";
import AdminProductsPage from "../pages/admin/Products/AdminProductsPage";
import UpdateProductPage from "../pages/admin/Products/UpdateProductPage";
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
  //----------   Admin Route ------------
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
        element: <AdminHome />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "add-customer",
        element: <AddCustomerPage />,
      },
      {
        path: "customers/:id",
        element: <CustomerDetailsPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "add-product",
        element: <AddProductPage />,
      },
      {
        path: "products/:id",
        element: <UpdateProductPage />,
      },
      {
        path: "orders",
        element: <AdminOrdersPage />,
      },
      {
        path: "orders/:id",
        element: <OrdersDetailsPage />,
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
