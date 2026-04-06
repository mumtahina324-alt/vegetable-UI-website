import { CreditCard, RefreshCcw, Tag, Truck } from "lucide-react";
import ServiceImg from "./ServiceImg";
import ServiceItem from "./ServiceItem";

export default function ServiceSection() {
  const services = [
    { icon: Truck, title: "Free Delivery", desc: "From $50" },
    { icon: RefreshCcw, title: "365 Days", desc: "For Free Return" },
    { icon: CreditCard, title: "Payment", desc: "Secure System" },
    { icon: Tag, title: "Only Best", desc: "Brands" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Exquisite <span className="text-[#4CAF50]">Service</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <ServiceImg />
          </div>

          {/* Right Side - List */}
          <div className="order-1 lg:order-2 space-y-10 flex flex-col justify-center">
            {services.map((item, index) => (
              <ServiceItem
                key={index}
                Icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
