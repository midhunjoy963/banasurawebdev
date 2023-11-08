import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  useGetCabDetailQuery,
  useGetContactDetailsQuery } from '../../slices/cabApiSlice';
import Loading from '../../components/loading';
import Rating from '../../components/rating';
import FormContainer from '../../components/formContainer';
import { Container,Row,Col,Carousel,Image,Button } from 'react-bootstrap';
import { FaEdit ,FaMobile} from 'react-icons/fa';

const CabEditDetailsScreen = () => {
  const { id: cabId } = useParams();
  const { data: cab, isLoading } = useGetCabDetailQuery(cabId);
  const {data:contact,isLoading:isContactLoading} = useGetContactDetailsQuery(cabId);
  const [isEditMode,setMode] = useState(false);
  const goToEditMode = () =>{
    setMode(true);
  } 

  return (
    <>
      
      {isLoading ? (
        <Loading />
      ) : (
        <Container >
          <Row className='align-items-center'>
                <Col className='text-end'>
                  <Button onClick={goToEditMode} ><FaEdit />Edit Details Page</Button>
                </Col>
          </Row>
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
            {isContactLoading?(<Loading />):
            contact?(
              <Col sm={12} md={3} lg={3} xl={3}>
                <h2>Contact </h2>
                <FaMobile />{contact.number}
              <h4>Contact Details </h4>
              
            </Col>
            ):
            (
            <Col sm={12} md={3} lg={3} xl={3}>
            <FormContainer>
                <h4>here form will come</h4>
            </FormContainer>
            </Col>
            )}

            <Col sm={12} md={3} lg={3} xl={3}>
              <h5>Seating Capacity: 4</h5>
              <h5>Charge/Km: {cab.chargePerKm} </h5>
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
  )
}

export default CabEditDetailsScreen;