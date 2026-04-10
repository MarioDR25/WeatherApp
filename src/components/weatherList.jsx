"use client";
import { useState, useEffect } from "react";
import { getWeather } from "@/services/weatherService";
import WeatherCard from "./weatherCard"
import cities from "@/data/cities.json";


export default function RenderWeather() {
  const [ciudadesClima, setCiudadesClima] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarTodoElClima = async () => {
      try {
        const promesas = cities.map((ciudad) => getWeather(ciudad.name, ciudad.country));

        const resultados = await Promise.all(promesas);
        console.log(resultados);

        setCiudadesClima(resultados.filter((res) => res !== null));
      } catch (error) {
        console.error("Error cargando el JSON:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarTodoElClima();
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {ciudadesClima.map((e) => (
        <WeatherCard key={e.id} city={e}/>
      ))}
    </div>
  );
}
