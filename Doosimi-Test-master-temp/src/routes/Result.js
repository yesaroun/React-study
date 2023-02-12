import React from 'react';
import RandomScore from './RandomScore';
import Adult from './Adult';
import Child from './Child';

const Result = ({ age }) => {
  let ageChecker = true;
  if (age !== 0) {
    ageChecker = false;
  }

  return (
    <>
      <RandomScore />
      <div>Age</div>
      {ageChecker ? <Adult /> : <Child />}
    </>
  );
};

export default Result;
