import { useContext } from "react";
import { CartContext } from "../context/index";
import CartItem from "./CartItem";

//test github

export default function Cart({ onClose }) {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4">
        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-h-[90vh] overflow-hidden flex flex-col">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold"> Your Cart</h2>
          </div>

          {/* ITEMS */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {cart.length > 0 ? (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div className="flex items-center justify-center h-40">
                <p className="text-gray-500 text-lg">Your cart is empty </p>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-xl font-bold text-[#AC0A0A]">
                €{total.toFixed(2)}
              </span>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-[#F39C12] hover:bg-[#d68910] text-white py-3 rounded-xl font-semibold transition">
                Checkout
              </button>

              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
