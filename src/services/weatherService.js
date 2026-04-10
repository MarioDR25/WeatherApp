export async function getWeather(city, country) {
  
  const API = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY

  try {
    const response = await fetch(`${API}?q=${city},${country}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("No se pudo conectar con la API");
    const data = await response.json();
    
    return data;
  } catch (error) {

    console.error("Fallo en la misión:", error);
    return null;
  }
}


