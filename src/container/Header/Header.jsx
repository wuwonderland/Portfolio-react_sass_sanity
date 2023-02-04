import React from "react";
import "./Header.scss";
import { motion, spring } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 2],
    transition: {
      duration: 3,
      ease: "backInOut",
    },
  },
};

const oscillateVariants = {
  visible: {
    y: [-50, 50, -50, 50, -50],

    transition: {
      type: "spring",
      damping: 3,
      stiffness: 50,
      restDelta: 0.001,
      bounce: 0.5,
      repeat: Infinity,

      // delay: 1,
      duration: 5,
    },
  },
};

const badgeVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0 0 20px rgb(255, 0, 247)",
    transition: {
      repeat: Infinity,
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 5 }}
      >
        <div className="app__header-badge">
          <motion.div
            className="badge-cmp app__flex"
            variants={badgeVariants}
            whileHover="hover"
          >
            <span>🚀</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="gradient__text">James Wu</h1>
            </div>
          </motion.div>

          <div className="tag-cmp app__flex">
            <p className="title-text gradient__text">
              Blockchain FullStack Developer
            </p>
            <br />
            <p className="p-text">
              You enter the best digital workforce for Web 3.0 development and
              non-fungible tokens (NFTs) design. Hire, collaborate, and discover
              exclusive digital MVP projects while working with your dream
              development.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {/* <img src={images.headerImg} alt="profile_bg" /> */}
        <motion.img
          className="overlay_header"
          whileInView={scaleVariants.whileInView}
          variants={oscillateVariants}
          animate="visible"
          src={images.spaceman}
          alt="profile_header"
        />

        <motion.img
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        className="app__header-circles"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {[images.react, images.solidity, images.swift].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
