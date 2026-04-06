import Tomato from "../assets/offer/t-1.png";
import Melon from "../assets/offer/v-2.png";

const offers = [
  {
    id: 1,
    subTitle: "Food Tasty",
    title: "Organic",
    highlight: "Vegetables",
    discount: "Up To 45% Off",
    image: Tomato,
  },
  {
    id: 2,
    subTitle: "Food Tasty",
    title: "Organic",
    highlight: "Vegetables",
    discount: "Up To 45% Off",
    image: Melon,
  },
];

export default function OfferSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden rounded-xl border border-gray-200 
              p-6 sm:p-6 md:p-8 
              flex items-center justify-between gap-3 sm:gap-5
              group cursor-pointer"
              style={{ borderLeft: "6px solid #4CAF50" }}
            >
              {/* Text */}
              <div className="z-10 w-[60%] sm:w-1/2">
                <span className="text-[#E53935] font-semibold text-xs sm:text-sm mb-1 sm:mb-3 block">
                  {offer.subTitle}
                </span>

                <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                  {offer.title}{" "}
                  <span className="text-[#4CAF50]">{offer.highlight}</span>
                </h2>

                <p className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mt-1 mb-2 sm:mb-4">
                  {offer.discount}
                </p>

                <button
                  className="bg-[#4CAF50] hover:bg-[#43a047] text-white 
                text-[10px] mt-2 sm:text-xs md:text-sm
                font-bold py-1.5 sm:py-2.5 px-3 sm:px-6 
                rounded-md transition-all uppercase tracking-wider"
                >
                  Shop Now
                </button>
              </div>

              {/* Image */}
              <div className="w-[40%] sm:w-1/2 flex justify-end">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="
                  w-24 sm:w-32 md:w-40 lg:w-56
                  object-contain
                  transition-transform duration-500 group-hover:scale-110
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
