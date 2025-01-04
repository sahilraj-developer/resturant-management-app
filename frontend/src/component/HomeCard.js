import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl p-4 flex flex-col items-center w-[200px] sm:w-[280px] md:w-[300px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            className="w-full"
          >
            <div className="w-full h-32 sm:h-36 md:h-40 mb-4 flex justify-center items-center">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-md"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-sm sm:text-md mb-2 line-clamp-1">
              {name}
            </h3>
            <p className="text-center text-slate-500 font-medium mb-2">{category}</p>
            <p className="text-center font-bold text-sm sm:text-md">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-lg text-gray-500">{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
