import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "Service",
      links: ["About Vergies", "Faq's", "Contact Us", "News", "Store Location"],
    },
    {
      title: "Privacy & Item",
      links: [
        "Payments Policy",
        "Privacy Policy",
        "Returns Policy",
        "Shipping Policy",
        "Term & Condition",
      ],
    },
    {
      title: "My Account",
      links: [
        "My Account",
        "My Chart",
        "Order History",
        "My Wishlish",
        "My Adress",
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid: Desktop এ ৫টি কলামে ভাগ হবে (Logo + 3 Link groups + Contact) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* 1. Logo Section - Mobile: Center, Desktop: Left */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Logo</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Tortor Neque Egestas Augue, Eu Vulputate Magna Eros Eu Erat.
            </p>
            <div className="flex gap-4">
              <FaInstagram className="text-xl text-green-500 hover:text-white transition-colors cursor-pointer" />
              <FaYoutube className="text-xl text-green-500 hover:text-white transition-colors cursor-pointer" />
              <FaTwitter className="text-xl text-green-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* 2, 3, 4. Link Groups (Service, Privacy, My Account) */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-lg font-bold mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-green-500 transition-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5. Contact Section - Mobile এ My Account এর পাশে থাকবে */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-5">Contact Visit</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 shrink-0" />
                <p>Wooster Parck Chowk Bazzar, New York</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <p>+1258 258 369</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-500 shrink-0" />
                <p className="break-all">Support@Gmail.Com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
