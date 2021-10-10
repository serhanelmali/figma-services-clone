import React from "react";

import styles from "./footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footer__top}>
      <div className={styles.footer__top__text}>
        <h4>Get in touch</h4>
        <p>
          Get to know our hiring process before you apply or find answers to any
          lingering questions, right here, right now.
        </p>
      </div>
      <div className={styles.footer__top__button__container}>
        <button type="button">Join</button>
      </div>
    </div>
    <div className={styles.footer__mid}>
      <div className={styles.footer__mid__addresses}>
        <div className={styles.footer__mid__addresses__wrapper}>
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
        <div className={styles.footer__mid__addresses__policies}>
          <a href="!#">Privacy policy</a>
          <a href="!#">Cookie Policy</a>
        </div>
      </div>
      <div className={styles.footer__mid__links}>
        <ul>
          <h5>Stunner</h5>
          <li>
            <a href="!#">How It Works</a>
          </li>
          <li>
            <a href="!#">Advantages of Great</a>
          </li>
          <li>
            <a href="!#">45/Expert/Categories</a>
          </li>
          <li>
            <a href="!#">Apply to be an expert</a>
          </li>
        </ul>

        <ul>
          <h5>Follow us</h5>
          <li>
            <a href="!#">Facebook</a>
          </li>
          <li>
            <a href="!#">Twitter</a>
          </li>
          <li>
            <a href="!#">Instagram</a>
          </li>
          <li>
            <a href="!#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.footer__bottom}>
      <span>© 2021 Great Inc.</span>
      <div className={styles.footer__bottom__policies}>
        <a href="!#">Privacy policy</a>
        <a href="!#">Cookie Policy</a>
      </div>
    </div>
  </div>
);

export default Footer;
