import styles from "./subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe__transition}>
        <div className={styles.subscribe__transition__container}>
          <div className={styles.subscribe__transition__container__wrapper}>
            <div
              className={
                styles.subscribe__transition__container__wrapper__items
              }
            >
              <ul>
                <div>
                  <li>Manage your task</li>
                  <p>
                    No matter what the size of the task is we will manage it and
                    find solutions for you. From cleaning to junk removal to
                    fixing we have got you covered.
                  </p>
                </div>
              </ul>
              <ul>
                <div>
                  <li>Define the scope of work</li>
                  <p>
                    We will have the subject-matter expert define the scope of
                    work.
                  </p>
                </div>
              </ul>
              <ul>
                <div>
                  <li>Vet licensed vendor</li>
                  <p>
                    We make sure they have a license, valid insurance, criminal
                    background check, and are trusted in their local community.
                  </p>
                </div>
              </ul>
              <ul>
                <div>
                  <li>3 Quotes, until you are satisfied.</li>
                  <p>
                    We will get 3 quotes, If not satisfied we will get more
                    quotes at no cost.
                  </p>
                </div>
              </ul>
            </div>
            <div
              className={
                styles.subscribe__transition__container__wrapper__subscription
              }
            >
              <div
                className={
                  styles.subscribe__transition__container__wrapper__subscription__message
                }
              >
                <p>Stay up to speed on the latest at Great.</p>
              </div>
              <div
                className={
                  styles.subscribe__transition__container__wrapper__subscription__input
                }
              >
                <input type="email" placeholder="jsmith@example.com" />
                <span>
                  By submitting this form, you agree to our <u>Terms of Use </u>
                  and our <u>Privacy Policy.</u>
                </span>

                <div
                  className={
                    styles.subscribe__transition__container__wrapper__subscription__input__check
                  }
                >
                  <input type="checkbox" />
                  <span>
                    Additionally, I’d like to stay informed about local events
                  </span>
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
