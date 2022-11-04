import React, { useState } from 'react'


function Rating() {

const [star, setStar] = useState(0);

const increaseStar = () => {
  setStar(1);
}

const increaseStar1 = () => {
  setStar(2);
}

const increaseStar2 = () => {
  setStar(3);
}

const increaseStar3 = () => {
  setStar(4);
}

const increaseStar4 = () => {
  setStar(5);
}

  return (
    <div className='rating'>
      {star}
      <button onClick={increaseStar} >1 Star</button>
      <button onClick={increaseStar1} >2 Star</button>
      <button onClick={increaseStar2} >3 Star</button>
      <button onClick={increaseStar3} >4 Star</button>
      <button onClick={increaseStar4} >5 Star</button>



    </div>
  )
}

export default Rating