import React from "react";
import Navbar from "../components/Navbar";
import Tarjeta from "../components/Tarjeta";

const fav = () =>{
    return(
        <>
        <Navbar />
        <main className="h-screen bg-gradient-to-b from-teal-900 to-teal-500 flex flex-col justify-center items-center ">
                <h2 className="pb-12 p-3 text-white text-4xl font-bold text-center text-teal-90">
                    Eventos Favortos.
                </h2>
            <div className=" h-3/4">
                <Tarjeta />
            </div>
        </main>
        </>
    )
}

export default fav