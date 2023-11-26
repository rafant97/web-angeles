

const Punto = ({title, parrafo}) => {
  return (
    <div>
      {/* Circulo */}
      <div className='w-[50px] h-[50px] rounded-full bg-white border-nuevo-azul border-2 mx-auto md:mx-0'></div>

      {/* Title */}
      <div className='mt-5'>
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <p className="text-slate-500 mt-3">{parrafo}</p>
      </div>
    </div>
  )
}

Punto.defaultProps = {
  title: 'title',
  parrafo: 'Conviértete en consultor digital de marca personal o incluye sesiones de personal branding en tus servicios actuales.'
}

const Puntos = () => {
  return (
    <div className='mt-28 md:px-3'>
      <p className='text-primary text-4xl font-bold text-center'>Lee con atención, luego te cuento</p>
      <div className='grid md:grid-cols-3 grid-cols-1 md:py-10 py-5 md:gap-30 gap-20 mx-auto items-center content-center'>
        <Punto
          title="Te tiñes el pelo"
        >
          
        </Punto>

        <Punto
          title="Eres un pringao"
          parrafo="Digital de marca personal o incluye sesiones de personal branding en tus servicios actuales."
        >
          
        </Punto>

        <Punto
          title="Te mantienen"
        >
          
        </Punto>
      </div>
    </div>
    
  )
}

export default Puntos
