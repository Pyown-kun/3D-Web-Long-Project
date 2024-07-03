import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Root from "./Root";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-400" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-400" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-orange-400" : "text-white"
          }
        >
          Project
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
