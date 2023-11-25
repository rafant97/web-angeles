import React from 'react'

const FormEmail = ({textoBoton}) => {
  return (
    <div className=''>
      <form className='flex flex-row w-full'>
        <input 
            type="email" 
            placeholder="Tu correo" 
            className='border border-slate-200 p-2 rounded-3xl w-2/3'
        />
        <button 
            className='bg-slate-400 text-white p-3 rounded-3xl w-1/3 bg-azul-figma ml-5' type="submit"
        >{textoBoton}</button>
      </form>
    </div>
  )
}

export default FormEmail
