import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Service Detail for Service ID: {id}</h2>
            <p>Details about the service will go here.</p>
        </div>
    );
};

export default ServiceDetail;
