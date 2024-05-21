import React from 'react';
import { Navbar } from '../components/Navbar';
import Tarjeta from '../components/Tarjeta';

const Events=()=>{
    return(
        <>
        <Navbar />
        <div className='bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400 w-full h-screen'>
            <section className="h-14 flex-col justify-center items-center bg-white bg-opacity-15 rounded-xl px-6 py-24 sm:py-32 lg:px-8">
                    <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                    <figure className="mt-auto">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <h2>
                                En esta seccion puedes encontrar tu evento favorito!!!
                            </h2>
                            <h2>
                                Eventos destacados...
                            </h2>
                        </blockquote>
                    </figure>
            </section>
        <div className='flex'>
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </div>
         </>
    );
}
export default Events