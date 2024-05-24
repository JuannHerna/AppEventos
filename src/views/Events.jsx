import React from 'react';
import { Navbar } from '../components/Navbar';
import Tarjeta from '../components/Tarjeta';

function Events(){
    const Hoy= 'Hoy'
    const Sig = 'Semana'
    const Sigmas = "Mes"
    return(
        <>
        <Navbar />
        <div className="h-screen bg-gradient-to-b from-teal-900 to-teal-500">
            <section className="text-white h-1/4  flex flex-col justify-center items-center">
                <h2 className='text-4xl font-bold text-center text-teal-90'>
                    En esta seccion puedes encontrar los mejores eventos..
               </h2>
                <h2 className='mt-6 text-4xl font-bold text-center text-teal-90'>
                    Destacados
                </h2>
            </section>
            <div className='grid grid-cols-3 gap-4 p-5'>
                    <Tarjeta dia={Hoy} />
                    <Tarjeta dia={Sig} />
                    <Tarjeta dia={Sigmas} />
            </div>
        </div>
         </>
    );
}
export default Events