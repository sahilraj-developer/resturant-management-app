import { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((prev) => ({
      ...prev,
      image: data,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        toast.error("Password and Confirm Password do not match");
      }
    } else {
      toast.error("Please fill out all required fields");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <img
            src={data.image || loginSignupImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <label htmlFor="profileImage" className="absolute bottom-0">
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={handleOnChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-blue-500"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={handleOnChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-blue-500"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="w-full outline-none"
                placeholder="Enter your password"
              />
              <span onClick={handleShowPassword} className="cursor-pointer text-xl text-gray-500">
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleOnChange}
                className="w-full outline-none"
                placeholder="Re-enter your password"
              />
              <span onClick={handleShowConfirmPassword} className="cursor-pointer text-xl text-gray-500">
                {showConfirmPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
