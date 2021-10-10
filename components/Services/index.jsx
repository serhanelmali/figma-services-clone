import React, { useState, useEffect } from "react";
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
    }
  }, [data]);

  if (error) return "An error has occured";
  if (!data) return <Loading />;

  return data.map((service) => (
    <div className={styles.service}>
      <img
        className={styles.service__icon}
        src={service.icon}
        alt="Service Icon"
      />
      <div className={styles.service__category}>
        <span>{service.title}</span>
      </div>
      <div className={styles.service__experts}>
        <span className={styles.service__experts__title}>Experts</span>
        <div className={styles.service__experts__images}>
          <img src={service.people[0].avatar} alt="Service Expert 1" />
          <img src={service.people[1].avatar} alt="Service Expert 2" />
        </div>
        <span className={styles.service__experts__names}>
          {service.people[0].name} + {service.people[1].name}
        </span>
      </div>
    </div>
  ));
};

export default Services;
