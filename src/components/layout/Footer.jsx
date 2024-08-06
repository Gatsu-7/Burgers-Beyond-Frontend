import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger & Beyond</h2>
        <p>We are trying to give you the best experience possible.</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All rights received @burgers&beyond</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="www.youtube.com">
          <AiFillYoutube />
        </a>
        <a href="www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="www.github.com">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
