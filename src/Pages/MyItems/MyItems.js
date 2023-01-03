import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get(
        `https://warehouse-management-server-side-ten.vercel.app/products?email=${user.email}`
      )
      .then((data) => setProducts(data.data));
  }, [products, user.email]);
  console.log(products);

  //.............................................
  // const handleDeliver = (id) => {
  //   let deliver = 1;
  //   let quantityParse = parseInt(products.quantity);
  //   let quantity = quantityParse - deliver;

  //   const url = `https://warehouse-management-server-side-ten.vercel.app/products/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(quantity),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         console.log("success", data);

  //         setProducts(quantity);
  //       }
  //     });
  // };

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

export default MyItems;
