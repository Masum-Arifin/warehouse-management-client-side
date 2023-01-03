import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://warehouse-management-server-side-ten.vercel.app/products/${id}`
      )
      .then((data) => setProducts(data.data));
  }, [id, products]);

  const handleRestock = (e) => {
    e.preventDefault();
    let restockValue = e.target.name.value;
    const newQuantity = parseInt(restockValue) + parseInt(products.quantity);
    axios
      .put(
        `https://warehouse-management-server-side-ten.vercel.app/products/${id}`,
        {
          newQuantity,
        }
      )
      .then((res) => console.log(res.data));
    e.target.reset();
  };

  const handleDelivered = async () => {
    const newQuantity = parseInt(products.quantity) - 1;
    axios
      .put(
        `https://warehouse-management-server-side-ten.vercel.app/products/${id}`,
        {
          newQuantity,
        }
      )
      .then((res) => console.log("updated"));
    alert("Successfully! Delivered This Item.");
  };

  const { img, name, quantity, supplier, body } = products;
  console.log(products);

  return (
    <div className="my-5 row gy-4 d-flex row justify-content-center align-items-center mx-auto py-5 text-center shadow-lg">
      <div className=" col-md-6 col-lg-6 col-sm-12 col-12 text-center">
        <img className="w-75 shadow-lg" src={img} alt="" />
      </div>
      <div className=" col-md-6 col-lg-6 col-sm-12 col-12 text-start">
        <h4>Name:{name}</h4>
        <h5>Quantity: {quantity}</h5>
        <p>Supplier: {supplier}</p>
        <article className="w-50">Description: {body}</article>

        <p className="my-5">
          <Link to={"/management"}>
            <button className="btn btn-outline-danger me-2">
              Manage Inventories
            </button>
          </Link>
          <button onClick={handleDelivered} className="btn btn-success">
            DELIVERED
          </button>
        </p>
        <form onSubmit={handleRestock}>
          <div className="input-group mb-3 w-50">
            <input
              type="number"
              name="name"
              className="form-control"
              placeholder="Enter Your Restock Item "
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-warning"
              type="submit"
              id="button-addon2"
            >
              Restock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
