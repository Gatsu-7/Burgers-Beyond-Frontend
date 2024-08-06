import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const Home = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options} transition={{ delay: 0.1, duration: 0.8 }}>
            Burgers & Beyond
          </motion.h1>
          <motion.p {...options} transition={{ delay: 0.2, duration: 0.8 }}>
            Give Yourself a Tasty Treat.
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Founder />
      <Menu />
    </>
  );
};

export default Home;
