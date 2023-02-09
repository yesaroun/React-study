import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return (
    <div>
      <h1>I like { name }</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    rating: 5.0,
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfU91C%2FbtrroyqLD6T%2FDjcxlQNMDVU42HdICxYL0k%2Fimg.png',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    rating: 4.0,
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFVqaE%2FbtrG8HlkyHS%2FbqKtQJCC3sZq5BRcxkuzEk%2Fimg.png'
  },
  {
    id: 3,
    name: 'Bibimbap',
    rating: 3.0,
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl0FRm%2FbtrFHdMBEMG%2F0M8b34EgS1HNz368iYChjk%2Fimg.png'
  }
];

function App() {
  return (
    <div>
      {/*{foodILike.map(renderFood)}*/}
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
