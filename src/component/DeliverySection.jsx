import { useState } from "react";
import { deliveryProducts } from "../data/deliveryProducts";
import DeliveryDetailModal from "./DeliveryDetailModal";

export default function DeliverySection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-900 font-semibold text-xs uppercase tracking-widest mb-2">
            Delivery Products
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4CAF50] mb-4">
            Delivery We Products
          </h2>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Farmers use organic methods to grow clean crops, protect soil and
            water, avoid harmful chemicals, and support nature's balance for
            future generations and healthy living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliveryProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)} // ✅ card click
              className="cursor-pointer bg-[#F3F4F6] rounded-xl p-6 flex items-center gap-10 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200 group"
            >
              {/* Image */}
              <div className="w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="w-2/3 text-left">
                <span className="text-gray-900 text-xs font-bold mb-1 block">
                  {product.category}
                </span>

                <h3 className="text-lg font-bold text-[#4CAF50] leading-snug mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-gray-900 font-extrabold text-lg mb-4">
                  {product.price}
                </p>

                {/* ✅ make Shop Now clickable with the same behavior as ProductSection */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  className="bg-[#4CAF50] text-white text-xs font-bold py-2 px-6 rounded-md"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <DeliveryDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
}
