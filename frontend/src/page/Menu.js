// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import AllProduct from "../component/AllProduct";
// import { addCartItem } from "../redux/productSlide";

// const Menu = () => {
//   const { filterby } = useParams(); // use for get parameter from url
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.product.productList);

//   const productDisplay = productData.filter((el) => el._id === filterby)[0];
//   const handleAddCartProduct = (e) => {
//     dispatch(addCartItem(productDisplay));
//   };

//   const handleBuy = () => {
//     dispatch(addCartItem(productDisplay));
//     navigate("/cart");
//   };
//   return (
//     <div>
//       <div className="p-2 md:p-4">
//         <div className="w-full max-w-4xl m-auto md:flex bg-white">
//           <div className="max-w-sm  overflow-hidden w-full p-5">
//             <img
//               src={productDisplay?.image}
//               className="hover:scale-105 transition-all h-full"
//             />
//           </div>

//           <div className="flex flex-col gap-1">
//             <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
//               {productDisplay?.name}
//             </h3>
//             <p className=" text-slate-500  font-medium text-2xl">
//               {productDisplay?.category}
//             </p>
//             <p className=" font-bold md:text-2xl">
//               <span className="text-red-500 ">₹</span>
//               <span>{productDisplay?.price}</span>
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={handleBuy}
//                 className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//               >
//                 Buy
//               </button>
//               <button
//                 onClick={handleAddCartProduct}
//                 className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
//               >
//                 Add Cart
//               </button>
//             </div>
//             <div>
//               <p className="text-slate-600 font-medium">Description : </p>
//               <p>{productDisplay?.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AllProduct heading={"Related Product"} />
//     </div>
//   );
// };

// export default Menu;





import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";
import { FaStar } from "react-icons/fa"; // Added for review rating stars

const Menu = () => {
  const { filterby } = useParams(); // use for get parameter from url
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 min-h-screen font-sans">
      <div className="p-6 md:p-12">
        <div className="max-w-7xl mx-auto md:flex bg-white rounded-lg shadow-2xl p-6 md:p-8 space-y-6 md:space-y-0">
          {/* Product Image Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 relative">
            <img
              src={productDisplay?.image}
              alt={productDisplay?.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105"
            />
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 text-white rounded-tl-lg rounded-br-lg">
              <span className="text-xl font-semibold">New Arrival</span>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 space-y-6 md:pl-8">
            <h3 className="text-4xl font-semibold text-gray-800 capitalize">{productDisplay?.name}</h3>
            <p className="text-lg font-medium text-gray-600">
              Category: <span className="text-gray-800">{productDisplay?.category}</span>
            </p>
            <p className="text-3xl font-bold text-gray-800">
              <span className="text-red-500">₹</span>{productDisplay?.price}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleBuy}
                className="bg-yellow-500 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-yellow-600 focus:outline-none shadow-md hover:scale-105"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddCartProduct}
                className="bg-gray-800 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none shadow-md hover:scale-105"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Description */}
            <div>
              <p className="text-xl font-semibold text-gray-800 mb-2">Description</p>
              <p className="text-lg text-gray-600">{productDisplay?.description}</p>
            </div>

            {/* Additional Product Info */}
            <div className="mt-8 space-y-4">
              <p className="text-xl font-semibold text-gray-800 mb-2">Ingredients</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Fresh Tomato</li>
                <li>Organic Chicken</li>
                <li>Handmade Wheat Bread</li>
                <li>Organic Spices</li>
              </ul>
            </div>

            {/* Pre-order Section */}
            <div className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-gray-800 mb-4">Pre-order Now!</p>
              <p className="text-lg mb-4">Order this dish ahead of time for a 10% discount on your next meal!</p>
              <button className="bg-gray-800 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none">
                Pre-order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-gray-100 py-8">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>
    <div className="flex gap-6 flex-wrap">
      {/* Review Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg" // Dummy image URL
            alt="John Doe"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <p className="font-semibold text-gray-800">John Doe</p>
        </div>
        <p className="text-gray-600 mb-4">"An amazing dish! I can't get enough of it. The flavors are incredible!"</p>
        <div className="text-yellow-500 flex items-center">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </div>
      </div>

      {/* Review Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg" // Dummy image URL
            alt="Jane Smith"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <p className="font-semibold text-gray-800">Jane Smith</p>
        </div>
        <p className="text-gray-600 mb-4">"Great presentation and taste. The food was fresh, and delivery was fast!"</p>
        <div className="text-yellow-500 flex items-center">
          <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </div>
      </div>

      {/* Review Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg" // Dummy image URL
            alt="Alex Brown"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <p className="font-semibold text-gray-800">Alex Brown</p>
        </div>
        <p className="text-gray-600 mb-4">"A must-try for all food lovers! Absolutely delicious!"</p>
        <div className="text-yellow-500 flex items-center">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Related Products */}
      <div className="mt-12 px-4">
        <AllProduct heading="Related Products" />
      </div>
    </div>
  );
};

export default Menu;
