import './App.css';
import { useState } from "react";
import Header from './components/Header/header';
import Form from './components/Form/form';
import Weather from './components/Weather/weather';
import Loader from './components/Loader/loader';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({
    country: "",
    units: "metric",
    temp: "",
    feels_like: "",
    visibility: "",
    wind_speed: "",
    wind_deg: "",
    pressure: "",
    desc: "",
    humidity: "",
    icon: "",
    location: "",
    date: "",
    error: false,
    loaded: false,
    submitted: false,
    weatherData: null
  });
  const changeInputValue = e => {
    setInputValue(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setData({
      ...data,
      error: false,
      loaded: false,
      submitted: true
    })
    const appid = `2b74898c3562a04166e8c17b247031c2&units=${data.units}`;
    const baseLink = "https://api.openweathermap.org/data/2.5";
    fetch(`${baseLink}/weather?q=${inputValue}&appid=${appid}`)
      .then(res => res.json())
      .then(result => {
        if(result.cod === "404") {
          setData({
            ...data,
            loaded: true,
            error: true
          });
        } else {
          setData({
            ...data,
            country: result.sys.country,
            temp: result.main.temp,
            feels_like: result.main.feels_like,
            visibility: result.visibility,
            wind_speed: result.wind.speed,
            wind_deg: result.wind.deg,
            pressure: result.main.pressure,
            desc: result.weather[0].main,
            humidity: result.main.humidity,
            icon: result.weather[0].icon,
            location: result.name,
            date: result.dt,
            loaded: true,
            error: false
          });
        }
      }).catch(() => {
          setData({
            ...data,
            loaded: true,
            error: true,
          })
        })
  }
  const fahrToCels = e => {
    data.units = "metric";
    handleSubmit(e);
  }
  const celsToFahr = e => {
    data.units = "imperial";
    handleSubmit(e);
  }
  return (
    <div className="App">
      <Header/>
      <Form onSubmission={handleSubmit} inputValue={inputValue} changeInputValue = {changeInputValue}/>
      <div className="data-container">
        {!data.error && data.loaded && <Weather data = {data} fahrToCels={fahrToCels} celsToFahr={celsToFahr}/>}
      </div>
      {!data.loaded && !data.error && data.submitted && <Loader/>}
    </div>
  );
}

export default App;
