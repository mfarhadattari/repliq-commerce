import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const isActive = useLocation().pathname == to;

  return (
    <li className="text-lg list-none font-medium">
      <Link
        to={to}
        className={isActive ? "border-b-4 border-blue-600 rounded-none" : ""}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
