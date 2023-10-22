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
        <>
          <h1>{cab.name}</h1>
          <Rating numreviews={cab.noOfReviews} rating={cab.rating}></Rating>
          <Row className="my-3">
            <Col key={cab._id} sm={12} md={6} lg={6} xl={6}>
              <Carousel fade>
                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="../images/touristspots/dam.jpg"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>

                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="../\cabs\6534230bf239f4ac12759676images/touristspots/chembra.jpg"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="../images/touristspots/9000.jpg"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container className="text-center homeimagecontainer">
                    <Image
                      src="../images/touristspots/caves.jpg"
                      style={{ height: "50vh", objectFit: "cover" }}
                    />
                  </Container>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Cabdetailscreen;
