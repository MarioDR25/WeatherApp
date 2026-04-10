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
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="font-bold text-4xl text-sky-700">WeatherApp ⛅</h1>

            <div className="relative w-full max-w-xs">
              <span className="absolute inset-y-0 right-3 flex items-center text-slate-400">🔍</span>
              <input type="text" placeholder="Buscar ciudad..." className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sky-700" />
            </div>
          </div>
        </header>

        <main className="bg-[#D0DCF2] flex-grow max-w-7xl w-full mx-auto p-6 rounded-xl mt-5">{children}</main>

        <footer className="text-center p-6 text-slate-400 text-sm bg-white">© 2026 - Aprendiendo React y Next.js con Tailwind</footer>
      </body>
    </html>
  );
}
