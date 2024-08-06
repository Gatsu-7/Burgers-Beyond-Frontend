import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./styles/app.scss";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";

import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
