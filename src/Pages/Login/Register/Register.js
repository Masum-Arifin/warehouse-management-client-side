import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
// import { async } from '@firebase/util';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
      
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile,] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const handelSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password); 
        await updateProfile({displayName: name}, );
        console.log(updateProfile);
        navigate('/home')
    }
    
    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='row  g-3 row d-flex justify-content-center bg-register align-items-center mx-auto'>

            {/* part one */}
            
            {/* form two */}
            <div className="col-lg-5">
            <div className='p-5 mx-auto w-100 registerForm text-center my-5'>
            <h1 className='text-center  fw-bolder'>REGISTER !</h1>
            {/* <Form > */}
            <Form  onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">              
             <Form.Control name="name" placeholder="Your Name" /> <br />
             <Form.Control name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                           
            <Form.Control name="password" placeholder="Password" required />
            </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() =>setAgree(!agree)} className={`ps-2 fw-bold text-start ${agree ? "" : 'text-danger'}`} name='terms'  type="checkbox" label="Accept Our Rules and Condition ?" />
                        </Form.Group>
                        <Button disable={!agree} className='w-100 fw-bolder' variant="success" type="submit">
                            Register
                        </Button>
                    </Form>

                    <p className='my-3 fw-bolder'>Already Have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin} >Please Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Register;