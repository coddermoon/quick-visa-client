import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const DetailsReview = () => {
    const data = useLoaderData()
   const {title,description,thubm_img}=data
    return (
        <Container>
            <Row className='my-5 '>
            <Col md='7'>
            <img className='img-fluid' src={thubm_img} alt="" />

            </Col>

            <Col md='5'>
            <h2>{title}</h2>
           
           <p>{description}</p>
            </Col>
            </Row>
          
        
        </Container>
    );
};

export default DetailsReview;