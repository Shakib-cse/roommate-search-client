
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";

const Header = () => {
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();

  const logoutBtn = () => {
    logout()
      .then(() => {
        alert("logout successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const links = (
    <ul className="p-2 lg:flex justify-center items-center gap-1">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addtofindroommate">Add to Find Roommate</Link>
      </li>
      <li>
        <Link to="/browselisting">Browse Listing</Link>
      </li>
      <li>
        <Link to="/mylisting">My Listing</Link>
      </li>
    </ul>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Roommat Search</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2"><ThemeToggle /></div>
        {user ? (
          <a onClick={logoutBtn} className="btn">
            Logout
          </a>
        ) : (
          <><Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/registration" className="btn ml-1">
            Register
          </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
