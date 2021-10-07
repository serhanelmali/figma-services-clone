import styles from "./headerInfo.module.scss";

const HeaderInfo = () => {
  return (
    <div className={styles.headerInfo}>
      <h1>Services</h1>
      <p>
        Experts covering your home’s needs from the right light bulb shade to
        remodeling.
      </p>
    </div>
  );
};

export default HeaderInfo;
