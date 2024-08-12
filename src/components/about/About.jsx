import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpeg";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burgers & Beyond</h4>
          <p>
            We are Burgers & Beyond. The Place for the most tastiest burgers in
            the world.
          </p>
          <p>
            Explore the various type of food and burgers. Click below to see the
            Menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="" className="" />
              <h3>Satyam Satpathy</h3>
            </div>
            <p>
              I am Satyam Satpathy, the founder of Burgers & Beyond. Affiliated
              to God Taste.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
