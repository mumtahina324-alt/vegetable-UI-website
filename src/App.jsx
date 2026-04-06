import CategorySection from "./component/CategorySection";
import CustomerSection from "./component/CustomerSection";
import DeliverySection from "./component/DeliverySection";
import Cart from "./component/cart";

import { useState } from "react";
import Footer from "./component/Footer";
import FooterBottom from "./component/FooterBottom";
import HeroSection from "./component/HeroSection";
import MeetSection from "./component/MeetSection";
import NavbarSection from "./component/NavbarSection";
import OfferSection from "./component/OfferSection";
import ProductSection from "./component/ProductSection";
import ServiceSection from "./component/ServiceSection";
import { CartProvider } from "./context/index.js";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div>
        <NavbarSection onCartClick={() => setIsCartOpen(true)} />
        <HeroSection />
        <CategorySection />
        <OfferSection />
        <ServiceSection />
        <ProductSection />
        <MeetSection />
        <DeliverySection />
        <CustomerSection />
        <Footer />
        <FooterBottom />
        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </div>
    </CartProvider>
  );
}
