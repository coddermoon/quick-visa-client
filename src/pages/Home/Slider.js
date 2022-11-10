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
            <h2 className='text-dark fw-bold d-1'>SKILLED & BUSINESS IMMIGRATION</h2>
            <p className='text-dark'>We Provide Clear Advice For Your Migration To Canada, Australia, USA</p>
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
            <h2>CHOOSE YOUR DESTINATION!</h2>
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
            <h1>SKILLED & BUSINESS IMMIGRATION</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;