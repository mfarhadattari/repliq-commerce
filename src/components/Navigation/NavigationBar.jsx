import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavLink from "./NavLink";

const navOptions = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/products",
    name: "Products",
  },
  {
    path: "/carts",
    name: "Carts",
  },
  {
    path: "/admin",
    name: "Dashboard",
  },
];

const NavigationBar = () => {
  const { authUser, logout } = useAuth();

  return (
    <nav className="navbar p-5 md:px-20 bg-slate-950 text-white items-center sticky top-0 z-40">
      <div className="navbar-start">
        {/* --------- Mobile and Tab Navigation  --------------*/}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-3xl lg:hidden">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-950 rounded-box w-52"
          >
            {navOptions.map((option) => (
              <NavLink key={option.path} to={option.path}>
                {option.name}
              </NavLink>
            ))}
          </ul>
        </div>
        {/* ----------- Title ---------- */}
        <Link to="/" className="text-2xl md:text-3xl font-semibold uppercase">
          Repliq Commerce
        </Link>
      </div>
      {/* -------------------- Desktop Navbar --------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions.map((option) => (
            <NavLink key={option.path} to={option.path}>
              {option.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {!authUser && (
          <Link to="/login">
            <button className="btn btn-sm mt-3 w-fit">Login</button>
          </Link>
        )}

        {/* ----------------- Avatar ---------- */}
        {authUser && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {authUser?.avatar ? (
                  <img src={authUser?.avatar} />
                ) : (
                  <span className="text-4xl flex justify-center items-center w-full h-full">
                    <FaUserCircle></FaUserCircle>
                  </span>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] bg-slate-950 p-2 shadow rounded-box w-52"
            >
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <button className="btn btn-sm mt-3 w-fit" onClick={logout}>
                Log Out
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
