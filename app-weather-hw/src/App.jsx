// import { useState, useEffect } from "react";
import { useContext, useState } from "react";
import { WeatherContext } from './context/WeatherContext';
import SearchBar from "./components/SearchBar";
import WeatherModal from "./components/WeatherModal";

function App() {
const {weatherData, selectedCity, fetchWeather} = useContext(WeatherContext);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleSearch = async(city) => {
  await fetchWeather(city);
  setIsModalOpen(true);
}

return (
  <>
    <h1 className="d-flex justify-content-center mb-4">Weather</h1>
    <SearchBar onSearch={handleSearch}/>
    {isModalOpen && weatherData && (
      <WeatherModal 
      weather={weatherData} 
      onClose={() => setIsModalOpen(false)} 
    />)}
    {selectedCity && <h2>{selectedCity}</h2>}
  </>
);
}
 
export default App;