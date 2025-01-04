import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // const homeProductCartList = productData.slice(20, 25);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };


  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">


      <div className="md:w-1/2">
  <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
    <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
    <img
      src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
      className="h-7"
    />
  </div>
  <h2 className="text-4xl md:text-7xl font-bold py-3">
    The Fastest Delivery in{" "}
    <span className="text-red-600">Your Home</span>
  </h2>
  <p className="py-3 text-base">
    Seamless Online Experience: Our user-friendly platform is designed to enhance your shopping experience. With easy navigation, detailed product descriptions, and secure payment options, we aim to make your ordering process hassle-free and enjoyable.
  </p>
  
  <p className="text-base py-3 text-gray-700">
    We pride ourselves on providing the fastest and most reliable delivery service, ensuring that your products reach you quickly and safely. Our delivery network is designed to meet your needs, whether you're ordering for your home or your business. Our team is dedicated to offering top-notch customer service every step of the way.
  </p>
  
  <h3 className="font-semibold text-xl py-2">Why Choose Us?</h3>
  <ul className="list-disc pl-5 space-y-2 text-gray-700">
    <li>Fast delivery times, often within the same day</li>
    <li>Secure and easy payment options</li>
    <li>Professional and reliable delivery staff</li>
    <li>Tracking options available for all deliveries</li>
    <li>Customer support available 24/7 for any inquiries</li>
  </ul>

  
  <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md mt-4">
    Order Now
  </button>
  
  <div className="mt-5">
    <button className="text-sm text-red-600 font-semibold hover:underline">
      Learn More About Our Delivery Process
    </button>
  </div>
</div>

  
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>
  
      {/* Fresh Vegetables Section */}
      <div>
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables?.length > 0
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
  
{/* Popular Categories Section */}
<div className="py-8">
  <h2 className="font-bold text-2xl text-slate-800 mb-4">Popular Categories</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    <div className="bg-red-100 p-6 rounded-lg shadow-lg text-center hover:bg-red-200 transition-all transform hover:scale-105">
      <img
        src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fruits"
        className="mx-auto mb-4 rounded-md w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-bold text-red-600">Fruits</h3>
      <p className="text-sm text-gray-600">Fresh and Organic</p>
      <p className="text-sm text-gray-500 mt-2">Choose from a wide variety of juicy, sweet fruits grown naturally.</p>
    </div>
    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center hover:bg-yellow-200 transition-all transform hover:scale-105">
      <img
        src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Vegetables"
        className="mx-auto mb-4 rounded-md w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-bold text-yellow-600">Vegetables</h3>
      <p className="text-sm text-gray-600">Organic and Healthy</p>
      <p className="text-sm text-gray-500 mt-2">Packed with essential nutrients, our vegetables are grown naturally.</p>
    </div>
    <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center hover:bg-green-200 transition-all transform hover:scale-105">
      <img
        src="https://plus.unsplash.com/premium_photo-1694704422665-9c40b54beb3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Dairy"
        className="mx-auto mb-4 rounded-md w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-bold text-green-600">Dairy</h3>
      <p className="text-sm text-gray-600">Fresh and Quality Dairy</p>
      <p className="text-sm text-gray-500 mt-2">From milk to cheese, our dairy products are rich in flavor and freshness.</p>
    </div>
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center hover:bg-blue-200 transition-all transform hover:scale-105">
      <img
        src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Snacks"
        className="mx-auto mb-4 rounded-md w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-bold text-blue-600">Snacks</h3>
      <p className="text-sm text-gray-600">Tasty and Crunchy</p>
      <p className="text-sm text-gray-500 mt-2">Satisfy your cravings with a variety of tasty snacks, perfect for any occasion.</p>
    </div>
  </div>
</div>


{/* Featured Offers Section */}
{/* Featured Offers Section */}
<div className="py-8">
  <h2 className="font-bold text-2xl text-slate-800 mb-4">Featured Offers</h2>
  <div className="flex gap-6">
    <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center w-1/2 sm:w-1/4 lg:w-1/4 hover:bg-pink-200 transition-all transform hover:scale-105">
      <img
        src="https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Offer 1"
        className="mx-auto mb-4 rounded-md w-full h-64 object-cover"
      />
      <h3 className="text-xl font-bold text-pink-600">Buy 1 Get 1 Free</h3>
      <p className="text-sm text-gray-600">On Selected Items</p>
      <p className="text-sm text-gray-500 mt-2">Double your shopping with our Buy 1 Get 1 free deal on selected items. Limited time offer!</p>
      <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-all">
        Shop Now
      </button>
    </div>
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center w-1/2 sm:w-1/4 lg:w-1/4 hover:bg-blue-200 transition-all transform hover:scale-105">
      <img
        src="https://media.istockphoto.com/id/2154533228/vector/40-percent-off-red-banner-design-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=HxeDC6w1eYNX9krImEMkzEFuFIFx-1eH6OxTpXZmRjg="
        alt="Offer 2"
        className="mx-auto mb-4 rounded-md w-full h-64 object-cover"
      />
      <h3 className="text-xl font-bold text-blue-600">20% Off on Orders</h3>
      <p className="text-sm text-gray-600">Use Code: SAVE20</p>
      <p className="text-sm text-gray-500 mt-2">Save big on all orders with code SAVE20. Shop more, save more!</p>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
        Shop Now
      </button>
    </div>
  </div>
</div>



  
      {/* All Product Section */}
      <AllProduct heading={"Your Product"} />
    </div>
  );
  
};

export default Home;
