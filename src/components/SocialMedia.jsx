import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/Jameswunderland">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.tiktok.com/@hufait">
        <div>
          <FaTiktok />
        </div>
      </a>
      <a href="https://www.instagram.com/hufait/">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
