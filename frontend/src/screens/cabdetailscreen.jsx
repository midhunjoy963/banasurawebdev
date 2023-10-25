import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetCabDetailQuery } from ".././slices/cabApiSlice.js";
import { useParams } from "react-router-dom";
import Loading from "../components/loading.js";
import Rating from "../components/rating";
import { Carousel, Image, Container } from "react-bootstrap";

const Cabdetailscreen = () => {
  const { id: cabId } = useParams();
  const { data: cab, isLoading, error } = useGetCabDetailQuery(cabId);
  console.log(cab);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <h1>{cab.name}</h1>
          <Rating numreviews={cab.noOfReviews} rating={cab.rating}></Rating>
          <Row className="my-3">
            <Col key={cab._id} sm={12} md={6} lg={6} xl={6}>
              <Carousel fade>
                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="https://images.pexels.com/photos/18547037/pexels-photo-18547037/free-photo-of-man-driving-hindustan-ambassador-as-taxi.jpeg?auto=compress&cs=tinysrgb&w=600"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <h4>Contact Details</h4>
              <h5>Seating Capacity: 4</h5>
              <h5>Charge/Km: {cab.chargePerKm} </h5>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Cabdetailscreen;
