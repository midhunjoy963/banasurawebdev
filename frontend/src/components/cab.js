//import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './rating';

const Cab = ({cab})=>{
    return (
      <Card>
        <Link to={`/cabs/${cab._id}`}>
          <Card.Img variant="top" src={cab.image} style={{height:'18rem' }}/>
        </Link>
        <Card.Body>
          <Link to={`/cabs/${cab._id}`}>
            <Card.Title>{cab.name}</Card.Title>
          </Link>
          <Card.Text variant="bottom">
            {cab.discription}
          </Card.Text>
            
          <Rating rating={cab.rating} numreviews={cab.noOfReviews}></Rating>
          {/* <Button variant="primary">Book Ride</Button> */}
        </Card.Body>
      </Card>
    )

}

export default Cab;