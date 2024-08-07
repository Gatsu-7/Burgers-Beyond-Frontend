import React from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
function Login() {
  return (
    <section className="login">
      <motion.button
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
}

export default Login;
