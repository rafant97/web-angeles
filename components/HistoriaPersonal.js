import Image from "next/image"

const HistoriaPersonal = () => {
  return (
    <div className="bg-orange-100 xl:h-[900px] mt-10">
      <div className='grid lg:grid-cols-2 text-2xl'>
          <div className="xl:mt-10">
            <Image src="/stand.jpg" alt="angeles" 
              className="rounded-3xl shadow-2xl mx-auto my-auto" 
              width={600} height={800}/
            >
          </div>
          <div className="ml-[20%] xl:ml-0 mt-10 xl:mt-28 my-auto w-2/3 mx-auto">

            <p>En el mundo comercial, parece que la venta es un océano en el que tienes que ser un tiburón para triunfar</p>

            <p className='mt-5 '>Que debes ir por ahí cazando, eligiendo la mejor presa y perseguirla sin descanso.</p>

            <p className='mt-5 '>Quizás, has leído estas últimas frases y has sentido un poco de incomodidad.</p>

            <p className='mt-5 '>¡Me caes bien!</p>

            <p className='mt-5'>Porque, aunque lo anterior es la idea más conocida, no es ni la única ni la mejor.</p>

            <p className="mt-5">En mis 19 años como vendedora “de las de toda la vida”, he pasado por mucho:</p>
            
          </div>
        </div>
          <div className="ml-[20%] mt-10 my-auto w-2/3 mx-auto text-2xl xl:text-2xl xl:text-center xl:w-3/4 xl:mx-auto">
            <p className='mt-10'>Desde dirigir equipos de más de 200 personas, ser la primera persona que llevó una 
            dirección mixta en la compañía para una conocida multinacional (que por cierto te sonará bastante, solo 
            tienes que pensar en cocinar), enseñar a amas de casa sin correo electrónico a ganarse muy bien la vida 
            de forma online y llevar a empresas a facturar millones de euros.
            </p>
            <p className="mt-5">Te diré más.</p>
            <br></br>
          </div>
    </div>
  )
}

export default HistoriaPersonal
