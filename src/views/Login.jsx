import { useState } from 'react'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLoginWithEmail = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user)
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code: ', errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <main className='bg-gray-700 flex flex-col h-screen justify-center min-w-0 m-auto text-white'>
      <h1 className='mx-auto text-4xl'>Ingresar</h1>
      <form className='sm:mx-auto sm:w-full sm:max-w-sm justify-around' onSubmit={handleLoginWithEmail}>
        <label
          className='text-sm font-medium leading-6 mb-4'
          htmlFor="email"
        >Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          required
          autoComplete="email"
          className="w-full text-black rounded border-2 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label
          className='text-sm font-medium leading-6 mb-4'
          htmlFor="password"
        >Contaseña:</label>
        <input
          id='password'
          name='password'
          type='password'
          required
          className="w-full text-black rounded border-2 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <a href="#forgot_password" className='flex mt-3 justify-end text-white hover:underline'>¿Olvidaste tu contraseña?</a>

        <button type="submit" className="flex w-fit mx-auto mt-6 rounded bg-green-800 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>

        <p className="mt-6 text-center text-sm">
          ¿No tienes cuenta?
          <a href="#" className="font-semibold leading-6 ml-1.5 text-green-500 hover:text-green-400 hover:underline">Registrate gratis</a>
        </p>
      </form>
    </main>
  )
}

export default Login