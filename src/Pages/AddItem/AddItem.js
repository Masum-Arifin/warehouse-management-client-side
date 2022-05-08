import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AddItem.css";
import auth from "../../firebase.init";

const AddItem = () => {
  // user auth
  const [user] = useAuthState(auth);
  console.log(user);
  // handleAddProduct for database mongodb
  const handleAddProduct = (e) => {
    e.preventDefault();
    // toke value
    const name = e.target.name.value;
    const email = user.email;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const img = e.target.img.value;
    const body = e.target.body.value;

    const products = { name, supplier, quantity, img, body, email };
    console.log(products);

    // use axios for my items
    axios
      .post("https://peaceful-thicket-62870.herokuapp.com/items", products)
      .then((response) => {
        console.log(response);
      });
    // send data to the server
    fetch("https://peaceful-thicket-62870.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  return (
    <div className="bg-addItem rounded  text-center">
      <img
        className="w-25"
        src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/shop-pict-basket_add.png"
        alt=""
      />
      {/* update field for adding object */}
      <form
        onSubmit={handleAddProduct}
        className=" d-flex row justify-content-center align-items-start mx-auto py-5 text-center "
      >
        {/* one  */}
        <div className="col-md-6 col-lg-6">
          <input
            className="w-100 mb-1 p-1 rounded sizing"
            type="text"
            name="name"
            placeholder="Product Name"
            required
          />
          <br />
          <input
            className="w-100 mb-1 p-1 rounded sizing"
            type="text"
            name="supplier"
            placeholder="Supplier Name"
            required
          />
        </div>
        {/* two */}
        <div className="col-lg-6 col-md-6">
          <input
            className="w-100 mb-1 p-1 rounded sizing"
            type="number"
            name="quantity"
            placeholder="Product Quantity"
            required
          />
          <br />
          <input
            className="w-100 mb-1 p-1 rounded sizing"
            type="text"
            name="img"
            placeholder="Image URL"
            required
          />
        </div>
        {/* three */}
        <div className="col-lg-12 col-md-12">
          <textarea
            className="w-100  p-1 rounded sizing"
            name="body"
            id=""
            cols="30"
            rows="3"
            placeholder="Sort Description"
            required
          ></textarea>
          <input
            className="w-100 p-2 rounded add-btn sizing"
            type="submit"
            value="ADD NEW PRODUCT"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
