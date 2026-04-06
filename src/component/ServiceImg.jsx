import Framer from "../assets/farmer 1.png";

export default function ServiceImg() {
  return (
    <div className="flex justify-center items-end">
      {/* Frame */}
      <div className="border-10 border-[#4CAF50] rounded-t-[200px] bg-gray-100 p-4 max-w-[320px] md:max-w-100 lg:max-w-112.5">
        <img
          src={Framer}
          alt="Our Service"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
