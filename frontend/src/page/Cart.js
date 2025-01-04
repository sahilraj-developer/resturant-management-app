import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      // let token = localStorage.getItem("user")
      let token = '44309|cXgz2QNdisdYsXfHfqrLhhjl65VSsbiY26ORanVvab13b78d'
      console.log("token",token)
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: JSON.stringify(productCartItem),
        }
      );
      if (res.statusCode === 500) return;

      const data = await res.json();
      toast("Redirecting to payment gateway...");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast.error("Please log in to proceed!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
        Your Shopping Cart
      </h2>

      {productCartItem.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Cart Items</h3>
            <div className="space-y-4">
              {productCartItem.map((el) => (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h3>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <p className="text-gray-600">Total Items:</p>
                <p className="font-bold">{totalQty}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Total Price:</p>
                <p className="font-bold">
                  <span className="text-red-500">₹</span> {totalPrice}
                </p>
              </div>
            </div>
            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-12">
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="w-full max-w-sm"
          />
          <p className="text-gray-600 text-2xl font-bold mt-4">
            Your cart is empty.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
