import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './rating';
import {useSelector,useDispatch} from 'react-redux';

const Cab = ({cab})=>{
    const {userInfo} = useSelector((state)=>state.auth);
    return (
      <Card>
        <Link to={`/api/cabs/${cab._id}`}>
          <Card.Img variant="top" src={`/${cab.image}`} style={{height:'18rem' }}/>
        </Link>
        <Card.Body>
          <Link to={`/api/cabs/${cab._id}`}>
            <Card.Title>{cab.name}</Card.Title>
          </Link>
          <Card.Text variant="bottom">
            {cab.discription}
          </Card.Text>
            
          <Rating rating={cab.rating} numreviews={cab.noOfReviews}></Rating>
          {userInfo?.isAdmin && <Button className='my-3' variant="primary">Edit</Button> }
        </Card.Body>
      </Card>
    )

}

export default Cab;

