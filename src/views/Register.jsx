import { useState } from 'react'
// import { handleRegisterWithEmail }

const Register = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleRegisterWithEmail = (e) => {
    e.preventDefault()

    console.log('registro');

    // signInWithEmailAndPassword(auth, email, password)
    //   .then(userCredential => {
    //     const user0 = userCredential.user;
    //     console.log('user0: ', user0);

    //     setUser(userCredential.user)
    //     console.log('login');
    //     console.log('user posta: ', user);
    //     setEmail('')
    //     setPassword('')
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     console.log('error');
    //     console.log(errorMessage);
    //   });
  }

  return (
    <main className='bg-gray-700 flex flex-col h-screen justify-center min-w-0 m-auto text-white'>
      <h1 className='mx-auto text-4xl'>Registrarse</h1>
      <form className='sm:mx-auto sm:w-full sm:max-w-sm justify-around' onSubmit={handleRegisterWithEmail}>
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

        <button type="submit" className="flex w-fit mx-auto mt-6 rounded bg-green-800 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>

        <p className="mt-6 text-center text-sm">
          ¿Ya tienes cuenta?
          <a href="#" className="font-semibold leading-6 ml-1.5 text-green-500 hover:text-green-700 hover:duration-700 hover:underline">Ingresar</a>
        </p>
      </form>
    </main>
  )
}

export default Register