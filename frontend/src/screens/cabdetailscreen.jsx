import React from "react";
import { Row, Col,Container, Carousel, Image,ListGroup } from "react-bootstrap";
import {FaPhoneSquare} from 'react-icons/fa';
import {BiLogoWhatsapp,BiLogoGmail} from 'react-icons/bi';
import {Link,useNavigate} from 'react-router-dom'
import { 
  useGetCabDetailQuery,
  useGetContactDetailsQuery 
} from ".././slices/cabApiSlice.js";
import { useParams } from "react-router-dom";
import Loading from "../components/loading.jsx";
import Rating from "../components/rating";


const Cabdetailscreen = () => {
  const { id: cabId } = useParams();
  const { data: cab, isLoading } = useGetCabDetailQuery(cabId);
  const {data:contact,isLoading:isContactLoading} = useGetContactDetailsQuery(cabId);
  
  return (
    <>
      
      {isLoading ? (
        <Loading />
      ) : (
        <Container >
          <Row className="my-3">
            <Col>
              <h1>{cab.name}</h1>
              <Rating numreviews={cab.noOfReviews} rating={cab.rating}></Rating>
            </Col>
          </Row>
          
          
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
            {isContactLoading?(<Loading />):contact?(
              <Col className="my-3" sm={12} md={3} lg={3} xl={3}>
                <h4 className="text-center">Contact Details </h4>
                <ListGroup variant="">
                  <ListGroup.Item  className="d-flex justify-content-between align-items-center"><FaPhoneSquare size='1.5rem' color='green'/>{contact.number}</ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center"> 
                    <BiLogoWhatsapp size='1.5rem' color='green' />
                    {contact.number}</ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center"><BiLogoGmail size='1.5rem' color='red'/>midhunjoy963@gmail.com</ListGroup.Item>
                </ListGroup>
            </Col>
            ):(
              <Col sm={12} md={3} lg={3} xl={3}>
                <h3>No Contacts Found</h3>
              </Col>
            )}
            <Col className="my-3" sm={12} md={3} lg={3} xl={3}>
              <h4 className="text-center">More Info</h4>
              <ListGroup>
                <ListGroup.Item> 
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Seating Capacity</span>
                    <span className="text-end">25</span>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item> 
                  <div className="d-flex justify-content-between align-items-center">
                    <span>AC</span>
                    <span className="text-end">Available</span>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item> 
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Luggage Capacity</span>
                    <span className="text-end">2 large suitcases </span>
                  </div>
                </ListGroup.Item>
                
              </ListGroup>
            </Col>
            
            
          </Row>
          <Container className="my-3">
            <Row className="my-3">
              <Col >col 1 row 1</Col>
            </Row>
            <Row className="my-3">  
              <Col> col 2 Row2</Col>
            </Row>
          </Container>
         
        </Container>
      )}
    </>
  );
};

export default Cabdetailscreen;
