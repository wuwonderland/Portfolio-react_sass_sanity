import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";
import { Testimonial } from "../../container";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.jameswulogo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[
          "home",
          "about",
          "work",
          "skills",
          /* "testimonial", */
          "contact",
        ].map((item) => (
          <li className="app__flex p-text" key={"link-${item}"}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt1 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }} // view appears to be 300px horizontally
            transition={{ duration: 0.95, ease: "easeOut" }} // how fast the side menu slides 300px
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                /* "testimonial", */
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
