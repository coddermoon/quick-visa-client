import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {

 

    return (
        <Carousel fade className='carosel-height'>
        <Carousel.Item >
          <img
            className="d-block w-100 carosel-height "
            src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-dark fw-bold d-1'>SKILLED & BUSINESS IMMIGRATION</h3>
            <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className='btn btn-primary'>get Started</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carosel-height"
            src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carosel-height"
            src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;