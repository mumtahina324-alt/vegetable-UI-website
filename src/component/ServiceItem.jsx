export default function ServiceItem({ Icon, title, desc }) {
  if (!Icon) return null; // আইকন না থাকলে রেন্ডার হবে না

  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-16 h-16 rounded-full border border-green-500 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#4CAF50] group-hover:text-white text-[#4CAF50]">
        <Icon size={30} strokeWidth={1.5} />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#4CAF50] leading-none mb-1">
          {title}
        </h3>
        <p className="text-gray-600 font-medium text-sm md:text-base leading-tight">
          {desc}
        </p>
      </div>
    </div>
  );
}
