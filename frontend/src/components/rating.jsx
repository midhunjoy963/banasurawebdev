import React from 'react';
import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'

const rating = ({rating,numreviews}) => {
  return (
   <div className='rating'>
    <span>
      {rating>=1?<FaStar />:rating>=0.5?<FaStarHalfAlt />:<FaRegStar />}
    </span>
    <span>
      {rating>=2?<FaStar />:rating>=1.5?<FaStarHalfAlt />:<FaRegStar />}
    </span>
    <span>
      {rating>=3?<FaStar />:rating>=2.5?<FaStarHalfAlt />:<FaRegStar />}
    </span>
    <span>
      {rating>=4?<FaStar />:rating>=3.5?<FaStarHalfAlt />:<FaRegStar />}
    </span>
    <span>
      {rating>=5?<FaStar />:rating>=4.5?<FaStarHalfAlt />:<FaRegStar />}
    </span>
    {numreviews&&<span className='rating-text'>{`${numreviews} Reviews`}</span>}
   </div>
  )
}

export default rating