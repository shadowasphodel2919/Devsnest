import { useSelector } from "react-redux";

const WeatherCard = () => {
    const placeData = useSelector(state=>state.placeData);
    const theme = useSelector((state) => state.theme);
    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-2 col-md-8 weather">
                    <div className={theme ? "card dark" : "card"}>
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
    );
};
export default WeatherCard;