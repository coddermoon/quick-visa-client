import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Benifits = () => {
  const [benifits, setBenifits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/benifits")
      .then((res) => res.json())
      .then((data) => setBenifits(data));
  }, []);

  return (
    <Container>
      <h2 className="text-center my-5">Why Choose Me</h2>

      <div>
        <Row className="align-items-center">
          <Col md="6">
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-photo/accountant-office_1098-13392.jpg"
              alt="professional"
            />
          </Col>
          <Col md="6">
            <Row>
            {benifits.map((benifit) => (
              <Col md='6'>
                <Card className="my-3">
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      be
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Benifits;
