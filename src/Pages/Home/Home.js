import React from 'react';
import{useEffect, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import './Home.css'
import Product from '../HomeData/Product';
import HomeSection from '../HomeSection/HomeSection';



const Home = () => {
    
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return (
        <div className='text-center '>
        {
            loading ?
            <ClipLoader
            color={'4fe514'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
             :
             
             <div className='home-container text-center pb-4'>
                <h5 className='text-mine fw-bolder '>Distribution, Storage, Warehousing & Fulfillment</h5>
                <Link className='see-link mb-5' to="/management">See More</Link>
            </div>
            }
            <Product></Product>
            <HomeSection></HomeSection>
        
        </div>
    );
};

export default Home;