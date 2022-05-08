import React from "react";
import { useNavigate } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const {name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <div className="col">
        <div className="card h-100 shadow-lg p-3 mb-5 rounded border-0">
          <img width="100px" src={img} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-title">$ {price}</h6>
            <p className="card-text">{description}</p>
            <button
              onClick={() => navigateToServiceDetail(name)}
              className="btn btn-primary w-100"
            >
            BUY Book Now 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
