import React from 'react';
import { AnimatedCircle } from './AnimatiedCircle.styles';

const RandomScore = () => {
  // random 인수 구하는 method
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let resultRandom = getRandom(1, 4);

  const scoreList = [95, 91, 87];
  let result = scoreList[resultRandom - 1];
  let calcResult = result / 100;

  return (
    <div>
      <div>start resultRandom</div>
      <div>{resultRandom}</div>
      <div>result</div>
      <div>{result}</div>
      <h1>circle</h1>
      <div
        style={{
          marginTop: '50px',
          marginLeft: '50px',
        }}
      >
        <div style={{ width: '50px', height: '50px' }}>
          <svg viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="beige"
              strokeWidth="23"
            />
            <AnimatedCircle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="red"
              strokeWidth="23"
              strokeDasharray={`${2 * Math.PI * 90 * calcResult} ${
                2 * Math.PI * 90 * (1 - calcResult)
              }`}
              strokeDashoffset={2 * Math.PI * 90 * (1 - calcResult)}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RandomScore;
