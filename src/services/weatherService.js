export async function getWeather(city, country) {
  
  const API = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY

  try {
    const response = await fetch(`${API}?q=${city},${country}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      console.warn(`City not found: ${city}`);
      return null
    }
    return await response.json();
    
  } catch (error) {

    console.error("Request failed:", error);
    return null;
  }
}


