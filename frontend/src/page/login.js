import { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      toast.success(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      toast.error("Please enter all required fields!");
    }
  };

  return (
    <div className="p-4 md:p-6 flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
        <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full shadow-md animate-bounce">
          <img
            src={loginSignupImage}
            alt="Login Animation"
            className="w-full h-full object-cover"
          />
        </div>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Enter your email"
          />

          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
              placeholder="Enter your password"
            />
            <span
              className="text-xl text-gray-600 cursor-pointer hover:text-purple-500 transition"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-md">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to={"/singup"} className="text-purple-500 font-medium underline">
            Sign up
          </Link>

          {/* <Link to={"/singup"} className="text-red-500 underline">
            Sing up
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
