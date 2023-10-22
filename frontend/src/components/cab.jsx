import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Rating from "./rating";

const Cab = ({ cab }) => {
  return (
    <Card>
      <Link to={`/cabs/${cab._id}`}>
        <Card.Img
          variant="top"
          src={`/${cab.image}`}
          style={{ height: "18rem" }}
        />
      </Link>
      <Card.Body>
        <Link
          style={{ textDecoration: "none", color: "#68b072" }}
          to={`/cabs/${cab._id}`}
        >
          <b>
            <Card.Title>{cab.name}</Card.Title>
          </b>
        </Link>
        <Card.Text variant="bottom">
          <b>{cab.discription}</b>
        </Card.Text>
        <Rating rating={cab.rating} numreviews={cab.noOfReviews}></Rating>
      </Card.Body>
    </Card>
  );
};

export default Cab;
