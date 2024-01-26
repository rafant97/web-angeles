import FormEmail2 from "./FormEmail2"
import Image from "next/image"
import Link from "next/link"

const TituloParrafo = () => {
  return (
    <div className="mt-28 text-center w-3/4 mx-auto text-2xl">
      <h4 className="text-primary text-5xl font-bold lg:px-28">Como mentora de empresarias esto es lo que vamos a conseguir</h4>
      <p className="mt-5">Pongo toda mi experiencia en ventas, gestión y dirección de equipos, los cientos de libros que he devorado y aplicado a lo largo de estos 19 años, mi formación como Arteterapeuta, 17 años de terapia y mis conocimientos en Gestalt para que en un corto espacio de tiempo comiences a ver resultados.
      </p>
      <p className="mt-5">Te voy a acompañar para que creemos las estrategias adecuadas para ti.</p>
      <p className="mt-5">Vas a tener un plan que te permita crecer sin pasar el día en las redes sociales, implicando a tu familia en el proceso, sin tener que ser esclavo de tus clientes y teniendo la seguridad de que estás dando los pasos correctos para consolidar tu empresa.
      </p>
      <div className="mt-10 border-2 border-orange-200 rounded-2xl p-10">
        <p>Para dejar de sobrevivir y comenzar a disfrutar de tu negocio, reserva tu plaza y aprende a <span className="font-bold">liderarte para liberarte.</span></p>
        <div className="mt-5">
         <FormEmail2 
           textoBoton="¡Me apunto!"
         />
        </div>
      </div>
      <div className="mt-10">
        <p>Aquí entre tú y yo.</p>
        <p className="mt-5">Hablar de mis capacidades, logros y de lo buena que soy haciendo esto, puede sonar a vende humos</p>
        <p className="mt-5">Así que le he pedido a Sara, mi primera alumna, que te lo cuente.</p>
        <div className="border-2 border-orange-200 rounded-2xl p-10 mt-10">
          <Image src="/sara.jpg" width={700} height={300} alt="sara" className="rounded-2xl xl:mx-auto"/>
          <div className="italic mt-10">
            <p>“Antes de conocer a Ángeles, me estaba desconectando poco a poco de mi emprendimiento.</p>
            <p className="mt-5">Tenía bastantes límites mentales, no conocía a mi cliente ni comprendía los procesos por los que atravesaba una persona para contratar mis servicios.</p>
            <p className="mt-5">El trabajo con Ángeles me ha impulsado a salir a la luz pues estaba un poco escondida, dudaba de lo que debía hacer y lo aplazaba, he podido conectar con mi comunidad y me ha llevado a realizar acciones de venta periódicas que me han permitido doblar mi facturación.</p>
            <p className="mt-5">Me ha renovado completamente las ganas de tirar hacia adelante y me ha dado unas bases sobre las cuales sostenerme.</p>
            <p className="mt-5">Me siento fuerte, confío en mí y he roto creencias que me estaban limitando.</p>
            <p className="mt-5">Mi mirada se ha expandido, me siento segura, tranquila y veo todo lo que puedo hacer.</p>
            <p className="mt-5">Lo que Ángeles ha vivido y lo que tiene integrado por su experiencia profesional, por mucho que alguien estudie, no lo va a conseguir.</p>
            <p className="mt-5">Es una tía cojonuda que no para de formarse y lo que ha aprendido lo ha hecho de la forma más pura que se pueda aprender.</p>
            <p className="mt-5">Con ella logré un nivel de intimidad que me ha permitido dar el salto. Como ella hay pocos.”</p>
          </div>
          <div className="mt-10">
            <p>Sara Suberviola</p>
            <Link href="https://www.instagram.com/sarasuberviola/"><p>@sarasuberviola</p></Link>
            <Link href="https://www.sarasuberviola.es"><p>www.sarasuberviola.es</p></Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p>Los resultados de Sara han sido posibles porque se ha comprometido consigo misma durante los 3 meses que trabajamos juntas.</p>
        <p className="mt-5">Esto no es magia, sino una cuestión de constancia y no hablo de disciplina de la tóxica ni de que te obsesiones con los resultados.</p>
        <p className="mt-5">Es lo que ocurre cuando tienes una visión clara, avanzas con acciones concretas hacia objetivos definidos y potencias lo que te resulta sencillo teniéndolo muy en cuenta en tu estrategia.</p>
      </div>
      <div className="mt-10 border-2 border-orange-200 rounded-2xl p-10">
        <p>Si quieres tener a una mentora de empresarias que analice tu negocio y te acompañe a mapear el camino que te permita
          <span className="font-bold"> liderarte para liberarte</span>y alcanzar el éxito.
        </p>
        <div className="">
          <FormEmail2
            textoBoton="Quiero trabajar contigo"
          />
        </div>
      </div>
    </div>
  )
}

export default TituloParrafo
