import { Button } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

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

           <div className='d-flex justify-content-between'>
           <h4>price :</h4>
           <h4>Ratings :</h4>
           </div> 
           <div className="d-flex align-items-center justify-content-center">
        <Button className="my-4 text-center d-block" variant="contained" size="medium">
         <Link className="text-light" to='#'>Book Now</Link>
        </Button>
      </div>
            </Col>
            </Row>
          
        
        </Container>
    );
};

export default DetailsReview;