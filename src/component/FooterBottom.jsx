export default function FooterBottom() {
  return (
    <div className="bg-[#4CAF50] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-center text-white text-xs md:text-sm font-medium text-center md:text-left">
          <p>©2026 Company Name. All rights reserved</p>

          <div className="flex gap-4 md:gap-8">
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
