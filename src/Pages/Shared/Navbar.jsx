
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="text-white font-medium mr-2">
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-teal-400 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-white font-medium mr-2">
        {" "}
        <NavLink
          to="/addBlog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-teal-400 text-white" : ""
          }
        >
         Add Blog
        </NavLink>
      </li>
      <li className="text-white font-medium mr-2">
        {" "}
        <NavLink
          to="/allBlogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-teal-400 text-white" : ""
          }
        >
          All Blogs
        </NavLink>
      </li>
      <li className="text-white font-medium mr-2">
        {" "}
        <NavLink
          to="/featuredBlogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-teal-400 text-white" : ""
          }
        >
          Featured Blogs
        </NavLink>
      </li>
      <li className="text-white font-medium ">
        {" "}
        <NavLink
          to="/wishlist"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-teal-400 text-white" : ""
          }
        >
          Wishlist
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-slate-800">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow 
               rounded-box w-36 bg-slate-800"
            >
              {navLinks}
            </ul>
          </div>
          <div className=" ">
            <img src="/public/assets/logo.png" className="h-28" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>


        <div className="navbar-end">
          {user?.email ? (
            <div>
            <div className="hidden md:block">
            <div className=" flex gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL? user.photoURL : `/public/assets/user.webp`} alt={user.displayName} />
                  </div>
                </label>
                <ul className="flex items-center gap-2">
                  <li>
                    <p className="text-xl text-white font-semibold">{user.displayName}</p>
                  </li>
                  <li>
                    <button
                      className="btn bg-slate-800 border-2 border-teal-400 text-white"
                      onClick={logOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>

              <div className="md:hidden ">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL? user.photoURL : `/public/assets/user.webp`} alt={user.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-slate-800 rounded-box"
                >
                  <li>
                  <p className="text-sm text-white font-semibold">{user.displayName}</p>
                  </li>
                  <li>
                  <button
                      className="btn bg-slate-800 border-2 border-teal-400  w-2/3 mx-auto pt-3 text-white"
                      onClick={logOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
              </div>

            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-slate-800 border-2 border-teal-400 text-white ">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
