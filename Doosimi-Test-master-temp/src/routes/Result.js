import React from 'react';
import RandomScore from './RandomScore';
import Adult from './Adult';
import Child from './Child';
import Shares from './Shares';
import Button from './button';

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
      <Shares />
      <Button />
    </>
  );
};

export default Result;
