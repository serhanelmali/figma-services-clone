import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__text}>
          <h4>Get in touch</h4>
          <p>
            Get to know our hiring process before you apply or find answers to
            any lingering questions, right here, right now.
          </p>
        </div>
        <div className={styles.footer__top__button__container}>
          <button>Join</button>
        </div>

        {/* <div>
            <ul>
              <h5>Stunner</h5>
              <li>
                <a>How It Works</a>
              </li>
              <li>
                <a>Advantages of Great</a>
              </li>
              <li>
                <a>45/Expert/Categories</a>
              </li>
              <li>
                <a>Apply to be an expert</a>
              </li>
            </ul>

            <ul>
              <h5>Follow us</h5>
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span>© 2021 Great Inc.</span>
          <div>
            <a>Privacy policy</a>
            <a>Cookie Policy</a>
          </div> */}
      </div>
      <div className={styles.footer__mid}>
        <div className={styles.footer__mid__addresses}>
          <p>
            1447 2nd St
            <br /> Santa Monica, CA 90401
          </p>
          <p>
            333 SE 2nd Ave
            <br /> Suite 2000
            <br /> Miami, FL 33131
            <br /> (786) 833-9688
          </p>
          <p>
            1341 W Mockingbird Ln
            <br />
            Dallas, TX 75247
            <br />
            (214) 380-2666
          </p>
          <p>
            3 E Third Ave
            <br />
            Suite 200
            <br />
            San Mateo, CA 94401
            <br />
            (415) 300-2889
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
