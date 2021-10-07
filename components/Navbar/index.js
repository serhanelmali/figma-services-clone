import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image width={110} height={24} src="/images/GREAT.svg" />
      <ul>
        <li>How It Works</li>
        <li>Advantages</li>
        <li>Services</li>
        <li>Apply to be an expert</li>
      </ul>
    </div>
  );
};

export default Navbar;
