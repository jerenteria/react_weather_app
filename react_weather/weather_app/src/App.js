import './App.css';
import {sunnyPic, humidityPic, partiallyCloudy, rainingPic, windPic} from './images';

function App() {
  async function getWeather() {
    fetch('');
  }

  return (
    <div className="App">
      <div className="Card">
      <form className="search">
        <input type="search" className="search" placeholder=" Enter A City Name..." />
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="44" height="44"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          </svg>
        </button>
      </form>
      <div className="weather">
        <img src={sunnyPic} alt="weather-pic" height="250px"/>
        <h2 className="city">San Jose</h2>
        <h2 className="temp">40 °F</h2>
        <div className="weather-details">
          <div className="col">
            <img src={humidityPic} alt="humidity-pic" />
          </div>
          <div className="humidity">
            <p className="humidity-level">Humidity: 50%</p>
          </div>
          <div className="col">
            <img src={windPic} alt="wind-pic" />
          </div>
          <div className="wind">
            <p className="wind-speed">Wind Speed: 100MPH</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
