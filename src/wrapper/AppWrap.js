import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Container, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Container />

          <div className="copyright">
            <p className="p-text">©2023 James Wu</p>
            <p className="p-text">All Rights Reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
