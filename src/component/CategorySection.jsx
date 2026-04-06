import { ChevronLeft, ChevronRight } from "lucide-react";
import Cabbage from "../assets/category/cabbage.png";
import Capsicum from "../assets/category/capsicum.png";
import Carrot from "../assets/category/carrot.png";
import Cauliflower from "../assets/category/cauliflower.png";
import Cherry from "../assets/category/cherry.png";
import Tomato from "../assets/category/tomato.png";

const categories = [
  { id: 1, img: Cherry, alt: "Cherry" },
  { id: 2, img: Capsicum, alt: "Capsicum" },
  { id: 3, img: Carrot, alt: "Carrot" },
  { id: 4, img: Cabbage, alt: "Cabbage" },
  { id: 5, img: Cauliflower, alt: "Cauliflower" },
  { id: 6, img: Tomato, alt: "Tomato" },
];

const infiniteCategories = [...categories, ...categories];

export default function CategorySection() {
  return (
    <div className="py-16 bg-white relative group overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative flex items-center">
        {/* Left Arrow */}
        <button className="absolute left-2 z-10 bg-[#4CAF50] text-white p-1 rounded-sm hover:bg-[#43a047] transition-all">
          <ChevronLeft size={20} />
        </button>

        {/* Carousel Container */}
        <div className="flex overflow-hidden w-full">
          {/* Infinite Moving Wrapper */}
          <div className="flex animate-infinite-scroll whitespace-nowrap">
            {infiniteCategories.map((item, index) => (
              <div
                key={index}
                className="inline-block px-4 transition-transform hover:scale-105 duration-300"
              >
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-[#F3F4F6] flex items-center justify-center border border-gray-100 shadow-sm">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-2/3 h-2/3 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-2 z-10 bg-[#4CAF50] text-white p-1 rounded-sm hover:bg-[#43a047] transition-all">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Tailwind CSS Custom Styles */}
      <style jsx>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infiniteScroll 20s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused; /* মাউস রাখলে এনিমেশন থেমে যাবে */
        }
      `}</style>
    </div>
  );
}
