import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CommentBox from './CommentBox';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <div>
            <div>
            <h2 className='text-center my-3 '>What Client Say </h2>
            <hr />

        </div>
        <Row  className='sticky-top'>
            <Col md='8'>
                <ReviewCard/>
            </Col>
            <Col md='4'>
                <CommentBox/>
            </Col>
        </Row>
        </div>
    );
};

export default Review;