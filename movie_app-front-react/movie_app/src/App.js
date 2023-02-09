import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h1>I like { name }</h1>
      <img src={picture}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfU91C%2FbtrroyqLD6T%2FDjcxlQNMDVU42HdICxYL0k%2Fimg.png',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFVqaE%2FbtrG8HlkyHS%2FbqKtQJCC3sZq5BRcxkuzEk%2Fimg.png'
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl0FRm%2FbtrFHdMBEMG%2F0M8b34EgS1HNz368iYChjk%2Fimg.png'
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image}></Food>
// }
// const renderFood = dish => <Food name={dish.name} picture={dish.image}></Food>;

function App() {
  return (
    <div>
      {/*{foodILike.map(renderFood)}*/}
      {foodILike.map(dish => {
        <Food name={dish.name} picture={dish.image}/>
      })}
    </div>
  );
}

export default App;
