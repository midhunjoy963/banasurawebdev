import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'
import { useState } from 'react';

const RatingSelector = ({passRatingToForm,rating}) => {
    const [ratingSelected ,setRatingHere] = useState(rating);
    const setRating =(ratingSelected)=>{
        setRatingHere(ratingSelected);
        passRatingToForm(ratingSelected);
    }
    return (
        <div className='ratingSelected'>
        <span onClick={()=>{
            setRating(1);
        }}>
          {ratingSelected>=1?<FaStar style={{color:"#68b072"}} />:<FaRegStar />}
        </span>
        <span onClick={()=>{
            setRating(2);
        }}>
          {ratingSelected>=2?<FaStar style={{color:"#68b072"}}/>:<FaRegStar />}
        </span>
        <span onClick={()=>{
            setRating(3);
        }}>
          {ratingSelected>=3?<FaStar style={{color:"#68b072"}} />:<FaRegStar />}
        </span>
        <span onClick={()=>{
            setRating(4);
        }}>
          {ratingSelected>=4?<FaStar style={{color:"#68b072"}}/>:<FaRegStar />}
        </span>
        <span onClick={()=>{
            setRating(5);
        }}>
          {ratingSelected>=5?<FaStar style={{color:"#68b072"}}/>:<FaRegStar />}
        </span>
        
       </div>
    )
  }
export default RatingSelector;