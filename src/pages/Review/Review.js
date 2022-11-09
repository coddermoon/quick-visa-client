import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AuthContext } from "../../Assets/contexts/AuthProvider";
import CommentBox from "./CommentBox";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [comment, setComment] = useState([]);
  const { user } = useContext(AuthContext);

  const handleComment = (e) => {
    e.preventDefault();
  const  commentSingle = e.target.comment.value
  const name = user?.displayName

    const review = {
       commentSingle,name
        
    }
    const  totalComment = [...comment,review]
    setComment(totalComment)
  };

  useEffect(() => {


  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center my-3 ">What Client Say </h2>
        <hr />
      </div>
      <Row className="sticky-top">
        <Col md="8">



{
    comment.map(cm=><ReviewCard 
          
        comment={cm}
        />)
}

          
        </Col>
        <Col md="4">
          <CommentBox handleComment={handleComment} />
        </Col>
      </Row>
    </div>
  );
};

export default Review;
