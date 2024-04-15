import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
function Navbar() {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Courses</Link>
      </li>
      <li>
      
        <div className="dropdown dropdown-end relative">
          <div tabIndex={0} role="button" className="">Your Account</div>
          <ul className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 absolute top-full left-0">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/my-orders">My Orders</Link></li>
          </ul>
        </div>
      </li>

    
      <li>
        <Link>About</Link>
      </li>
    </>
  );
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? " sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out"
          : "bg-white"
      }`}
    >
      <div className="navbar">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-3xl font-bold cursor-pointer">bookStore</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block mr-5">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {authUser ? (
            <Logout />
          ) : (
            <div className="ml-5">
              <a
                className="bg-black text-white hover:bg-slate-800 duration-300 rounded-md px-3 py-2  cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
