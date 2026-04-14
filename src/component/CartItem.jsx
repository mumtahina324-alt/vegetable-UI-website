import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/index";

//test github

export default function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-4 rounded-xl">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img
          src={item.img || item.image}
          alt={item.name}
          className="w-16 h-16 object-contain bg-white rounded-lg p-2 shadow"
        />

        <div>
          <h3 className="font-semibold text-base">{item.name}</h3>

          <p className="text-sm text-gray-500">
            €{item.price} × {item.qty}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* QTY CONTROL */}
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}
            className="px-3 py-1 hover:bg-gray-200"
          >
            -
          </button>

          <span className="px-3 text-sm">{item.qty}</span>

          <button
            onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}
            className="px-3 py-1 hover:bg-gray-200"
          >
            +
          </button>
        </div>

        {/* PRICE */}
        <div className="w-20 text-right font-semibold text-[#AC0A0A]">
          €{(item.price * item.qty).toFixed(2)}
        </div>

        {/* REMOVE */}
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
          }
          className="text-gray-400 hover:text-red-500 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
