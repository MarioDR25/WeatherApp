import "./globals.css"; //carga Tailwind

export const metadata = {
  title: "Mi App del Clima",
  description: "Proyecto de estudiante con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className=" text-slate-800 antialiased min-h-screen flex flex-col bg-[#D0DCF2]">
        
        <header className="bg-white shadow-sm p-4">
            <h1 className="font-bold text-5xl text-sky-700 text-left pl-5">WeatherApp ⛅</h1>
        </header>

        <main className="bg-[#D0DCF2] flex-grow max-w-7xl w-full mx-auto mt-5">{children}</main>

        <footer className="text-center p-6 text-slate-400 text-sm bg-white">© 2026 - Aprendiendo React y Next.js con Tailwind</footer>
      </body>
    </html>
  );
}
