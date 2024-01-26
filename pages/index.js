import PrimeraVista from '../components/PrimeraVista'
import Parrafo from '../components/Parrafo'
import Puntos from '../components/Puntos'
import TituloParrafo from '../components/TituloParrafo'
import SliderComentarios from '../components/SliderComentarios'
import Footer from '../components/Footer'
import HistoriaPersonal from '../components/HistoriaPersonal'
import PárrafoFinalConForm from '../components/PárrafoFinalConForm'
export default function Home() {
  return (
    <div className='bg-white'>
      <PrimeraVista />
      <div className='md:relative md:max-w-screen-xl p-6 md:h-full w-full flex md:px-20 mx-auto'>
        <div className="container py-8 text-center xl:text-left flex-col md:flex-row justify-center" >
          <Parrafo />
        </div>
      </div>
      <HistoriaPersonal />
      <div className='flex mx-auto text-center'>
        <div className="" >
          <Puntos
            titlePrincipal={'Puedes logar resultados excepcionales'} 
            title1="Sin tener que trabajar 10 o 12 horas al día."
            parrafo1="Puedes conseguir resultados con mucho menos tiempo."
            title2="Sin que tu salud vaya cuesta abajo"
            parrafo2="Mientras la cuenta del psicólogo o del fisiterapeuta va hacia arriba"
            title3="Sin perderte las presentaciones de tus hijos"
            parrafo3="O ir de cena con tu pareja sin preocuparte por tu negocio"
          />
          <PárrafoFinalConForm />
          <Puntos 
            titlePrincipal={'Necesitas empezar a trabajar estas 3 áreas'}
            title1="Autoliderazgo"
            parrafo1="Debes saber dónde estás, qué necesitas, tener una visión clara y una dirección definida. Necesitas reconocer tu  valor y tener claridad de lo que te hace única."
            title2="Liderazgo"
            parrafo2="Primero te lideras a ti misma, trazas una ruta y cuando encuentras estabilidad -sin desbordarte emocionalmente y sin morir de éxito-, ahí empiezas a liderar un proyecto, a liderar a otros."
            title3="Estrategia"
            parrafo3="Necesitas adquirir la mentalidad de empresaria y asumir la dirección comercial de tu negocio. No se trata solo de vender y facturar más sino de crear un sistema que te ayude a cumplir objetivos a medio y largo plazo.
            "
          />
          <TituloParrafo />
        </div>
      </div>
      <div className='md:relative md:max-w-screen-xl p-6 md:h-full w-full flex md:px-20 mx-auto'>
        <div className="container pt-8 xl:text-left flex-col md:flex-row justify-center" >
          <Footer />
        </div>
      </div>
      
    </div>
  )
}
