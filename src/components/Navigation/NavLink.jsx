import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const isActive = useLocation().pathname == to;

  return (
    <li className="text-lg list-none">
      <Link to={to} className={isActive ? "text-blue-700" : ""}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
