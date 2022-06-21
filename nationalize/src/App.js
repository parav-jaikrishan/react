import './App.css';
import Header from "./components/Header/header";
import Form from "./components/Form/form";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([]);

  const changeInputValue = e => {
    setInputValue(e.target.value);
  }

  async function fetchData(e) {
    e.preventDefault();
    setCountries(
      await(
        await fetch(`https://api.nationalize.io/?name=${inputValue}`)
      ).json()
    );
    console.log(countries);
  }

  return (
    <div className="App">
      <Header/>
      <Form onSubmission={fetchData} inputValue={inputValue} changeInputValue = {changeInputValue}/>
    </div>
  );
}

export default App;
