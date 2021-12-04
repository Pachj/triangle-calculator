import React, { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import Canvas from "./Canvas";

function App() {
  const [userInput, setUserInput] = useState({
    straightA: 0,
    angleAlpha: 0,
    straightB: 0,
    angleBeta: 0,
    straightC: 0,
    angleGamma: 0,
  });

  const [showCanvas, setShowCanvas] = useState(false);
  const [isError, setIsError] = useState(false);

  const allSides = (userInputArray) => {
    const tmpUserInputArray = userInputArray;

    const a = userInputArray[0];
    const b = userInputArray[2];
    const c = userInputArray[4];

    tmpUserInputArray[1] =
      Math.acos((a * a - b * b - c * c) / (-2 * b * c)) / (Math.PI / 180);
    tmpUserInputArray[3] =
      Math.acos((b * b - a * a - c * c) / (-2 * a * c)) / (Math.PI / 180);
    tmpUserInputArray[5] = 180 - userInputArray[1] - userInputArray[3];

    return tmpUserInputArray;
  };

  const twoSidesAngleAttached = (userInputArray) => {
    const tmpUserInputArray = userInputArray;

    const sidesWithValue = [];
    tmpUserInputArray.forEach((item, position) => {
      if (item > 0 && position % 2 === 0) {
        sidesWithValue.push({ value: item, index: position });
      }
    });

    // index angehängter Winkel immer sideOne -1 oder sideTwo +1
    let sideOne = sidesWithValue[0];
    let sideTwo = sidesWithValue[1];

    // case if the two sides are a and b, array begins at a so side b would be sideOne even if index of it is higher
    if (sidesWithValue[0].index === 0 && sidesWithValue[1].index === 4) {
      // eslint-disable-next-line prefer-destructuring
      sideOne = sidesWithValue[1];
      // eslint-disable-next-line prefer-destructuring
      sideTwo = sidesWithValue[0];
    }

    let angleAtSideOneIndex = (sideOne.index - 1) % tmpUserInputArray.length;
    // only happens when sides a and c are present
    if (angleAtSideOneIndex === -1) {
      angleAtSideOneIndex = 5;
    }

    const angleAtSideTwoIndex = sideTwo.index + 1;
    const angleBetweenIndex = sideOne.index + 1;
    const sideThreeIndex = (sideTwo.index + 2) % tmpUserInputArray.length;

    let angleAtSideOne = tmpUserInputArray[angleAtSideOneIndex];
    let angleAtSideTwo = tmpUserInputArray[angleAtSideTwoIndex];
    let angleBetween = tmpUserInputArray[angleBetweenIndex];
    let angleAtSideOneRadians;
    let angleAtSideTwoRadians;

    if (angleAtSideOne > 0) {
      // calculate angleAtSideTwo

      angleAtSideOneRadians = (Math.PI / 180) * angleAtSideOne;
      angleAtSideTwoRadians = Math.asin(
        (Math.sin(angleAtSideOneRadians) / sideTwo.value) * sideOne.value
      );
      angleAtSideTwo = (180 / Math.PI) * angleAtSideTwoRadians;
    } else {
      // calculate angle at side one

      angleAtSideTwoRadians = (Math.PI / 180) * angleAtSideTwo;

      const sin = Math.sin(angleAtSideTwoRadians) / sideOne.value;

      angleAtSideOneRadians = Math.asin(sin * sideTwo.value);

      angleAtSideOne = (180 / Math.PI) * angleAtSideOneRadians;
    }
    angleBetween = 180 - angleAtSideOne - angleAtSideTwo;

    const angleBetweenRadians = (Math.PI / 180) * angleBetween;
    const sideThree =
      (sideTwo.value / Math.sin(angleAtSideOneRadians)) *
      Math.sin(angleBetweenRadians);

    tmpUserInputArray[angleBetweenIndex] = angleBetween;
    tmpUserInputArray[angleAtSideOneIndex] = angleAtSideOne;
    tmpUserInputArray[angleAtSideTwoIndex] = angleAtSideTwo;
    tmpUserInputArray[sideThreeIndex] = sideThree;

    return tmpUserInputArray;
  };

  const twoSidesAngleBetween = (userInputArray) => {
    const tmpUserInputArray = userInputArray;

    // same as twoSidesOneAngleAttached
    const sidesWithValue = [];

    tmpUserInputArray.forEach((item, position) => {
      if (item > 0 && position % 2 === 0) {
        sidesWithValue.push({ value: item, index: position });
      }
    });

    // index angehängter Winkel immer sideOne -1 oder sideTwo +1
    let sideOne = sidesWithValue[0];
    let sideTwo = sidesWithValue[1];

    // case if the two sides are a and b, array begins at a so side b would be sideOne even if index of it is higher
    if (sidesWithValue[0].index === 0 && sidesWithValue[1].index === 4) {
      // eslint-disable-next-line prefer-destructuring
      sideOne = sidesWithValue[1];
      // eslint-disable-next-line prefer-destructuring
      sideTwo = sidesWithValue[0];
    }

    let angleAtSideOneIndex = (sideOne.index - 1) % tmpUserInputArray.length;

    // only happens when sides a and c are present
    if (angleAtSideOneIndex === -1) {
      angleAtSideOneIndex = 5;
    }

    const angleAtSideTwoIndex = sideTwo.index + 1;
    const angleBetweenIndex = sideOne.index + 1;
    const sideThreeIndex = (sideTwo.index + 2) % tmpUserInputArray.length;
    const angleBetween = tmpUserInputArray[angleBetweenIndex];
    const angleBetweenRadians = (Math.PI / 180) * angleBetween;

    let angleAtSideOne = tmpUserInputArray[angleAtSideOneIndex];
    let angleAtSideTwo = tmpUserInputArray[angleAtSideTwoIndex];

    const cosine = Math.cos(angleBetweenRadians);
    const sideThree = Math.sqrt(
      // eslint-disable-next-line no-restricted-properties
      Math.pow(sideTwo.value, 2) +
        // eslint-disable-next-line no-restricted-properties
        Math.pow(sideOne.value, 2) -
        2 * sideTwo.value * sideOne.value * cosine
    );

    // same as before
    // you can calculate angle of side two if you have angle at side one, side one and side two
    const angleAtSideOneRadians = Math.asin(
      (Math.sin(angleBetweenRadians) / sideThree) * sideTwo.value
    );
    angleAtSideOne = angleAtSideOneRadians / (Math.PI / 180);
    angleAtSideTwo = 180 - angleAtSideOne - angleBetween;

    tmpUserInputArray[angleBetweenIndex] = angleBetween;
    tmpUserInputArray[angleAtSideOneIndex] = angleAtSideOne;
    tmpUserInputArray[angleAtSideTwoIndex] = angleAtSideTwo;
    tmpUserInputArray[sideThreeIndex] = sideThree;

    return tmpUserInputArray;
  };

  const oneSideAngleAttachedAngleFloating = (userInputArray) => {
    const tmpUserInputArray = userInputArray;

    let side;
    let angleAttached;
    let angleFloating;

    let angleAttachedBeforeBool = false;
    let angleAttachedAfterBool = false;

    let angleAttachedBeforeIndex;

    tmpUserInputArray.forEach((item, position) => {
      if (item > 0 && position % 2 === 0) {
        // angle before is y
        angleAttachedBeforeIndex = position - 1;
        if (angleAttachedBeforeIndex === -1) {
          angleAttachedBeforeIndex = 5;
        }

        angleAttachedBeforeBool =
          tmpUserInputArray[angleAttachedBeforeIndex] > 0;
        angleAttachedAfterBool = tmpUserInputArray[position + 1] > 0;

        const angleAttachedBool =
          angleAttachedBeforeBool || angleAttachedAfterBool;
        const angleAttachedAndAngleFloating =
          angleAttachedBool &&
          tmpUserInputArray[(position + 3) % tmpUserInputArray.length] > 0;

        if (angleAttachedAndAngleFloating) {
          side = { value: item, index: position };
          const angleFloatingIndex = (position + 3) % tmpUserInputArray.length;
          angleFloating = {
            value: tmpUserInputArray[angleFloatingIndex],
            index: angleFloatingIndex,
          };

          if (angleAttachedBeforeBool) {
            angleAttached = tmpUserInputArray[angleAttachedBeforeIndex];
          } else {
            angleAttached = tmpUserInputArray[position + 1];
          }
        }
      }
    });
    let angleAfter;
    let angleBefore;
    // angle that is known is after the known side
    if (angleAttachedAfterBool) {
      angleAfter = angleAttached;
      angleBefore = 180 - angleAfter - angleFloating.value;
    }
    // angle that is known is before the known side
    else {
      angleBefore = angleAttached;
      angleAfter = 180 - angleBefore - angleFloating.value;
    }
    // we have all angles and one side
    const angleFloatingRadians = (Math.PI / 180) * angleFloating.value;
    const sineFloating = Math.sin(angleFloatingRadians);

    const angleAfterRadians = (Math.PI / 180) * angleAfter;
    const sineAfter = Math.sin(angleAfterRadians);

    const angleBeforeRadians = (Math.PI / 180) * angleBefore;
    const sineBefore = Math.sin(angleBeforeRadians);

    const midValue = side.value / sineFloating;
    const sideThree = midValue * sineAfter;
    const sideThreeIndex = (angleFloating.index + 1) % tmpUserInputArray.length;

    const sideTwo = midValue * sineBefore;
    const sideTwoIndex = angleFloating.index - 1;

    tmpUserInputArray[side.index + 1] = angleAfter;
    tmpUserInputArray[angleAttachedBeforeIndex] = angleBefore;
    tmpUserInputArray[angleFloating.index] = angleFloating.value;
    tmpUserInputArray[sideThreeIndex] = sideThree;
    tmpUserInputArray[sideTwoIndex] = sideTwo;
    return tmpUserInputArray;
  };

  const sideWithTwoAttachedAngles = (userInputArray) => {
    const tmpUserInputArray = userInputArray;

    let side;
    let angleBefore;
    let angleAfter;

    tmpUserInputArray.forEach((item, position) => {
      if (item > 0 && position % 2 === 0) {
        // angle before is y
        let angleAttachedBeforeIndex = position - 1;
        if (angleAttachedBeforeIndex === -1) {
          angleAttachedBeforeIndex = 5;
        }

        const angleAttachedBeforeBool =
          tmpUserInputArray[angleAttachedBeforeIndex] > 0;
        const angleAttachedAfterBool = tmpUserInputArray[position + 1] > 0;

        if (angleAttachedBeforeBool && angleAttachedAfterBool) {
          side = { value: item, index: position };

          angleBefore = {
            value: tmpUserInputArray[angleAttachedBeforeIndex],
            index: angleAttachedBeforeIndex,
          };
          angleAfter = {
            value: tmpUserInputArray[position + 1],
            index: position + 1,
          };
        }
      }
    });

    const angleFloating = {
      value: 180 - angleBefore.value - angleAfter.value,
      index: (angleAfter.index + 2) % tmpUserInputArray.length,
    };

    // exactly the same as OneSideAngleAttachedAngleFloating
    const angleFloatingRadians = (Math.PI / 180) * angleFloating.value;
    const sineFloating = Math.sin(angleFloatingRadians);

    const angleAfterRadians = (Math.PI / 180) * angleAfter.value;
    const sineAfter = Math.sin(angleAfterRadians);

    const angleBeforeRadians = (Math.PI / 180) * angleBefore.value;
    const sineBefore = Math.sin(angleBeforeRadians);

    const midValue = side.value / sineFloating;
    const sideThree = midValue * sineAfter;
    const sideThreeIndex = (angleFloating.index + 1) % tmpUserInputArray.length;

    const sideTwo = midValue * sineBefore;
    const sideTwoIndex = angleFloating.index - 1;

    tmpUserInputArray[angleAfter.index] = angleAfter.value;
    tmpUserInputArray[angleBefore.index] = angleBefore.value;
    tmpUserInputArray[angleFloating.index] = angleFloating.value;
    tmpUserInputArray[sideThreeIndex] = sideThree;
    tmpUserInputArray[sideTwoIndex] = sideTwo;

    return tmpUserInputArray;
  };

  const twoAngles = (userInputArray) => {
    const tmpUserInputArray = userInputArray;

    const anglesWithValue = [];

    tmpUserInputArray.forEach((item, position) => {
      if (item > 0 && position % 2 === 1) {
        anglesWithValue.push({ value: item, index: position });
      }
    });

    let angleOne = anglesWithValue[0];
    let angleTwo = anglesWithValue[1];
    if (anglesWithValue[0].index === 1 && anglesWithValue[1].index === 5) {
      // eslint-disable-next-line prefer-destructuring
      angleOne = anglesWithValue[1];
      // eslint-disable-next-line prefer-destructuring
      angleTwo = anglesWithValue[0];
    }
    tmpUserInputArray[(angleTwo.index + 2) % tmpUserInputArray.length] =
      180 - angleOne.value - angleTwo.value;
    // set side in the middle to 100 (preparation for sideWithTwoAttachedAngles)
    tmpUserInputArray[angleOne.index + (1 % tmpUserInputArray.length)] = 100;

    return tmpUserInputArray;
  };

  const initCalcMap = [
    {
      calcFunction: allSides,
      mappingArrays: [[1, 0, 1, 0, 1, 0]],
      matchingCount: 0,
      minRequiredMatches: 3,
    },
    {
      calcFunction: twoSidesAngleAttached,
      mappingArrays: [
        [0, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [1, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
      ],
      matchingCount: 0,
      minRequiredMatches: 3,
    },
    {
      calcFunction: twoSidesAngleBetween,
      mappingArrays: [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0],
      ],
      matchingCount: 0,
      minRequiredMatches: 3,
    },
    {
      calcFunction: oneSideAngleAttachedAngleFloating,
      mappingArrays: [
        [0, 0, 1, 1, 0, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
      ],
      matchingCount: 0,
      minRequiredMatches: 3,
    },
    {
      calcFunction: sideWithTwoAttachedAngles,
      mappingArrays: [
        [0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 0],
      ],
      matchingCount: 0,
      minRequiredMatches: 3,
    },
    {
      calcFunction: twoAngles,
      mappingArrays: [
        [0, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0],
      ],
      matchingCount: 0,
      minRequiredMatches: 2,
    },
  ];

  const compareInputToCalcMappings = () => {
    const flattenValue = (input) => (input === 0 ? 0 : 1);

    const userInputArray = [
      userInput.straightA,
      userInput.angleBeta,
      userInput.straightC,
      userInput.angleAlpha,
      userInput.straightB,
      userInput.angleGamma,
    ];

    const userInputArrayFlattened = [
      flattenValue(userInput.straightA),
      flattenValue(userInput.angleBeta),
      flattenValue(userInput.straightC),
      flattenValue(userInput.angleAlpha),
      flattenValue(userInput.straightB),
      flattenValue(userInput.angleGamma),
    ];

    const calcMap = initCalcMap;

    // loop through all calc maps
    calcMap.forEach((actualCalcMap, i) => {
      const tmpCountArray = [];
      // loop through all mapping arrays
      actualCalcMap.mappingArrays.forEach((actualMappingArray) => {
        let tmpCount = 0;
        // loop through each value in the mapping array
        actualMappingArray.forEach((actualMappingArrayValue, j) => {
          if (
            actualMappingArrayValue === 1 &&
            userInputArrayFlattened[j] === 1
          ) {
            tmpCount += 1;
          }
        });
        tmpCountArray.push(tmpCount);
      });
      calcMap[i].matchingCount = Math.max.apply(null, tmpCountArray);
    });
    calcMap.sort((a, b) => b.matchingCount - a.matchingCount);

    if (calcMap[0].minRequiredMatches <= calcMap[0].matchingCount) {
      const result = calcMap[0].calcFunction(userInputArray);

      setUserInput({
        straightA: result[0],
        angleBeta: result[1],
        straightC: result[2],
        angleAlpha: result[3],
        straightB: result[4],
        angleGamma: result[5],
      });

      setShowCanvas(true);
    } else {
      setShowCanvas(false);
      setIsError(true);
    }
  };

  const handleInput = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const resetCalculator = () => {
    setUserInput({
      straightA: 0,
      angleBeta: 0,
      straightC: 0,
      angleAlpha: 0,
      straightB: 0,
      angleGamma: 0,
    });

    setShowCanvas(false);
    setIsError(false);
  };

  return (
    <div className="App">
      <h1>Triangle Calculator</h1>
      <InputForm
        handleInput={handleInput}
        userInput={userInput}
        calculate={compareInputToCalcMappings}
        disabled={showCanvas}
        resetCalculator={resetCalculator}
      />
      {isError === true ? (
        <div className="errorContainer">
          <p>Mit diesen Eingaben ist keine Berechnung möglich.</p>
        </div>
      ) : (
        ""
      )}
      {showCanvas === true ? (
        <Canvas sideC={50} sideA={100} angleB={100} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
