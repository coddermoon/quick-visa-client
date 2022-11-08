import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const ServicePage = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <Container>
           <h1 className="text-center my-5">our cool services</h1>

           <Row>
            
            {
                services.map(service=> <ServiceCard
                key={service._id}
                service={service}
                /> )
            }
           
           </Row>
        </Container>
    );
};

export default ServicePage;