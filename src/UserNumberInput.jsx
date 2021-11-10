import React from 'react';
import { TextField } from '@mui/material';

export default function UserNumberInput(props) {
  const labelMapping = {
    straightA: 'Seite A',
    angleA: 'Winkel Alpha',
    straightB: 'Seite B',
    angleB: 'Winkel Beta',
    straightC: 'Seite C',
    angleC: 'Winkel Gamma',
  };
  return (
    <TextField
      type="number"
      label={labelMapping[props.name]}
      name={props.name}
      onChange={props.handleInput}
      value={props.userInput[props.name]}
    />
  );
}
