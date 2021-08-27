import React, { useEffect } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherstate, setweatherstate] = React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
      if (weathermood) {
          switch (weathermood) {
              case "Clouds":
                setweatherstate("wi-day-cloudy");
                  break;
          
              case "Haze":
                setweatherstate("wi-day-haze");
                  break;
          
              case "Clear":
                setweatherstate("wi-day-sunny");
                  break;
          
              case "Mist":
                setweatherstate("wi-dust");
                  break;
          
              case "Rain":
                setweatherstate("wi-day-rain");
                  break;
          
              default:
                setweatherstate("wi-day-sunny");
                  break;
          }
      }
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
             <article className="widget">
                <div className="weathericon">
                    <i className={`wi ${weatherstate}`}></i>
                </div>
                <div className="weatherinfo">
                    <div className="temperature">
                        <span>{temp}&deg;c</span>
                    </div>
                    <div className="description">
                        <div className="weathercondition">{weathermood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>


                </div>

                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {timestr} <br />
                                sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {humidity} <br />
                                humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {pressure} <br />
                                pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {speed} <br />
                                speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard;
