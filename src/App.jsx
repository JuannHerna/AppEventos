import { Navbar } from "./components/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-b from-teal-900 to-teal-500">
          <h1 className="pt-12 p-3 text-white text-4xl font-bold text-center text-teal-90">
              Busca te evento preferido a tus alrededoress.
          </h1>
          
          <section className="w-full h-3/4 flex justify-center items-center mt-10">
              <div className="w-5/6 h-full bg-slate-700 flex justify-center items-center rounded-3xl"> 
                    aca va el mapa
              </div>
          </section>



      </div>
    </>
  )
}

export default App
