import React from 'react'
import FormEmail from './FormEmail'
import Image from 'next/image'

const PrimeraVista = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:py-20 items-center md:gap-40 gap-20 mx-auto align-middle'>
      <div className='w-full flex-col flex-1 mx-auto'>
        <h1 
        className='text-7xl font-bold text-primary flex'>
            Aprende a liderarte para liberarte.</h1>
        <p className='text-slate-500 mt-2 '>Porttitor faucibus risus metus ac odio. Maecenas consectetur mauris enim, ut vestibulum tellus iaculis eget. Pellentesque feugiat turpis eget nibh dignissim convallis. Donec gravida elementum dui nec fringilla.

        </p>

        <div className='mt-5'>
          <FormEmail 
            textoBoton="Suscribirse"
          />

        </div>
        
      </div>

      <div className='flex content-normal mx-auto'>
        <svg className='w-[900px] h-[600px] rotate-[145deg] absolute right-[-100px] top-0' >
            <ellipse cx="500" cy="240" rx="350" ry="80" fill="none" stroke="#8ACFE2"/>
        </svg>

        <div className='flex items-center h-full w-[410px] mb-10'>
            <div className='shrink-0 absolute pl-5 rotate-[5deg] z-20 right-[600px] top-[490px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 68 68" fill="none">
                    <g clip-path="url(#clip0_2_39)">
                        <path d="M11.8194 22.4664C19.4604 27.7098 24.47 30.7341 26.7993 34.4274C29.2967 39.7831 26.8147 45.5238 22.4664 56.1805C28.8787 46.8061 31.9534 41.5344 37.4278 40.3117C42.0443 39.6721 47.4697 41.9792 56.1806 45.5335C46.0785 38.6241 40.7411 35.5889 40.1012 29.2519C40.226 25.0472 42.4793 19.848 45.5336 11.8194C39.5032 20.6076 36.4061 25.9161 31.8532 27.6674C27.1595 28.7094 21.5799 26.1802 11.8194 22.4664Z" fill="#092C45"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_39">
                            <rect width="50" height="50" fill="white" transform="translate(0.285889 44.647) rotate(-62.5263)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className='shrink-0 absolute pl-5 rotate-[5deg] z-20 right-[60px] top-[213px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 68 68" fill="none">
                    <g clip-path="url(#clip0_2_39)">
                        <path d="M11.8194 22.4664C19.4604 27.7098 24.47 30.7341 26.7993 34.4274C29.2967 39.7831 26.8147 45.5238 22.4664 56.1805C28.8787 46.8061 31.9534 41.5344 37.4278 40.3117C42.0443 39.6721 47.4697 41.9792 56.1806 45.5335C46.0785 38.6241 40.7411 35.5889 40.1012 29.2519C40.226 25.0472 42.4793 19.848 45.5336 11.8194C39.5032 20.6076 36.4061 25.9161 31.8532 27.6674C27.1595 28.7094 21.5799 26.1802 11.8194 22.4664Z" fill="#092C45"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_39">
                            <rect width="50" height="50" fill="white" transform="translate(0.285889 44.647) rotate(-62.5263)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <Image src="/foto-inicio.jpg" width={1400} height={1522} alt="Angeles Conejero" 
            className='shrink-0 h-[550px] rounded-tl-[250px] rounded-tr-[250px] z-0'
            />
        </div>
        
        
      </div>
    </div>
  )
}

export default PrimeraVista
