import './App.css';
import InputForm from "./InputForm";
import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState({
    straightA: 0,
    angleA: 0,
    straightB: 0,
    angleB: 0,
    straightC: 0,
    angleC: 0,
  });

  const handleInput = (event) => {
    setUserInput({...userInput, [event.target.name]: event.target.value});
  }

  return (
    <div className="App">
      <InputForm handleInput={handleInput} userInput={userInput} />
    </div>
  );
}

export default App;
