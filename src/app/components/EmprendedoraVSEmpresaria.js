import React from 'react'

const EmprendedoraVSEmpresaria = () => {
  return (
    <div className='mt-28'>
      <h1 className='text-primary text-4xl font-bold text-center'>
        Espera, solo un poco más. <br /> ¿Cómo te sientes hoy?
      </h1>

      <div className='grid md:grid-cols-2 grid-cols-1 md:py-10 py-5 md:gap-30 
      gap-20 mx-auto items-center content-center w-[80%]'>

        <div className='border-2 border-nuevo-azul p-6 rounded-2xl bg-nuevo-azul-2'>
            <h4 className='text-primary text-3xl font-bold text-left'>Emprendedora</h4>
            <p className='text-primary mt-3 text-left'
            >Conviértete en consultor digital de marca personal o incluye sesiones de 
            personal branding en tus servicios actuales.</p>
            <div className='flex flex-col mt-3 gap-2'>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=''>
                        <circle cx="8" cy="8" r="8" fill="#5F6C7B"/>
                    </svg>
                    <p className='text-slate-500 ml-3'>Conviértete en consultor digital</p>
                </div>

                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=''>
                        <circle cx="8" cy="8" r="8" fill="#5F6C7B"/>
                    </svg>
                    <p className='text-slate-500 ml-3'>Conviértete en consultor digital</p>
                </div>

                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=''>
                        <circle cx="8" cy="8" r="8" fill="#5F6C7B"/>
                    </svg>
                    <p className='text-slate-500 ml-3'>Conviértete en consultor digital</p>
                </div>
            </div>
        </div>

        <div className='border-2 border-nuevo-azul p-6 rounded-2xl'>
            <h4 className='text-primary text-3xl font-bold text-left'>Empresaria</h4>
            <p className='text-primary mt-3 text-left'
            >Conviértete en consultor digital de marca personal o incluye sesiones de 
            personal branding en tus servicios actuales.</p>
            <div className='flex flex-col mt-3 gap-2'>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=''>
                        <circle cx="8" cy="8" r="8" fill="#5F6C7B"/>
                    </svg>
                    <p className='text-slate-500 ml-3'>Conviértete en consultor digital</p>
                </div>

                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=''>
                        <circle cx="8" cy="8" r="8" fill="#5F6C7B"/>
                    </svg>
                    <p className='text-slate-500 ml-3'>Conviértete en consultor digital</p>
                </div>

                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=''>
                        <circle cx="8" cy="8" r="8" fill="#5F6C7B"/>
                    </svg>
                    <p className='text-slate-500 ml-3'>Conviértete en consultor digital</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default EmprendedoraVSEmpresaria
