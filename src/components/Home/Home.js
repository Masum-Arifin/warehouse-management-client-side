import React from "react";
import "./Home.css";
import img from "./../../images/home-img1.jpg"

const Home = () => {
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
            We are a recognized premier logistics provider of multi-temperature
            warehouse services in the North Dakota. We offer our customers
            convenience, flexibility, and cost-effective service. <br /> 
            At DEPOT, we
            offer the expert warehousing and storage services that your freight
            is carefully handled, properly inventoried and stored at the
            required temperature in our state-of-the-art facilities.
          </small>
        </p>
      </div>
        <div>
            <img  src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
