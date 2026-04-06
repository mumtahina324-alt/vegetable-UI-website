import { Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/index";

export default function VegetableDetailModal({ product, onClose }) {
  const { dispatch } = useContext(CartContext);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="p-4 md:p-12 flex flex-col justify-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>

            <p className="text-2xl font-semibold text-[#4CAF50]">
              €{product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#4CAF50]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">No reviews yet</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {product.description ||
                "Fresh organic vegetable sourced directly from farms. Healthy and natural."}
            </p>

            {/* ✅ FIXED BUTTONS */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: product });
                  onClose();
                }}
                className="flex-1 bg-[#4CAF50] text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className=" flex items-center justify-center p-8">
            <img
              src={product.img}
              alt={product.name}
              className="w-3/4 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
