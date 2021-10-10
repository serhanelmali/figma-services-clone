import { useState, useEffect } from "react";
import useSWR from "swr";
import useWindowScroll from "../../hooks/useWindowScrolls";
import Loading from "../Loading";
import styles from "./services.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Services = () => {
  const [expertsToShowStart, setExpertsToShowStart] = useState(0);
  const [expertsToShowEnd, setExpertsToShowEnd] = useState(18);
  const { isScrollEnd } = useWindowScroll();

  useEffect(() => {
    if (isScrollEnd && expertsToShowEnd <= 60) {
      setExpertsToShowStart(expertsToShowStart + 6);
      setExpertsToShowEnd(expertsToShowEnd + 6);
    }
  }, [isScrollEnd]);

  const { data, error } = useSWR(
    `https://basework-frontend-case-api.herokuapp.com/services/${expertsToShowStart}/${expertsToShowEnd}`,
    fetcher
  );

  const [experts, setExperts] = useState([]);

  useEffect(() => {
    if (data) {
      setExperts([...experts, ...data]);
      console.log(data);
    }
  }, [data]);

  if (error) return "An error has occured";
  if (!data) return <Loading />;
  if (data) {
    return data.map((service, id) => {
      return (
        <div className={styles.service} key={id}>
          <img className={styles.service__icon} src={service.icon} />
          <div className={styles.service__category}>
            <span>{service.title}</span>
          </div>
          <div className={styles.service__experts}>
            <span className={styles.service__experts__title}>Experts</span>
            <div className={styles.service__experts__images}>
              <img src={service.people[0].avatar} />
              <img src={service.people[1].avatar} />
            </div>
            <span className={styles.service__experts__names}>
              {service.people[0].name} + {service.people[1].name}
            </span>
          </div>
        </div>
      );
    });
  }
};

export default Services;
