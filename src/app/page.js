import Header from './components/Header'
import PrimeraVista from './components/PrimeraVista'
import Parrafo from './components/Parrafo'
import Puntos from './components/Puntos'
import EmprendedoraVSEmpresaria from './components/EmprendedoraVSEmpresaria'
import TituloParrafo from './components/TituloParrafo'
import TitleParrafoyFormulario from './components/TitleParrafoyFormulario'
import TitleParrafoeImagen from './components/TitleParrafoeImagen'
export default function Home() {
  return (
    <>
      <Header />
      <div className='md:relative md:max-w-screen-xl p-6 md:h-full w-full flex md:px-20 mx-auto'>
        <div className="container py-8 text-center xl:text-left flex-col md:flex-row justify-center" >
          <PrimeraVista />
          <Parrafo />
          <Puntos />
          <EmprendedoraVSEmpresaria />
          <TituloParrafo />
        </div>
      </div>
      <TitleParrafoyFormulario />
      <div className='md:relative md:max-w-screen-xl p-6 md:h-full w-full flex md:px-20 mx-auto'>
        <div className="container py-8 xl:text-left flex-col md:flex-row justify-center" >
          <TitleParrafoeImagen />
        </div>
      </div>
    </>
  )
}
