
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
   constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings+1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings+1
        }));
      }
  }
    }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
       Hi I'm Advitiya Sharma, A highly motivated and versatile Computer Engineering student at the University of Waterloo, I bring a unique blend of technical expertise, leadership, and creativity. With hands-on experience in software engineering, web design, and yoga instruction, I thrive in environments where collaboration and problem-solving are key. Whether developing engaging websites, optimizing systems for better performance, or fostering personal growth through teaching, I consistently seek opportunities to combine innovation and impact.

I excel in high-pressure situations, demonstrated by my ability to manage multiple tasks as a Yoga Instructor while refining my communication and public speaking skills. My technical acumen spans C++, Python, HTML5, and more, while my leadership abilities are evident through scholarships and achievements, including a state-level yoga title. Driven by curiosity and the desire to learn, I approach challenges with a growth mindset, constantly improving both personally and professionally.

With a focus on creating positive user experiences and a passion for problem-solving, I am eager to contribute to projects that push boundaries and drive change. My blend of technical skill and interpersonal empathy sets me apart as a dynamic and adaptable professional.
        </p>
        <div className='rating-buttons'>
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button"onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button> 
               <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
