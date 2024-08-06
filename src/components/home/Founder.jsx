import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpeg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options} transition={{ delay: 0.2, duration: 1 }}>
        <img src={me} alt="Founder" height="350" width="280" />
        <h3>Satyam Satpathy</h3>
        <p>
          Hey, Everyone I am Satyam Satpathy, the founder of Burgers & Beyond.
          <br />
          Oue aim is to create the most tasty burger on the planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
