import React from 'react';
import { Carousel,Image,Container } from 'react-bootstrap';
import '../assets/styles/styles.css';

const homepagegallery = () => {
  return (
    
    <Carousel fade >
      
        <Carousel.Item >
        <Container className="text-center homeimagecontainer" > 
            <Image  src="../images/touristspots/dam.jpg"  style={{ height: '100vh', objectFit: 'cover' }}  />
        </Container>
        <Carousel.Caption className='pb-5 mb-5 carousel-caption' >
          <h1 className='display-1'>Banasura Sagar Dam</h1>
          <p className='caption-text'>Banasura Sagar Dam is a picturesque tourist hotspot in Wayanad. Its sprawling reservoir of clear water is surrounded by lush green hills and it’s dotted with tiny islands.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      
    
      <Carousel.Item>
        <Container className="text-center homeimagecontainer">
            <Image src="../images/touristspots/chembra.jpg" style={{ height: '100vh', objectFit: 'cover' }} />
        </Container>
        <Carousel.Caption className='pb-5 mb-5' >
          <h1 className='display-1'>Chembra Peak</h1>
          <p className='caption-text'>Surrounded by hills, tea plantations and lush green valley, Chembra Peak is the highest mountain peak in Wayanad. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="text-center homeimagecontainer">
            <Image src="../images/touristspots/9000.jpg"  style={{ height: '100vh', objectFit: 'cover' }}/>
        </Container>
        <Carousel.Caption className='pb-5 mb-5' >
          <h1 className='display-1'>9000 Kandi</h1>
          <p className='caption-text'>In the deep reaches of Wayanad in Kerala, there is a lush green paradise where adventure meets serenity</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="text-center homeimagecontainer">
            <Image src="../images/touristspots/caves.jpg" style={{ height: '100vh', objectFit: 'cover' }} />
        </Container>
        <Carousel.Caption className='pb-5 mb-5' >
          <h1 className='display-1'>Edakkal caves</h1>
          <p className='caption-text'>The Edakkal caves are two natural caves at a remote location at Edakkal, 25 km (15.5 mi) from Kalpetta in the Wayanad district of Kerala in India.</p>
        </Carousel.Caption>
      </Carousel.Item> 
      
      
    </Carousel>
    
  )
}

export default homepagegallery