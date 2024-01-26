

const Punto = ({title, parrafo}) => {
  return (
    <div className="mx-auto">
      {/* Circulo */}
      <div className='w-[50px] h-[50px] rounded-full bg-white border-orange-200 border-2 mx-auto'></div>

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
  parrafo: ''
}

const Puntos = ({title1, parrafo1, title2, parrafo2, title3, parrafo3, titlePrincipal}) => {
  return (
    <div className='mt-24 w-3/4 mx-auto'>
      <p className='text-primary text-4xl font-bold text-center'>{titlePrincipal}</p>
      <div className='grid md:grid-cols-3 grid-cols-1 md:py-10 py-5 md:gap-30 gap-20 mx-auto items-center content-center'>
        <Punto
          title={title1}
          parrafo={parrafo1}
        />

        <Punto
          title={title2}
          parrafo={parrafo2}
        />

        <Punto
          title={title3}
          parrafo={parrafo3}
        />
      </div>
    </div>
    
  )
}

export default Puntos
