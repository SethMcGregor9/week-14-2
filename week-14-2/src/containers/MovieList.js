import React from 'react'
import ReviewForm from './ReviewForm'



function MovieList() {
  return (
    <div>
      <Movie title= "About Time" poster = "https://m.media-amazon.com/images/I/51oA7+NI2gL._AC_SY580_.jpg" descrip = "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think." />

      <Movie title="Up" poster = "https://www.scriptslug.com/assets/posters/_posterPageJpg/up-2009.jpg" descrip="78-year-old balloon salesman Carl Fredricksen is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a stowaway aboard: a Boy Scout named Russell." />  

      <Movie title="Moana" poster = "https://www.hollywoodreporter.com/wp-content/uploads/2016/06/moana_movie_poster_p_2016.jpg" descrip="Moana is a sea-loving, strong-willed wayfarer. Though she has moments of self-doubt, she has great pride in who she is, and doesn't back away from new challenges. She approaches new experiences and tasks with the utmost seriousness and will stand her ground to fight for what she values, even when all seems lost."  />

      <Movie title="Frozen" poster = "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg"   descrip="When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip." />

      <Movie title= "Remember The Titans" poster = "https://m.media-amazon.com/images/I/510TwairLCL._AC_.jpg" descrip = "In Virginia, high school football is a way of life, an institution revered, each game celebrated more lavishly than Christmas, each playoff distinguished more grandly than any national holiday. And with such recognition, comes powerful emotions. In 1971 high school football was everything to the people of Alexandria. But when the local school board was forced to integrate an all black school with an all white school, the very foundation of football's great tradition was put to the test." />
      
      <Movie title= "Scott Pilgram vs. The World" poster = "https://m.media-amazon.com/images/I/517XbXyIwRL._AC_.jpg" descrip = "As bass guitarist for a garage-rock band, Scott Pilgrim (Michael Cera) has never had trouble getting a girlfriend; usually, the problem is getting rid of them. But when Ramona Flowers (Mary Elizabeth Winstead) skates into his heart, he finds she has the most troublesome baggage of all: an army of ex-boyfriends who will stop at nothing to eliminate him from her list of suitors." />
        




    </div>

     
  )
}

const Movie = (props) => {
    return (
        <div className='movie'>
           
        <h2>{props.title}</h2>
        <img className='img' 
          src={props.poster} 
          alt={props.title} 
        />
        <h3>{props.descrip}</h3>
         <ReviewForm />
            
            
        </div>
    )
}



export default MovieList