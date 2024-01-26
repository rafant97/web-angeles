'use client'

import { useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation';

const FormEmail = ({textoBoton}) => {

  const router = useRouter()
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if([email].includes('')) {
      alert('Tu correo no puede estar vacío')
      return;
    } else {
      alert('Gracias por susbribirte!');
    }
    
    //Envio de datos a MailerLite
    const mailerLiteApiUrl = 'https://connect.mailerlite.com/api/subscribers';

    const agregarSuscriptor = async (email) => {
      try {
        const response = await axios.post(
          `${mailerLiteApiUrl}`,
          {
            email,
            "groups": [
              "106201185827947594"
            ]
          },
          //TODO: Añadir el token como variable de entorno
          {
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json',
              Authorization: ` Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_TOKEN}`,
            },
          }
        );
    
        // Maneja la respuesta según sea necesario
        console.log('Respuesta de MailerLite:', response.data);
        router.push('/agradecimiento')
      } catch (error) {
        // Maneja los errores
        console.error('Error al agregar suscriptor:', error);
      }
    };

    agregarSuscriptor(email);
  }
  return (
    <div className=''>
      <form
        onSubmit={handleSubmit}
        className='flex flex-row w-full'
      >
        <input 
            type="email" 
            placeholder="Tu correo" 
            className='border border-slate-200 p-2 rounded-3xl w-2/3 text-black'
            onChange={(e) => setEmail(e.target.value)}
        />
        <button 
            className='p-3 font-bold text-primary rounded-3xl md:w-1/3 w-auto bg-orange-200 ml-5' type="submit"
        >{textoBoton}</button>
      </form>
    </div>
  )
}

export default FormEmail
