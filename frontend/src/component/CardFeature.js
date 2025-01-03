import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlide";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-xs bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out py-5 px-4 cursor-pointer flex flex-col rounded-lg overflow-hidden">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-48 flex justify-center items-center mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mb-2 line-clamp-1">
              {name}
            </h3>
            <p className="text-slate-500 font-medium mb-2">{category}</p>
            <p className="font-bold text-xl">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
          <button
            className="bg-yellow-500 py-2 mt-4 rounded-lg hover:bg-yellow-600 w-full text-white font-semibold transition-colors duration-300 ease-in-out"
            onClick={handleAddCartProduct}
          >
            Add to Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p className="text-lg text-gray-500">{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
