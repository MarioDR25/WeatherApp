# 🌦️ WeatherApp 
Una aplicación meteorológica dinámica que consume datos en tiempo real de la API de OpenWeather. Proyecto enfocado en el manejo de estados asíncronos con React, arquitectura de componentes y diseño moderno.

> ⚠️ **Nota:** Esta aplicación se encuentra actualmente **en construcción**. Estoy trabajando en nuevas funcionalidades.


## 🚀 Tecnologías utilizadas
* **React** (Hooks: useState, useEffect)
* **Next.js** (App Router)
* **Tailwind CSS** (Styling)
* **OpenWeather API** (Data fetching)

## 🛠️ Instalación y Configuración

1. **Clona el repositorio:**
   git clone https://github.com/MarioDR25/WeatherApp.git

2. **Instala las dependencias:**
   npm install

3. **Configura tu API Key:**
   Crea un archivo .env.local en la raíz y añade tu llave:
   NEXT_PUBLIC_WEATHER_KEY="{tu_api_key_aqui}"

4. **Inicia el servidor de desarrollo:**
   npm run dev

## 📋 Funcionalidades
* Consulta de clima por ciudades específicas en tiempo real.
* Visualización dinámica mediante tarjetas (WeatherCards).
* Interfaz totalmente responsive optimizada con Tailwind.

---
### 📝 Notas de Desarrollo
Este proyecto utiliza un flujo de datos basado en componentes de React, donde el estado global de las ciudades se gestiona en la página principal y se distribuye a componentes especializados para el renderizado y la búsqueda.

Desarrollado por MarioDR25