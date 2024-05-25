import React from "react"
import { Navbar } from "./components/Navbar"
import Tarjeta from "./components/Tarjeta"

function App() {
  const Hoy= 'Hoy'
  const Sig = 'Semana'
  const Sigmas = "Mes"
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-b from-teal-900 to-teal-500">
            <section className="text-white h-1/4  flex flex-col justify-center items-center">
                <h1 className='text-5xl font-bold text-center text-teal-90'> 
                  Destacados...
                </h1>
                <p className="text-2xl font-bold text-center text-teal-90 mt-6">
                  Esta seccion encontraras los mejores Eventos.
                </p>
            </section>
            <div className='grid grid-cols-3 gap-4 p-5'>
              <Tarjeta dia={Hoy} />
              <Tarjeta dia={Sig} />
              <Tarjeta dia={Sigmas} />
            </div>
        </div>
    </>
  )
}

export default App
