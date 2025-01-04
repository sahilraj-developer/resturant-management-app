import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.jpg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import SweetAlert from "sweetalert2";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // const handleLogout = () => {
  //   dispatch(logoutRedux());
  //   toast("Logout successfully");
  // };

  const handleLogout = () => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutRedux());
        toast.success("Logout successfully");
      }
    });
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="fixed shadow-lg w-full h-16 px-4 z-50 bg-white">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between max-w-screen-xl mx-auto">
        <Link to={""} className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="rounded-full h-12 md:h-16" />
          <h2 className="text-2xl font-semibold text-red-600 hidden md:block">
            Chana Choor
          </h2>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-lg font-medium">
            <Link to={""} className="hover:text-red-600 transition-all">
              Home
            </Link>
            <Link
              to={"menu/646b5548acd0a88a674b9429"}
              className="hover:text-red-600 transition-all"
            >
              Menu
            </Link>
            <Link to={"about"} className="hover:text-red-600 transition-all">
              About
            </Link>
            <Link
              to={"contact"}
              className="hover:text-red-600 transition-all"
            >
              Contact
            </Link>
          </nav>

          <div className="relative text-2xl text-slate-600">
            <Link to={"cart"} className="relative">
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-5 w-5 rounded-full text-xs flex items-center justify-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>

          <div className="relative" onClick={handleShowMenu}>
            <div className="cursor-pointer w-8 h-8 rounded-full overflow-hidden shadow-md">
              {userData.image ? (
                <img src={userData.image} className="w-full h-full" alt="User" />
              ) : (
                <HiOutlineUserCircle className="text-3xl text-gray-600" />
              )}
            </div>

            {showMenu && (
              <div className="absolute right-0 bg-white py-2 shadow-md flex flex-col min-w-[120px] text-center border border-gray-300 rounded-md">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    New product
                  </Link>
                )}

{userData.firstName ? (
  <>

                     <button
                    className="cursor-pointer text-white px-4 py-2 text-black"
                    onClick={handleLogout}
                  >
                    Profile
                  </button>
 
                  <button
                    className="cursor-pointer text-white px-4 py-2 bg-red-500 hover:bg-red-600 flex "
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </button>
                  </>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link
                    to={""}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Home
                  </Link>
                  <Link
                    to={"menu/646b5548acd0a88a674b9429"}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Menu
                  </Link>
                  <Link
                    to={"about"}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    About
                  </Link>
                  <Link
                    to={"contact"}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
    </header>
  );
};

export default Header;
