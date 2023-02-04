import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

/*********** Static Data ***********/
// const abouts = [
//   {
//     title: "Web3 Development",
//     description: "Web3 is here to change our life before we know it's happening",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Frontend Development",
//     description: "React.js is the framework for web development",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description:
//       "Solid is the language for building decentralized Web3 applications",
//     imgUrl: images.about03,
//   },
//   {
//     title: "UI/UX Design",
//     description: "Figma is our platform for web design",
//     imgUrl: images.about04,
//   },
//   {
//     title: "Web Animations",
//     description: "Framer Motion is the framework for web animations",
//     imgUrl: images.about01,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  /**** SEE SANITY DOCUMENTATION FOR REFERENCE ****/
  useEffect(() => {
    const queryAbouts = '*[_type == "abouts"]'; //import sanity database for 'about' query

    client.fetch(queryAbouts).then((responseData) => setAbouts(responseData));
  }, []);
  /**** SEE SANITY DOCUMENTATION FOR REFERENCE ****/

  return (
    <>
      <motion.div
        className="app__about-intro"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="head-text">
          <h4>Through this website you will be able to gain 3 things</h4>
          <br />
          <motion.p
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            1. Profitable Outcome Using My Web Design
          </motion.p>
          <br />
          as well as
          <br />
          <motion.p
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 3 }}
          >
            2. Easy-To-Use Application That Will Be Useful For Your Business
          </motion.p>
          <br />
          moreover
          <br />
          <motion.p
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 4 }}
          >
            3. You may hire me for your development journey. Please email me
            upon request.
          </motion.p>
        </h2>
      </motion.div>

      <div className="app__profiles app__transparentbg">
        {abouts.map((about, index) => (
          <motion.div
            className="app__profile-item"
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__pinkbg");
