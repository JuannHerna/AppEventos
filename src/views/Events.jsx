import React from 'react';
import { Navbar } from '../components/Navbar';
import Tarjeta from '../components/Tarjeta';

const Events=()=>{
    return(
        <>
        <Navbar />
        <div className="h-screen bg-gradient-to-b from-teal-900 to-teal-500">
            <section className="">
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