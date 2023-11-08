import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";
import RatingSelector from "../components/ratingSelector.jsx";
import { useCreateReviewMutation } from "../slices/cabApiSlice.js";
import { toast } from "react-toastify";

const ReviewForm = ({ cabId }) => {
  const { userInfo } =  useSelector((state) => state.auth);
  const {pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(!userInfo){
        console.log('not logged in....');
        navigate("/login",{ state: { redirectTo: pathname } });
    }
  });
  
  const [rating, setRating] = useState(0);
  const [comment, setComments] = useState("");
  const [addReview, { isAddingReview }] = useCreateReviewMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    try{
        const cab = await addReview({ cabId:cabId,rating: rating, comment: comment }).unwrap();
        console.log('cab with review...',cab);
    }
    catch(e){
        toast.error(e?.data?.message||e?.error, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
    

  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>How was the overall experience?</Form.Label>
        <RatingSelector
          passRatingToForm={setRating}
          rating={rating}
        ></RatingSelector>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Do you have something for us?</Form.Label>
        <Form.Control
          value={comment}
          as="textarea"
          rows={3}
          onChange={(e) => setComments(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ backgroundColor: "#68b072", border: "none" }}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
