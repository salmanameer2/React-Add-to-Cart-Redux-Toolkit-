import React from "react";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("product added to cart :", product);
  };

  const rederStart = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-yellow-300"
        }`}
      />
    ));
  };
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
      <div className="relative overflow-hidden ">
        <img
          src={product.image}
          className="h-52 w-full object-cover transition-all duration-500 group-hover:scale-110 sm:h-60 lg:h-64"
          alt={product.name}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center">{rederStart(product.rating)}</div>
          <span className="text-sm text-gray-600">
            {product.rating}({product.reviews}reviews)
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-gray-900 sm:text-2xl">
            ${product.price.toFixed()}
          </span>
          <button
            className="group/btn flex items-center space-x-2 rounded-lg bg-gray-200 px-3 py-2 text-sm text-gray-900 transition-all duration-200 hover:scale-105 hover:shadow-lg sm:px-4 sm:text-base"
            onClick={handleAddToCart}
          >
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
