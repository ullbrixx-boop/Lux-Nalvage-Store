import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "@/store/cart";
import { StoreLayout } from "@/components/store/StoreLayout";

import Home from "@/pages/store/Home";
import Shop from "@/pages/store/Shop";
import Collection from "@/pages/store/Collection";
import Product from "@/pages/store/Product";
import Cart from "@/pages/store/Cart";
import Checkout from "@/pages/store/Checkout";
import ThankYou from "@/pages/store/ThankYou";
import Track from "@/pages/store/Track";
import Help from "@/pages/store/Help";
import About from "@/pages/store/About";
import Contact from "@/pages/store/Contact";
import PolicyShipping from "@/pages/store/policies/Shipping";
import PolicyReturns from "@/pages/store/policies/Returns";
import PolicyPrivacy from "@/pages/store/policies/Privacy";
import PolicyTerms from "@/pages/store/policies/Terms";
import NotFound from "@/pages/store/NotFound";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<StoreLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections/:handle" element={<Collection />} />
            <Route path="/products/:handle" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/track" element={<Track />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies/shipping" element={<PolicyShipping />} />
            <Route path="/policies/returns" element={<PolicyReturns />} />
            <Route path="/policies/privacy" element={<PolicyPrivacy />} />
            <Route path="/policies/terms" element={<PolicyTerms />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
