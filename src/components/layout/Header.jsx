import { useNavigate } from "react-router-dom";

import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
const Header = (isAuthenticated = false) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate("/");
  };
  return (
    <nav>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <IoFastFoodOutline className="logo" onClick={handleClick} />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
