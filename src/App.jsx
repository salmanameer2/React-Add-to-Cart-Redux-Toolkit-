import React, { useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Header onToggleCart={toggleCart} />
        <main>
          <ProductGrid />
        </main>
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </Provider>
  );
}
export default App;
