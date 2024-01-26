import FormEmail from "./FormEmail"

const PárrafoFinalConForm = () => {
  return (
    <div className="mt-20 text-center text-2xl">
        <p>Apoyándote en una mentora que te acompañe en tu trabajo interior y te guie para realizar las acciones correctas.
        </p>
        <p className="mt-5">Eso va a hacer que tu cuenta del banco realmente refleje tus resultados.</p>
        <p className="mt-5">Internos y externos.</p>
        <p className="mt-5">Aún más.</p>
        <p className="mt-5 text-2xl font-bold text-primary">TU empresa debe seguir facturando aunque tú no estés presente.
        </p>

        <div className="mt-10 xl:w-1/2 mx-auto border-2 rounded-2xl p-10">
          <p className="">Si quieres saber cómo hacerlo, te lo cuento aquí:
          </p>
          <div className="mt-5">
            <FormEmail 
              textoBoton="Reservar entrada"
            />
          </div>
        </div>

        <div className="mt-28 xl:w-3/4 xl:text-center xl:mx-auto">
          <p className="font-bold text-primary text-3xl">¿Recuerdas el día en el que decidiste emprender?</p>
          <p className="mt-10">Seguramente tenías un trabajo que no te permitía cumplir tus sueños, quizás por horario o por cansancio y querías pasar más tiempo con tus hijos o contigo misma.
          </p>
          <p className="mt-5">Seamos sinceros.</p>
          <p className="mt-5">La mayoría de nosotros emprendemos por salud, ya sea física, mental, espiritual o económica.</p>
          <p className="mt-5">Si ser emprendedor te pone en la misma situación, ¿para qué estás haciendo esto?
          </p>
          <p className="mt-5">Yo perdí cinco años de la vida de mis hijas para darme cuenta. Prefiero ahorrarte ese mal trago.
          </p>
          <p className="mt-5">Los meses pasan y la rueda del emprendimiento se sigue llevando tu tranquilidad, tu fuerza,tu  salud y la de tu familia, en lugar de tener más tiempo para compartir y hacer lo que deseas, seguramente cada día estés teniendo que dedicar más horas. 
          </p>
          <p className="mt-5">Quizá hasta tu exigencia te la está jugando.
          </p>
          <p className="mt-5">Es comprensible.
          </p>
          <p className="mt-5">Tu sueldo depende de ti y de tu trabajo, así que haces todo lo posible, pero…
          </p>
          <p className="mt-5">¿Has pensado cuál es el precio que estás pagando por ello?
          </p>
          <p className="mt-5">Si quieres tener un negocio en expansión que te permita vivir como deseas, que siga funcionando cuando libras, que no te desgaste y así no tires la toalla a la primera de cambio...
          </p>
        </div>

        
        
      </div>
  )
}

export default PárrafoFinalConForm
