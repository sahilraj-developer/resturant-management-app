import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link for navigation
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";
import { CiForkAndKnife } from "react-icons/ci";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  // Filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  const handleShowAllProducts = () => {
    setFilterBy("");
    setDataFilter(productData); // Reset the filter to show all products
  };

  const loadingArrayFeature = new Array(10).fill(null);
  console.log("categoryList", categoryList);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none mb-4">
  {/* "All" Button to reset the filter */}
  <button
    onClick={handleShowAllProducts}
    className="w-16 h-16 text-white bg-red-600
      rounded-full transition duration-200 flex items-center
      justify-center border-2 border-red-700 text-lg font-semibold"
  >
    <CiForkAndKnife />
    All
  </button>


  {/* Render category filters */}
  {categoryList[0] ? (
    categoryList.map((el) => {
      return (
        <FilterProduct
          category={el}
          key={el}
          isActive={el.toLowerCase() === filterby.toLowerCase()}
          onClick={() => handleFilterProduct(el)}
        />
      );
    })
  ) : (
    <div className="min-h-[150px] flex justify-center items-center">
      <p>Loading...</p>
    </div>
  )}
</div>


      <div className="flex flex-wrap justify-center gap-4 my-4">
        {/* Render filtered or all products */}
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                />
              );
            })
          : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
