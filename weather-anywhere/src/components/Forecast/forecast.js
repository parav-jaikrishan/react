import "./forecast.css";

export default function Forecast(props) {
    function getDay(date) {
        let d = new Date(date * 1000);
        let dayPos = d.getDay();
        const daysOfTheWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
        return daysOfTheWeek[dayPos];
    }
    function getDayOfMonth(date) {
        let d = new Date(date * 1000)
        return d.getDate();
    }
    const forecasts = props.data;
    return(
        <div className="weatherForecast">
            {forecasts.map((forecast, i) => {
                return (
                    <div key={i} className = "forecast">
                        <h3>{getDay(forecast.dt).substring(0, 3)} {getDayOfMonth(forecast.dt)}</h3>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={`Icon showing ${getDay(forecast.dt)}'s weather`} />
                        <div className="temperature">
                            <span className={"maxTemp" + (Math.round(forecast.temp.max) > 99 ? " short" : "")}>{Math.round(forecast.temp.max)}&deg;</span>
                            <span className={"minTemp" + (Math.round(forecast.temp.max) > 99 ? " short" : "")}>{Math.round(forecast.temp.min)}&deg;</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}