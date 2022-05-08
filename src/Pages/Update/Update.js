import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://peaceful-thicket-62870.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  // use navigate
  const navigate = useNavigate();

  // heandleDeleteProduct
  const heandleDeleteProduct = (id) => {
    const proceed = window.confirm("Sir, Are you sure ?");
    if (proceed) {
      console.log("deleted", id);
      const url = `https://peaceful-thicket-62870.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
      navigate("/management");
    }
  };
  // .......................https://peaceful-thicket-62870.herokuapp.com/item/${id}
  const handleDelivered = async () => {
    await axios
      .put(`https://peaceful-thicket-62870.herokuapp.com/products/${id}`, {
        quantity: products.quantity - 1,
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setProducts({ ...products, quantity: products.quantity - 1 });
          toast("Successfully Delivered !!", {
            type: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="my-5 row gy-4 d-flex row justify-content-center align-items-center mx-auto py-5 text-center shadow-lg">
      <div className=" col-md-6 col-lg-6 col-sm-12 col-12 text-center">
        <img className="w-75 shadow-lg" src={products.img} alt="" />
      </div>
      <div className=" col-md-6 col-lg-6 col-sm-12 col-12 text-start">
        <h4>Name:{products.name}</h4>
        <h5>Quantity: {products.quantity}</h5>
        <p>Supplier: {products.supplier}</p>
        <article>Description: {products.body}</article>

        <p className="my-5">
          <button
            onClick={() => heandleDeleteProduct(products._id)}
            className="btn-danger me-2"
          >
            DELETE
          </button>
          <button onClick={handleDelivered} className="btn-success">
            DELEVERY
          </button>
        </p>
      </div>
    </div>
  );
};

export default Update;
