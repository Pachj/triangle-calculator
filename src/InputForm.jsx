import React from 'react';
import UserNumberInput from './UserNumberInput';

export default function InputForm(props) {
  return (
    <>
      <UserNumberInput
        name="straightA"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput name="angleA" handleInput={props.handleInput} userInput={props.userInput} />
      <UserNumberInput
        name="straightB"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput name="angleB" handleInput={props.handleInput} userInput={props.userInput} />
      <UserNumberInput
        name="straightC"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput name="angleC" handleInput={props.handleInput} userInput={props.userInput} />
    </>
  );
}
