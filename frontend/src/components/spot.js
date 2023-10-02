import React from 'react'
import Card from 'react-bootstrap/Card';
import '../assets/styles/styles.css';

 const spot = ({spot}) => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={spot.image} alt="" fluid />
      <Card.ImgOverlay>
        <Card.Title >{spot.title}</Card.Title>
        <Card.Text >
          {spot.text}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
export default spot;
