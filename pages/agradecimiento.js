import Link from 'next/link'
import Image from 'next/image'

const Agradecimiento = () => {
  return (
    <div className='text-center text-2xl w-[90%] mx-auto py-10'>
      <p>¡Estupendo!</p>
      <p className='mt-5'>¡Ya tienes tu entrada!</p>
      <p className='mt-5'>Has dado un paso para dejar atrás el “emprendedurismo” y empezar a crear una empresa que cuide de ti.</p>
      <p className='mt-5'>Te hemos enviado un correo con la confirmación de tu registro e información importante del evento.</p>
      <p className='mt-5'>Mira tu bandeja de entrada.</p>
      <p className='mt-5'>Es posible que se haya colado en Spam (los correos a veces son tan rebeldes como sus dueños).</p>
      <p className='mt-5'>Por favor, revisa y guárdalo en favoritos para no perderte nada.</p>
      <p className='mt-5'>¡Espera!</p>
      <p className='mt-5'>Antes de que te vayas, es importante que te unas al canal de whatsapp pues ese va a ser nuestro medio de comunicación principal.</p>
      <Link href='https://chat.whatsapp.com/CjlgqJDB7rFJyc1wZiDnxf'>
        <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-5 flex mx-auto'><Image src="/whatsapp.png" width={30} height={30} />Aquí está el salseo</button>
      </Link>
      <p className='mt-5'>Y ahora toca elegir si vienes online o presencial.</p>
      <p className='mt-5'>Te veo en el primer correo.</p>
    </div>
  )
}

export default Agradecimiento
