import React from 'react';
import { AnimatedCircle } from './AnimatiedCircle.styles';

const RandomScore = () => {
  // random 인수 구하는 method
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let resultRandom = getRandom(1, 4);

  const scoreList = [95, 91, 87];
  let result = scoreList[resultRandom - 1];

  return (
    <div>
      <div>start resultRandom</div>
      <div>{resultRandom}</div>
      <div>result</div>
      <div>{result}</div>
      <h1>circle</h1>
      <div style={{ marginTop: '50px', marginLeft: '50px' }}>
        <div style={{ width: '100px', height: '100px' }}>
          <svg viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="beige"
              strokeWidth="20"
            />
            <AnimatedCircle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="red"
              strokeWidth="20"
              strokeDasharray={`${2 * Math.PI * 90 * 0.92} ${
                2 * Math.PI * 90 * 0.08
              }`}
              strokeDashoffset={2 * Math.PI * 90 * 0.08}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RandomScore;
