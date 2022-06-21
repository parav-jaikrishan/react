import './App.css';
import Header from "./components/Header/header";
import Form from "./components/Form/form";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = e => {
    setInputValue(e.target.value);
  }

  const fetchData = e => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <Header/>
      <Form onSubmission={fetchData} inputValue={inputValue} changeInputValue = {changeInputValue}/>
    </div>
  );
}

export default App;
