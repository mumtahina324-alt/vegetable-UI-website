import { useContext } from "react";
import { CartContext } from "../context/index";

export default function DeliveryDetailModal({ product, onClose }) {
  const { dispatch } = useContext(CartContext);
  if (!product) return null;

  const handleOrderNow = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* ✅ LEFT SIDE FIXED */}
          <div className="p-6 md:p-10 flex flex-col justify-center items-start text-left space-y-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              {product.category}
            </span>

            <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>

            <p className="text-2xl font-semibold text-[#4CAF50]">
              {product.price}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {product.description ||
                "Fast and reliable delivery service ensuring your fresh products reach you on time with the highest quality."}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 w-full">
              <button
                onClick={handleOrderNow}
                className="flex-1 bg-[#4CAF50] text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Order Now
              </button>

              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-8">
            <div className="bg-white p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
