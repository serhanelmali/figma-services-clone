import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    "https://basework-frontend-case-api.herokuapp.com/services/0/40"
  );
  const data = await response.json();
  return data;
};

const ServicesSWR = () => {
  const { data, error } = useSWR("services", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return data.map((service, id) => {
    return <p key={id}>{service.title}</p>;
  });
};

export default ServicesSWR;
