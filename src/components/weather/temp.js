import React, { useState, useEffect } from 'react'
import "./style.css";
import Weathercard from './Weathercard';
const Temp = () => {
    const [searchvalue, setsearchvalue] = useState("delhi");
    const [tempinfo, settempinfo] = useState({});
    const getweatherinfo = async () =>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

            const res = await fetch(url);
            const data = await res.json();
            const{ temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const{ name } = data;
            const{ speed } = data.wind;
            const{ country, sunset } = data.sys;

            const mynewweatherinfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            settempinfo(mynewweatherinfo);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getweatherinfo();
    }, [])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchvalue}
                        onChange={(event)=>setsearchvalue(event.target.value)}
                    />
                    <button className="searchButton" type="button" onClick={getweatherinfo}>
                        Search
                    </button>
                </div>
            </div>
            <Weathercard tempInfo={tempinfo}/>
           
        </>
    );
};

export default Temp;
