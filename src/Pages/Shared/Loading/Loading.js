import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className="d-flex justify-content-center mx-auto align-items-center w-100">          
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;