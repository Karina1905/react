import { createContext, useState, useEffect } from "react";
export const WeatherContext = createContext({
    weatherData: null,
    selectedCity: '',
    fetchWeather:()=> {}
})
export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(null);
const [selectedCity, setSelectedCity] = useState('');

useEffect(() => {
const savedCity = localStorage.getItem('lastCity')
 
if(savedCity){
  fetchWeather(savedCity)
}
 
}, [])
const fetchWeather = async (city) => {
const url = `https://api.weatherapi.com/v1/current.json?key=5d8f40bd0a5d47ed99c184552252106&q=${city}`
const res = await fetch(url)
const data = await res.json()
console.log(data)
setWeatherData(data)
setSelectedCity(city)
localStorage.setItem('lastCity', city)
}

return(<WeatherContext value={({weatherData, selectedCity, fetchWeather})}>{children}</WeatherContext>)
}
