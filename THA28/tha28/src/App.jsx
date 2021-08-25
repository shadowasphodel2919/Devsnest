import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=ac66f50486124381a34125321212508&q=${place}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setPlaceData(data);
    });
  };
  return (
    <div className="App">
      <div className="container form">
        <div className="row">
          <div className="col-12">
            <input 
            type="text"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }} />
            <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
          </div>
          <div className="offset-md-2 col-md-8 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <div className="city">
                  {placeData.location.name}
                  </div>
                  <div className="region">
                  {placeData.location.region}
                  </div>
                  <div className="country">
                  {placeData.location.country}
                  </div>
                  <img src={placeData.current.condition.icon} className="icon" alt="" />
                  <div className="text">
                    {placeData.current.condition.text}
                  </div>
                  
                  
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="val">{placeData.current.wind_kph} <span>KM</span></div>
                        <div className="wind">
                          Wind
                        </div>
                      </div>
                      <div className="col">
                        <div className="val">{placeData.current.humidity} <span>%</span></div>
                        <div className="humidity">
                          Humidity
                        </div>
                      </div>
                      <div className="col">
                      <div className="val">{placeData.current.precip_in} <span>inches</span></div>
                        <div className="precipitation">
                          Precipitation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>Place Not Found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
