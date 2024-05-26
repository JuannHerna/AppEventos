import React from "react";
import Info from "./Info";


function Tarjeta({dia}){
    return(
        <>
        <div className=''>
                <ul className='w-auto p-4 rounded-2xl bg-slate-800 bg-opacity-85'>
                    <h2 className="p-3 text-white text-4xl font-bold text-center text-teal-90 border-b-2 border-gray-700" >
                        {dia}
                    </h2>
                    <li>
                        <Info />
                    </li>
                    <li>
                        <Info/>
                    </li>
                    <li>
                        <Info />
                    </li>
                    <li>
                        <Info />
                    </li>
                </ul>
        </div>

        </>
    );
}

export default Tarjeta