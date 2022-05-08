import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css'
import swal from "sweetalert";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let errorMessage;

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorMessage = <p className="text-danger">{error?.message} </p>;
  }



  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    if(email && password){
      swal({
        title: "Good job!",
        text: "Your Login Successful !",
        icon: "success",
      });
    }
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
    if (error) {
      swal({
        title: "Password must be at least 6 characters long.",
        icon: "error",
      });
    }
  };
  return (
    <div className="container w-50 mx-auto my-5">
      <div className="shadow-lg p-5  bg-body rounded">
        <h2 className="custom-text-color text-center mt-2 mb-3">
          - Please Login -
        </h2>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            variant=" d-block mb-2"
            className="button-style w-50 text-light bg-primary mx-auto fw-bold"
            type="submit"
          >
            Login
          </Button>
        </Form>
        <div className="justify-content-center d-flex">
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        </div>
        {errorMessage}
       <div className="text-center">
       <button
          className="btn border mt-3 w-75 bg-success fw-bold text-white py-3 rounded-pill"
          onClick={() => signInWithGoogle()}
          //
        >
          Continue with Google
        </button>
       </div>

        <p className="text-center">
          alvin Photography?{" "}
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
          >
            Please Register
          </Link>
        </p>
        <p className="text-center">
          Forget Password?
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
