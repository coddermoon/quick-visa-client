import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel fade className="position-relative">
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100 crimg "
          src="https://img.freepik.com/free-photo/visa-application-composition-with-canadian-flag_23-2149117799.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className=" fw-bold d-1">
            SKILLED & BUSINESS IMMIGRATION
          </h2>
          <h4 className=" fw-bold">
            We Provide Clear Advice For Your Migration To Canada, Australia, USA
          </h4>
          <button className="btn btn-primary mt-3">get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100 crimg"
          src="https://img.freepik.com/free-photo/american-visa-document_1101-820.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className=" fw-bold d-1">
            SKILLED & BUSINESS IMMIGRATION
          </h2>
          <h5 className="fw-bold">
            We Provide Clear Advice For Your Migration To Canada, Australia, USA
          </h5>
          <button className="btn btn-primary mt-3">get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    
    
    </Carousel>
  );
};

export default Slider;
