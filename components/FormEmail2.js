'use client'

import { useState } from 'react'
import axios from 'axios'

const FormEmail = ({textoBoton}) => {

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
        className=''
      >
        <input 
            type="email" 
            placeholder="Tu correo" 
            className='border-2 mt-5 w-4/5 border-slate-200 p-2 rounded-3xl'
            onChange={(e) => setEmail(e.target.value)}
        />
        <button 
            className='p-3 mt-5 font-bold w-4/5 text-primary rounded-3xl bg-orange-200' type="submit"
        >{textoBoton}</button>
      </form>
    </div>
  )
}

export default FormEmail
