import React, { useEffect, useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import Canvas from './Canvas';

function App() {
  const [userInput, setUserInput] = useState({
    straightA: 115,
    angleA: 0,
    straightB: 0,
    angleB: 0,
    straightC: 0,
    angleC: 0,
  });

  const flattenValue = (input) => (input === 0 ? 0 : 1);

  // eslint-disable-next-line no-unused-vars
  const [userInputArray, setUserInputArray] = useState([
    flattenValue(userInput.straightA),
    flattenValue(userInput.angleB),
    flattenValue(userInput.straightC),
    flattenValue(userInput.angleA),
    flattenValue(userInput.straightB),
    flattenValue(userInput.angleC),
  ]);

  // eslint-disable-next-line no-unused-vars
  const [calcMap, setCalcMap] = useState([]);

  const initCalcMap = [
    {
      calcFunction: 'allSides',
      mappingArrays: [[1, 0, 1, 0, 1, 0]],
      matchingCount: 0,
    },
    {
      calcFunction: 'twoSidesAngleAttached',
      mappingArrays: [
        [0, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [1, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
      ],
      matchingCount: 0,
    },
    {
      calcFunction: 'twoSidesAngleBetween',
      mappingArrays: [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0],
      ],
      matchingCount: 0,
    },
    {
      calcFunction: 'oneSideAngleAttachedAngleFloating',
      mappingArrays: [
        [0, 0, 1, 1, 0, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
      ],
      matchingCount: 0,
    },
    {
      calcFunction: 'sideWithTwoAttachedAngles',
      mappingArrays: [
        [0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 0],
      ],
      matchingCount: 0,
    },
    {
      calcFunction: 'twoAngles',
      mappingArrays: [
        [0, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0],
      ],
      matchingCount: 0,
    },
  ];

  const compareInputToCalcMappings = () => {
    const tmpCalcMap = initCalcMap;

    // loop through all calc maps
    tmpCalcMap.forEach((actualCalcMap, i) => {
      const tmpCountArray = [];
      // loop through all mapping arrays
      actualCalcMap.mappingArrays.forEach((actualMappingArray) => {
        let tmpCount = 0;
        // loop through each value in the mapping array
        actualMappingArray.forEach((actualMappingArrayValue, j) => {
          if (userInputArray[j] === actualMappingArrayValue) {
            tmpCount += 1;
          }
        });
        tmpCountArray.push(tmpCount);
      });
      tmpCalcMap[i].matchingCount = Math.max.apply(null, tmpCountArray);
    });
    setCalcMap(tmpCalcMap);
  };

  const handleInput = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  // just for testing
  useEffect(() => {
    compareInputToCalcMappings();
    console.log(calcMap);
  }, []);

  return (
    <div className="App">
      <InputForm handleInput={handleInput} userInput={userInput} />
      <Canvas sideC={50} sideA={100} angleB={100} />
    </div>
  );
}

export default App;
