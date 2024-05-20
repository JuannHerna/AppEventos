import React from 'react'

const Login = () => {
  return (
    <main className='bg-gray-700 flex flex-col h-screen justify-center min-w-0 m-auto text-white'>
      <h1 className='mx-auto text-4xl'>Ingresar</h1>
      <form className='sm:mx-auto sm:w-full sm:max-w-sm justify-around'>
        <label className='text-sm font-medium leading-6 mb-4' htmlFor="email" >Email:</label>
        <input type='email' id='email' name='email' required autocomplete="email" className="w-full text-black rounded border-2 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" />

        <label className='text-sm font-medium leading-6 mb-4' htmlFor="password">Contaseña:</label>
        <input type='password' id='password' name='password' required className="w-full text-black rounded border-2 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </form>
    </main>
  )
}

export default Login