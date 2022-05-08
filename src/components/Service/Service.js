import React from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";


const Service = () => {
  const [services] = useServices();
  return (
    <div className="container">
     <div className="row row-cols-1 row-cols-md-3 pt-5 g-5">
     {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
     </div>
    </div>
  );
};

export default Service;
