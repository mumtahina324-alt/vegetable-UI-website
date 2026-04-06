import Hero from "../assets/Group 3.png";

export default function HeroSection() {
  return (
    <section className="bg-[#EEEEF0] min-h-125 md:min-h-150 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 text-left">
            <h5 className="text-gray-900 font-bold text-lg mb-2 tracking-tight">
              Fresh Vegetables
            </h5>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-[#4CAF50] block">Organic Food</span>
              <span className="text-gray-900">& Heathy Tasty</span>
            </h1>

            <p className="text-gray-500 text-sm md:text-base max-w-md mb-8 leading-relaxed">
              Morbi Eget Congue Lectus. Donec Eleifend Ultricies Urna Eleifend.
              Sed Consectetur Tellus Egetodio Aliquet, Vel Vestibulum Tellusm
              Sollicitudin.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4CAF50] hover:bg-[#43a047] text-white font-bold py-3 px-8 rounded-md transition-all">
                Shop Now
              </button>
              <button className="border border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white font-bold py-3 px-8 rounded-md transition-all bg-transparent">
                View More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 relative flex justify-center items-center">
            <img
              src={Hero}
              alt="Fresh Vegetables Basket"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
