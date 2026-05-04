import { CreditCard, ShoppingBag, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/cartSlice";

function CartSidebar({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const handleClearCart = () =>{
    dispatch(clearCart());
  };
    
   

  return (
    <>
      {/*backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />

      {/* sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/*header*/}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 sm:p-6">
          <h2 className="flex text-lg font-bold text-gray-900 sm:text-xl">
            <ShoppingBag className="w-6 h-6" />
            <span>Shopping Cart</span>
          </h2>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 "
            onClick={onClose}
          >
            <X className="w-6 h-6 " />
          </button>
        </div>

        {/*Cart Items*/}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className=" text-gray-500 text-lg mb-2">Your Cart Is Empty </p>
              <p className="text-gray-400 text-sm">
                Add Some Products to Get Started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>

        {/*Footer*/}
        {items.length > 0 &&
        <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-gray-900">
              ${totalPrice}
            </span>
          </div>
          <div className="space-y-3">
            <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-600 py-3 font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-700">
              <CreditCard className="w-5" />
              <span>Proceed To Transaction</span>
            </button>
            <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-200 py-3 font-medium text-gray-700 transition-all duration-200 hover:scale-[1.02]" onClick={handleClearCart}>
              <span>Clear Cart</span>
            </button>
          </div>
        </div>}
      </div>
    </>
  );
}

export default CartSidebar;
