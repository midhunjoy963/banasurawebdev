import React from 'react';
import { Carousel,Image,Container } from 'react-bootstrap';
import '../assets/styles/styles.css';

const homepagegallery = () => {
  return (
    
    <Carousel  fade >
      
        <Carousel.Item >
        <Container className="text-center homeimagecontainer" > 
            <Image  src="../images/touristspots/dam.png" />
        </Container>
        <Carousel.Caption  >
          <h3>Banasura Sagar Dam</h3>
          <p>Banasura Sagar Dam is a picturesque tourist hotspot in Wayanad. Its sprawling reservoir of clear water is surrounded by lush green hills and it’s dotted with tiny islands.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      
    
      <Carousel.Item>
        <Container className="text-center homeimagecontainer">
            <Image src="../images/touristspots/chembra.png" />
        </Container>
        <Carousel.Caption>
          <h3>Chembra Peak</h3>
          <p>Surrounded by hills, tea plantations and lush green valley, Chembra Peak is the highest mountain peak in Wayanad. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="text-center homeimagecontainer">
            <Image src="../images/touristspots/9000kandi.png"  />
        </Container>
        <Carousel.Caption>
          <h3>9000 Kandi</h3>
          <p>In the deep reaches of Wayanad in Kerala, there is a lush green paradise where adventure meets serenity</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="text-center homeimagecontainer">
            <Image src="../images/touristspots/edakel.png"  />
        </Container>
        <Carousel.Caption>
          <h3>Edakkal caves</h3>
          <p>The Edakkal caves are two natural caves at a remote location at Edakkal, 25 km (15.5 mi) from Kalpetta in the Wayanad district of Kerala in India.</p>
        </Carousel.Caption>
      </Carousel.Item> 
      
      
    </Carousel>
    
  )
}

export default homepagegallery