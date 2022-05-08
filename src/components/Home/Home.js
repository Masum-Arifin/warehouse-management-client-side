import React from "react";
import "./Home.css";
import img from "./../../images/home-img1.jpg";
import iconb from "./../../images/home-icon1.png";
import icon from "./../../images/home-icon2.png";
import iconc from "./../../images/home-icon3.png";
import useServices from "../../Hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
    const [services] = useServices();
  return (
    <div>
      <div className="bg-img container-fluid">
        <h2 className="text-light">
          Distribution, Storage, Warehousing & Fulfillment
        </h2>
        <p className="text-light">
          Your solution for first class warehousing services for the goods,
          food, grocery <br /> pharmaceutical and general commodity industries.
        </p>
      </div>
      <div className="d-flex justify-content-between  mt-5 container ">
        <div className="me-5">
          <h2 className="fs-1">DEPOT Warehousing & Storage</h2>
          <p>
            <small className="fs-5">
              We are a recognized premier logistics provider of
              multi-temperature warehouse services in the North Dakota. We offer
              our customers convenience, flexibility, and cost-effective
              service. <br />
              At DEPOT, we offer the expert warehousing and storage services
              that your freight is carefully handled, properly inventoried and
              stored at the required temperature in our state-of-the-art
              facilities.
            </small>
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className=" mdl-img">
          <div className=" mb-5">
          <h2 className="text-light">Our Specialties</h2>
          <p className="text-light ">Best Solution for Your Needs</p>
          </div>
      <div className="d-flex ">
        <img className="ms-5 ps-5 img-fluid" src={iconb} alt="" />
      <h2 className="text-light fs-5 mt-auto ms-3">Storage</h2>
        <img className="ms-5 ps-5" src={icon} alt="" />
        <h2 className="text-light fs-5 mt-auto ms-3">Distribution</h2>
        <img className="ms-5 ps-5" src={iconc} alt="" />
        <h2 className="text-light fs-5 mt-auto ms-3">Trucking</h2>
      </div>
      </div>
      <section className="mt-10 mb-10 mx-10 text-center">
        <h1 className="mt-5 text-3xl text-center font-bold ">
        Our Services
        </h1>
        <div className=" container">
          <div className="row row-cols-1 row-cols-md-3 pt-5 g-5">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="my-5"></div>
      </section>
    </div>
  );
};

export default Home;
