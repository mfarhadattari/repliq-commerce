import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import NavLink from "../components/Navigation/NavLink";
import NavigationBar from "../components/Navigation/NavigationBar";

const options = [
  {
    path: "/admin",
    name: "Admin Home",
  },
  {
    path: "/admin/customers",
    name: "Customers",
  },
  {
    path: "/admin/add-customer",
    name: "Add Customer",
  },
  {
    path: "/admin/products",
    name: "Products",
  },
  {
    path: "/admin/add-product",
    name: "Add Product",
  },
  {
    path: "/admin/orders",
    name: "Orders",
  },
];

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <div className="h-full w-full flex max-w-7xl mx-auto">
        <div className="w-1/4 hidden lg:block">
          <ul className="menu px-1 fixed">
            {options.map((option) => (
              <NavLink key={option.path} to={option.path}>
                {option.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-3/4 relative">
          <ul
            className={`menu bg-white fixed lg:hidden border rounded-lg w-[200px]  z-40 ${
              isOpen ? "top-28 right-3" : "hidden"
            }`}
          >
            {options.map((option) => (
              <NavLink key={option.path} to={option.path}>
                {option.name}
              </NavLink>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden fixed top-28 right-3 text-3xl btn btn-circle z-50"
          >
            <span>{isOpen ? <FaXmark /> : <FaBars />}</span>
          </button>
          <div className="mt-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
