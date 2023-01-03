import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useProducts([]);
  const navigate = useNavigate();
  // heandleDeleteProduct
  const heandleDeleteProduct = (id) => {
    const proceed = window.confirm("Sir, Are you sure ?");
    if (proceed) {
      console.log("deleted", id);
      const url = `https://warehouse-management-server-side-ten.vercel.app/products/${id}`;
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
    }
  };
  // usenavigate
  const navigateToUpdate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="bg-product d-flex row justify-content-center align-items-start mx-auto py-5 text-center">
      {products.slice(0, 6).map((product) => (
        <div className="col-md-3 col-lg-4 cards" key={product._id}>
          <img className="w-50 my-2" src={product.img} alt="" />
          <h4 className="fw-bold  name">{product.name}</h4>
          <h5 className=" fw-bolder">Quantity: {product.quantity}</h5>
          <p>Supplier: {product.supplier}</p>

          <button
            onClick={() => navigateToUpdate(product._id)}
            className="update-btn"
          >
            UPDATE
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
