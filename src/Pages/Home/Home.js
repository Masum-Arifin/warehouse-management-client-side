import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Product from '../HomeData/Product';
import HomeSection from '../HomeSection/HomeSection';



const Home = () => {
    
    return (
        <div className='text-center '>
             <div className='home-container text-center pb-4'>
                <h5 className='text-mine fw-bolder '>Distribution, Storage, Warehousing & Fulfillment</h5>
                <Link className='see-link mb-5' to="/management">See More</Link>
            </div>
            <Product></Product>
            <HomeSection></HomeSection>
        </div>
    );
};

export default Home;