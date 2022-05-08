import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./Management.css";

const Management = () => {
  const [products, setProducts] = useProducts([]);
  const navigate = useNavigate();

  //.............................................
  const handleDeliver = (id) => {
    let deliver = 1;
    let quantityParse = parseInt(products.quantity);
    let quantity = quantityParse - deliver;

    const url = `https://peaceful-thicket-62870.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("success", data);

          setProducts(quantity);
        }
      });
  };

  //.............................................

  const navigateToUpdate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <div className="bg-product gy-4 d-flex row justify-content-center align-items-start mx-auto py-5 text-center">
        {products.map((product) => (
          <div className="col-md-3 col-lg-4 cards" key={product._id}>
            <img className="manag-img my-2" src={product.img} alt="" />
            <h4 className="fw-bold  name">{product.name}</h4>
            <h5 className=" fw-bolder">Quantity: {product.quantity}</h5>
            <p>Supplier: {product.supplier}</p>
            {/* <p className='fst-italic '>{product.body}</p> */}

            <button
              onClick={() => navigateToUpdate(product._id)}
              className="update-btn"
            >
              UPDATE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
