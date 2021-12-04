import React from "react";
import { Button } from "@mui/material";
import UserNumberInput from "./UserNumberInput";

export default function InputForm(props) {
  return (
    <div className="inputForm">
      <UserNumberInput
        name="straightA"
        handleInput={props.handleInput}
        userInput={props.userInput}
        disabled={props.disabled}
      />
      <UserNumberInput
        name="angleBeta"
        handleInput={props.handleInput}
        userInput={props.userInput}
        disabled={props.disabled}
      />
      <UserNumberInput
        name="straightC"
        handleInput={props.handleInput}
        userInput={props.userInput}
        disabled={props.disabled}
      />
      <UserNumberInput
        name="angleAlpha"
        handleInput={props.handleInput}
        userInput={props.userInput}
        disabled={props.disabled}
      />
      <UserNumberInput
        name="straightB"
        handleInput={props.handleInput}
        userInput={props.userInput}
        disabled={props.disabled}
      />
      <UserNumberInput
        name="angleGamma"
        handleInput={props.handleInput}
        userInput={props.userInput}
        disabled={props.disabled}
      />
      <div className="buttonContainer">
        <Button
          sx={{ margin: "10px" }}
          variant="outlined"
          onClick={props.calculate}
          disabled={props.disabled}
        >
          Berechnen
        </Button>
        <Button
          sx={{ margin: "10px" }}
          variant="outlined"
          onClick={props.resetCalculator}
        >
          Zurücksetzen
        </Button>
      </div>
    </div>
  );
}
