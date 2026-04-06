import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Leave from "../assets/leave.png";
import { meetData } from "../data/meetData";

const MeetSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* বাম পাশের টেক্সট কন্টেন্ট */}
        <div className="lg:w-1/4 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-800 font-bold text-lg">Our Farmer</span>
            <img src={Leave} alt="leaf" className="w-8 h-8" /> {/* লিফ আইকন */}
          </div>
          <h2 className="text-4xl font-extrabold text-green-500 mb-6 leading-tight">
            Meet With Our <br /> Farmers
          </h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Organic Farms Avoid Harmful Chemicals And Care For The Soil With
            Natural Methods. Farmers Grow Healthy Food, Protect Ecosystems, And
            Support A Cleaner.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300">
            Shop Now
          </button>
        </div>

        {/* ডান পাশের কার্ড গ্রিড */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meetData.map((farmer) => (
            <div
              key={farmer.id}
              className="group relative overflow-hidden rounded-2xl bg-white text-center"
            >
              {/* ইমেজ কন্টেইনার */}
              <div className="relative overflow-hidden rounded-2xl h-72">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* হোভার সোশ্যাল মেনু (নিচ থেকে উপরে উঠবে) */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="bg-white/70 backdrop-blur-sm w-[90%] py-4 rounded-t-3xl shadow-lg">
                    <div className="flex justify-center gap-3 mb-2">
                      <a
                        href={farmer.socials.fb}
                        className="p-2 bg-white text-green-500 rounded-full shadow hover:text-green-500 transition"
                      >
                        <FaFacebookF size={14} />
                      </a>
                      <a
                        href={farmer.socials.ig}
                        className="p-2 bg-white text-green-500 rounded-full shadow hover:text-green-500 transition"
                      >
                        <FaInstagram size={14} />
                      </a>
                      <a
                        href={farmer.socials.web}
                        className="p-2 bg-white text-green-500 rounded-full shadow hover:text-green-500 transition"
                      >
                        <FaDribbble size={14} />
                      </a>
                      <a
                        href={farmer.socials.wa}
                        className="p-2 bg-white text-green-500 rounded-full shadow hover:text-green-500 transition"
                      >
                        <FaWhatsapp size={14} />
                      </a>
                    </div>
                    <p className="text-red-500 font-bold text-sm uppercase tracking-wider">
                      Follow Me
                    </p>
                  </div>
                </div>
              </div>

              {/* নাম এবং রোল */}
              <div className="mt-4 pb-4">
                <p className="text-gray-500 text-sm font-medium">
                  {farmer.role}
                </p>
                <h3 className="text-green-500 font-bold text-xl">
                  {farmer.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetSection;
