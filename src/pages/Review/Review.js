import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../Assets/contexts/AuthProvider";
import CommentBox from "./CommentBox";
import ReviewCard from "./ReviewCard";

const Review = ({ id }) => {
  const [comment, setComment] = useState([]);
  const { user } = useContext(AuthContext);

  const handleComment = (e) => {
    e.preventDefault();
    const commentSingle = e.target.comment.value;
    const name = user?.displayName;
    const photo = user?.photoURL;

    const review = {
      commentSingle,
      name,
      id,
      photo,
    };
    

    fetch(`http://localhost:5000/review`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(review),
    })
    .then(res => res.json())
    .then(data => 
      
      {
        if(data.acknowledged){
            toast.success('User added successfully');
           
        }
    })
    
    const totalComment = [...comment, review];
    setComment(totalComment);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review?id=${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
      
  }, [id]);




  return (
    <div>
      <div>
        <h2 className="text-center my-3 ">What Client Say </h2>
        <hr />
      </div>
      <Row className="sticky-top">
        <Col md="8">
          <h1>Comments</h1>

          {
    comment.map(cm=><ReviewCard 
          key={cm._id}
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
