export default function RenderWeather({city}) {
  return (
    <div key={city.id} className="rounded-4xl text-center bg-white min-h-[25rem]  relative p-5">
          <div className="py-7  min-h-[10rem] ">
            <h3 className="font-bold text-3xl pb-2 "> {city.name}, {city.sys.country}</h3>
            <p className="text-3xl font-medium text-sky-700 mt-2 text-left">{Math.round(city.main.temp)} °C</p>
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt={city.weather[0].description}
              className="absolute right-[3rem] top-[4.5rem]"
            />
          </div>

          <div className="border-t border-gray-300  "></div>
          <div className="my-5 text-xl font-medium  text-left pt-5">
            <p>wind: {Math.round(city.wind.speed *3.6)} Km/h</p>
            <p>humidity: {city.main.humidity}%</p>
            <p>main: {city.weather[0].main}</p>
          </div>
        </div>
  )
}