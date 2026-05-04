import { Minus, Plus, Trash } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQtyChange = (newQty) => {
    if (newQty <= 0) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div className="rounded-xl bg-gray-50 p-3 sm:p-4">
      <div className="flex items-start gap-3">
      <img src={item.image} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
        <p className="text-sm text-gray-600">${item.price}</p>
      </div>
      <button className="p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200 cursor-pointer" onClick={handleRemoveItem}>
        <Trash className="w-4 h-4" />
      </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          onClick={() => handleQtyChange(item.quantity - 1)}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          onClick={() => handleQtyChange(item.quantity + 1)}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center">
        <span className="font-bold text-gray-900">${item.price * item.quantity}</span>
      </div>
      </div>
    </div>
  );
}

export default CartItem;
