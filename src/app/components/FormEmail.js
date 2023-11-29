import React from 'react'

const FormEmail = ({textoBoton}) => {
  return (
    <div className=''>
      <form className='flex flex-row w-full'>
        <input 
            type="email" 
            placeholder="Tu correo" 
            className='border border-slate-200 p-2 rounded-3xl w-2/3 bg-transparent'
        />
        <button 
            className='p-3 font-bold text-primary rounded-3xl md:w-1/3 w-auto bg-nuevo-azul ml-5' type="submit"
        >{textoBoton}</button>
      </form>
    </div>
  )
}

export default FormEmail
