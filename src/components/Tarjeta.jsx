import React from "react";
import Info from "./Info";


const Tarjeta = () =>{
  return(
    <>
      <div className='flex justify-center items-center w-screen'>
            <ul className='w-auto p-4 rounded-2xl bg-slate-800 bg-opacity-85'>
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