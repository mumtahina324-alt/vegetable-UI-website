import { Star } from "lucide-react";
import { reviewsData } from "../data/reviewsData";

export default function CustomerSection() {
  return (
    <section className="py-20 bg-[#EEEEF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer <span className="text-[#4CAF50]">Reviews</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[#EEEEF0]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
                {item.name}
              </h3>

              {/* Review Text */}
              <p className="text-gray-600 font-medium italic leading-relaxed mb-6">
                {item.review}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 text-[#4CAF50]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
