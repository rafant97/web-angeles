import React from 'react'
import FormEmail from './FormEmail'
import Image from 'next/image'

const PrimeraVista = () => {
  return (
    <div className='relative w-[100%] xl:w-full '>

        <Image src="/principal.jpeg" width={1920} height={600} alt="angeles" className='w-full h-auto xl:h-[1080px]'/>

      
      <div className='mx-auto'>
        <h1 className='absolute w-3/4 xl:top-[20%] top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        text-center text-2xl xl:text-7xl uppercase font-bold text-white border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
        md:top-[27%] md:text-4xl'
        >
          De emprendedora esclava a empresaria
        </h1>
        
      </div>
      <p className='text-slate-500 mx-auto text-2xl xl:text-4xl 
        text-center w-4/5 xl:w-3/5 mt-10 xl:absolute xl:top-[30%] xl:left-1/2 transform xl:-translate-x-1/2 xl:text-black 
        xl:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xl:border-orange-200 xl:bg-orange-300 xl:p-3 rounded-xl'>
          Pasa de tener un emprendimiento que te esclaviza a gestionarlo con mentalidad 
          empresarial a través de estrategias que te permitan trabajar 6 horas al día y 
          multiplicar tu facturación.
      </p>
      <div className='w-4/5 mx-auto mt-10 xl:absolute xl:top-[70%] xl:w-2/4  xl:left-1/2 transform xl:-translate-x-1/2 xl:text-white 
        xl:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        <FormEmail 
          textoBoton="Reservar entrada"
        />
      </div>
      
    </div> 
  )
}

export default PrimeraVista
