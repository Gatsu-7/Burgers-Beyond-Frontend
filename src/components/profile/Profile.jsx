import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpeg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="user" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3, duration: 0.6 }}>
          Satyam
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5, duration: 0.6 }}>
          <Link to="/admin/dashboard">
            <MdDashboard />
            DashBoard
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link to="/myorders">
            <GiHamburger />
            Orders
          </Link>
        </motion.div>
        <motion.button
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <MdLogout /> Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
