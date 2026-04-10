"use client";
import { useState, useEffect } from "react";
import { getWeather } from "@/services/weatherService";
import WeatherCard from "./weatherCard";
import cities from "@/data/cities.json";
import { Loader2 } from "lucide-react";

const Search = ({ value, onSearchChange }) => {
  return (
    <div className="flex justify-end w-full">
      <div className="relative w-full max-w-sm">
        <span className="absolute inset-y-0 right-4 flex items-center text-slate-400">🔍</span>
        <input type="text" 
          placeholder="Buscar city..." 
          value={value} 
          onChange={(event) => onSearchChange(event.target.value)} 
          className="w-full pr-12 pl-5 py-2 bg-white border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sky-700" />
      </div>
    </div>
  );
};

export default function RenderWeather() {

  const [weatherCities, setWeatherCities] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    const getAllWeather = async () => {

      try {
        let promises = [];

        if (!searchTerm.trim()) {
          promises = cities.map((city) => getWeather(city.name, city.country));
        } else {
          promises = [getWeather(searchTerm, "")];
        }

        const result = await Promise.all(promises);

        setWeatherCities(result.filter((res) => res !== null));
      } catch (error) {
        console.error("Error loading the JSON:", error);
      } finally {
        setloading(false);
      }
    };

    getAllWeather();
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-6 p-4">
      <Search value={searchTerm} onSearchChange={setSearchTerm} />


      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
          <Loader2 className="animate-spin text-sky-700" size={80} />
          <p className="text-center text-sky-700 text-xl">Espera un momento....</p>
        </div>
        
      ) : (

        <div className="grid grid-cols-4 gap-4 ">
          {weatherCities.map((e) => (
            <WeatherCard key={e.id} city={e} />
          ))}
        </div>
      )}
    </div>
  );
}
