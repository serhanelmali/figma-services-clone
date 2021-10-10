import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const hamburgerHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 375) {
      setIsHamburger(false);
    }
  }, [width]);

  return (
    <div className={styles.navbar}>
      <Image width={110} height={24} src="/images/GREAT.svg" />
      <div
        className={
          !isHamburger
            ? styles.navbar__hamburger
            : styles.navbar__hamburger__active
        }
        onClick={hamburgerHandler}
        onKeyDown=""
        role="button"
        tabIndex="0"
      >
        <div />
        <div />
        <div />
      </div>
      <div
        className={
          !isHamburger ? styles.navbar__pages : styles.navbar__pages__active
        }
      >
        <ul>
          <li>How It Works</li>
          {!isHamburger ? <li>Advantages</li> : <li> Advantages of Great</li>}
          {!isHamburger ? <li>Services</li> : <li>45 Expert/Categories</li>}
          <li>Apply to be an expert</li>

          {isHamburger && (
            <li>
              <Image width={30} height={30} src="/images/YoutubeIcon.svg" />
              <Image width={30} height={30} src="/images/FacebookIcon.svg" />
              <Image width={30} height={30} src="/images/InstagramIcon.svg" />
              <Image width={30} height={30} src="/images/LinkedInIcon.svg" />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
