import React from "react";
import { Button } from "@mui/material";
import UserNumberInput from "./UserNumberInput";

// TODO: block Buchstaben

export default function InputForm(props) {
  return (
    <div className="inputForm">
      <UserNumberInput
        name="straightA"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput
        name="angleBeta"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput
        name="straightC"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput
        name="angleAlpha"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput
        name="straightB"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <UserNumberInput
        name="angleGamma"
        handleInput={props.handleInput}
        userInput={props.userInput}
      />
      <Button variant="outlined" onClick={props.calculate}>
        Calculate
      </Button>
    </div>
  );
}
