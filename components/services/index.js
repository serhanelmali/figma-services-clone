import useSWR from "swr";
import styles from "./services.module.scss";

const fetcher = async () => {
  const response = await fetch(
    "https://basework-frontend-case-api.herokuapp.com/services/0/40"
  );
  const data = await response.json();
  return data;
};

const Services = () => {
  const { data, error } = useSWR("services", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

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
};

export default Services;
