import { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const hamburgerHandler = () => {
    setIsHamburger(!isHamburger);
  };

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
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul
        className={
          !isHamburger ? styles.navbar__pages : styles.navbar__pages__active
        }
      >
        <li>How It Works</li>
        <li>Advantages</li>
        <li>Services</li>
        <li>Apply to be an expert</li>
      </ul>
    </div>
  );
};

export default Navbar;
