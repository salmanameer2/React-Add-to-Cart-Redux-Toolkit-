import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../src/data/products";


function ProductGrid() {

  
 
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
            Featured Products
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base lg:text-lg">
            Discover Our Wide Range Of Products To Enhance your LifeStyle.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
