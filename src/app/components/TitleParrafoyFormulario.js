import FormEmail from './FormEmail'

const TitleParrafoyFormulario = () => {
  return (
    <div className='mt-28 bg-primary w-full max-w-full md:px-16 py-20'>
        <div className="px-[20%]">
            <h4 className="text-white text-5xl font-bold items-start">Todo lo que necesitas y más, aquí.</h4>
            <p className="text-white mt-5 text-lg">Aquí debería escribirse un texto en el que la gente pudiera leer/ver qué tipo de contenido y/o valor recibirá con la Newsletter sobre empresa, emprendimiento, noticias, eventos y un largo etcétera.
            <br /><br />Todo eso y mucho más, si te suscribes.</p>
            <div className='mt-5 md:w-[70%]'>
                <FormEmail 
                    textoBoton="Quiero liderarme"
                />
            </div>
            
        </div>
        
    </div>
  )
}

export default TitleParrafoyFormulario
