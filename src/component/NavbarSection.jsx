import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../context/index";

export default function NavbarSection({ onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "CONTACT", href: "#" },
    { name: "PAGES", href: "#" },
    { name: "BLOGS", href: "#" },
  ];

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="flex items-center gap-1"></div>
            <h1 className="text-2xl font-bold tracking-tighter text-gray-900 leading-none">
              Logo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center text-sm font-semibold tracking-wide transition-colors duration-200 
                  ${link.name === "HOME" ? "text-green-500" : "text-gray-700 hover:text-green-500"}`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="ml-1 opacity-50" />
                )}
              </a>
            ))}
          </div>

          {/* Icon Section (Search, User, Cart) */}
          <div className="flex items-center space-x-5">
            <button className="text-green-500 hover:text-green-600">
              <Search size={22} />
            </button>
            <div className="relative cursor-pointer text-green-500 hover:text-green-600">
              <User size={22} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                0
              </span>
            </div>
            <div
              className="relative cursor-pointer text-green-500 hover:text-green-600"
              onClick={onCartClick}
            >
              <ShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-500 hover:text-green-600"
              >
                {isOpen ? <X size={25} /> : <Menu size={25} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-[#EEEEF0] border-t border-b border-green-500 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-3 text-base font-semibold border-b border-green-500 last:border-0 transition-colors
            ${link.name === "HOME" ? "text-green-500" : "text-gray-700 active:text-green-500"}`}
              >
                {/* এখানে justify-center এবং gap-1 যোগ করা হয়েছে */}
                <div className="flex justify-center items-center gap-1">
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className="opacity-40" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
