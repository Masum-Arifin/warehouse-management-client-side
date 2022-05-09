// import React from 'react';
// import './SocialLogin.css'
// import {  useSignInWithGoogle } from 'react-firebase-hooks/auth'
// import auth from '../../../firebase.init'
// import { useNavigate } from 'react-router-dom';

// const SocialLogin = () => {
//     const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    

//     const navigate = useNavigate();
//     let errorElement;

    
//     if (error) {
//         errorElement = <p className='text-danger'> {error?.message}</p>
//     }
    
//     if (user ) {
//         navigate('/home')
//     }

//     return (
//         <div>
//             <div className='d-flex align-items-center justify-content-center mx-auto'>
//                 <div style={{ height: '2px' }} className=" bg-dark w-25"></div>
//                 <p className='mt-2 fw-bolder px-1'>or</p>
//                 <div style={{ height: '2px' }} className=" bg-dark w-25"></div>
//             </div>
            
//             {errorElement}
//             <div>
//                 <button
//                     onClick={() => signInWithGoogle()}
//                     className='btn btn-success social-btn w-75 mb-2'>Google Sign In <img className='ps-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" /></button><br />
                
//             </div>
//         </div>
//     );
// };

// export default SocialLogin;