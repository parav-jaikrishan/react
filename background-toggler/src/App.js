import './App.css';
import Header from './components/Header/header';
import Form from './components/Form/form';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [bgColor, setBgColor] = useState("");

  const changeInputValue = e => {
    setInputValue(e.target.value);
  }
  
  const changeBgColor = (e) => {
    e.preventDefault();
    setBgColor(inputValue);
  }

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className="App">
      <Header />
      <Form onSubmission={changeBgColor} inputValue={inputValue} changeInputValue = {changeInputValue}/>
    </div>
  );
}

export default App;