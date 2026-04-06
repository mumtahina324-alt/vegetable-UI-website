import { Star } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../context/index";
import { productsData } from "../data/productsData";
import VegetableDetailModal from "./VegetableDetailModel";

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("New Products");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  const tabs = [
    "New Products",
    "Special Products",
    "Best Seller",
    "Feature Products",
  ];

  // Filter products
  const filteredProducts = productsData.filter(
    (product) => product.category === activeTab,
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#4CAF50]">Products</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-12 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-semibold transition-all relative
              ${
                activeTab === tab
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-[#4CAF50]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4CAF50]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)} // ✅ card clickable
              className="cursor-pointer bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative bg-[#F3F4F6] rounded-xl p-6 mb-4 flex items-center justify-center aspect-square">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />

                {/* Discount */}
                <div className="absolute top-3 right-3 bg-[#4CAF50] text-white text-[10px] font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 hover:text-[#4CAF50] transition-colors line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-lg font-bold text-gray-900">
                  €{product.price}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-[#4CAF50]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <span className="text-gray-400 text-xs font-medium">
                    No Review
                  </span>
                </div>

                {/* 🔒 Shop Now (non-clickable) */}
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                  className="w-full mt-2 bg-[#4CAF50] text-white text-sm font-semibold py-2 rounded-lg"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <VegetableDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
}
