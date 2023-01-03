import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";

import "./Login.css";
import axios from "axios";
import swal from "sweetalert";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  // if (!user) {
  //   // console.log(user);

  //   navigate(from, { replace: true });
  // }
  useEffect(() => {
    if (user) {
      swal({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
      });
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (error) {
    swal({
      title: `${error?.message}`,
      icon: "error",
    });
  }

  if (loading) {
    return <Loading />;
  }
  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    // jwt --------------------------
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://warehouse-management-server-side-ten.vercel.app/token",
      {
        email,
      }
    );
    // set local store
    localStorage.setItem("accessToken", data.accessToken);

    navigate(from, { replace: true });
    // jwt --------------------------
  };

  const navigateRegister = (e) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email");
    }
  };
  return (
    <div className="row d-flex g-3 row d-flex justify-content-center  align-items-center mx-auto bg-login">
      {/* part one */}
      <div className="col-lg-7 text-center mx-auto">
        <img
          className="w-100 circle mx-auto"
          src="https://www.camcode.com/wp-content/uploads/2021/08/stockfresh_2261803_inventory-word-stockpile-cardboard-boxes-oversupply-surplus_sizeXS.jpg"
          alt=""
        />
      </div>
      {/* form two */}
      <div className="col-lg-5">
        <div className="p-5 mx-auto w-100 bg-from my-5 text-center">
          <h1 className="text-center my-4 fs-bolder ">LOGIN</h1>
          <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button
              className="fw-bold w-100 rounded mb-2"
              variant="success"
              type="submit"
            >
              Login
            </Button>
            <ToastContainer />
          </Form>
          {errorElement}
          <p className="fw-bold text-center">
            New to Depot{" "}
            <Link
              to="/register"
              className="text-warning  pe-auto text-decoration-none"
              onClick={navigateRegister}
            >
              Please Register
            </Link>
          </p>
          <p className="fw-bold text-center">
            Forget Password ?
            <span
              className="ps-2 text-danger text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </span>
          </p>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
