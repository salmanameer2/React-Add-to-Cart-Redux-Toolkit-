import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

function Header({ onToggleCart }) {
  const selectTotalItems = (state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);
  

  const totalItems = useSelector(selectTotalItems);

  return (
    <div className="sticky top-0 z-40 border-b border-gray-200/50 bg-white/80 py-2 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2 sm:h-16 sm:py-0">
          <div className="flex items-center gap-1">
            <h2 className="text-2xl font-bold text-red-600 sm:text-3xl">E Cart</h2>
          </div>
          <button
            className="relative rounded-full bg-gray-200 p-2 text-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            onClick={onToggleCart}
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-700 px-1 text-xs font-semibold text-white sm:h-6 sm:min-w-6">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
