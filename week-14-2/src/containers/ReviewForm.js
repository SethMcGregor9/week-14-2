import React, { useState } from 'react'
import Rating from './Rating';



function ReviewForm() {

  const [review, setReview] = useState([]);
  const [newReview, setNewReview] = useState("");
  
  
  const handleReview = (event) =>{
    setNewReview(event.target.value);
   }
  
  
  
  const addReview = () => {
    const twoReview = [...review, newReview];
    setReview(twoReview);
  };
  
  return(
  <div>
  
  
  
  
  
  <div className='addReview'>
    <textarea className="input" onChange={handleReview} />
    <button onClick={addReview}>Sumbit</button>
  </div>
  
  
  <div className='list'>
  
    {review.map((Review)  => {
  return <p>{Review}</p>
    })}
    
    </div>
  
<Rating />


  </div>
  
  
   
  )}


export default ReviewForm