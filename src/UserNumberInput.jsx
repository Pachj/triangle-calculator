import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function UserNumberInput(props) {
  const labelMapping = {
    straightA: "Seite A",
    angleAlpha: "Winkel Alpha",
    straightB: "Seite B",
    angleBeta: "Winkel Beta",
    straightC: "Seite C",
    angleGamma: "Winkel Gamma",
  };

  const [invalidInput, setInvalidInput] = useState(false);

  return (
    <div className="inputFieldContainer">
      <TextField
        type="text"
        label={labelMapping[props.name]}
        name={props.name}
        onChange={(e) => {
          if (
            e.target.value === "" ||
            !Number.isNaN(Number.parseFloat(e.target.value))
          ) {
            setInvalidInput(false);
            props.handleInput(e);
          } else {
            setInvalidInput(true);
          }
        }}
        errorText="error"
        value={props.userInput[props.name]}
        disabled={props.disabled}
        error={invalidInput}
        helperText={invalidInput === true ? "ungültige Eingabe" : ""}
      />
    </div>
  );
}
