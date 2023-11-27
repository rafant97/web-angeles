import Image from 'next/image'

const TitleParrafoeImagen = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:py-20 items-center md:gap-40 gap-20 mx-auto align-middle'>
      <div className='w-full flex-col flex-1 mx-auto'>
        <h5 className="text-5xl text-primary"
        >
            ¿Cuando se <span className="font-bold">gestó </span>
            Lidérate y quién es su <span className="font-bold">
            mamá Ángeles</span>
            ?
        </h5>

        <p className="text-slate-500 mt-5">Learn how to reliably scale up your creative side-hustle and build systems for sustainable growth, without burning out and while enjoying the journey. Learn how to reliably scale up your creative side-hustle and build systems for sustainable growth, without burning out and while enjoying the journey.
            <br /><br />Learn how to reliably scale up your creative side-hustle and build systems for sustainable growth, without burning out and while enjoying the journey. Learn how to reliably scale up your creative side-hustle and build systems for sustainable growth, without burning out and while enjoying the journey.
        </p>
      </div>

      <div className='flex content-normal mx-auto '>
        <svg className='md:w-[900px] md:h-[400px] xl:h-[600px] rotate-[-155deg] absolute md:right-[-250px] xl:right-[-210px] md:top-[400px] xl:top-[90px] hidden md:flex' >
            <ellipse cx="500" cy="240" rx="350" ry="80" fill="none" stroke="#8ACFE2"/>
        </svg>

        <svg className='md:w-[900px] md:h-[400px] xl:h-[600px] rotate-[-155deg] absolute md:right-[-250px] xl:right-[-210px] md:top-[400px] xl:top-[150px] hidden md:flex' >
            <ellipse cx="500" cy="240" rx="350" ry="80" fill="none" stroke="#8ACFE2"/>
        </svg>

        <div className='flex items-center h-full w-[328px] md:w-[410px] mb-10'>
            <div className='shrink-0 absolute pl-5 rotate-[60deg] z-20 md:right-[450px] xl:right-[530px] md:top-[330px] xl:top-[212px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 68 68" fill="none">
                    <g clip-path="url(#clip0_2_39)">
                        <path d="M11.8194 22.4664C19.4604 27.7098 24.47 30.7341 26.7993 34.4274C29.2967 39.7831 26.8147 45.5238 22.4664 56.1805C28.8787 46.8061 31.9534 41.5344 37.4278 40.3117C42.0443 39.6721 47.4697 41.9792 56.1806 45.5335C46.0785 38.6241 40.7411 35.5889 40.1012 29.2519C40.226 25.0472 42.4793 19.848 45.5336 11.8194C39.5032 20.6076 36.4061 25.9161 31.8532 27.6674C27.1595 28.7094 21.5799 26.1802 11.8194 22.4664Z" fill="#092C45"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_39">
                            <rect width="60" height="60" fill="white" transform="translate(0.285889 44.647) rotate(-62.5263)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className='shrink-0 absolute pl-5 rotate-[-30deg] z-20 right-[135px] top-[213px] hidden md:flex'>
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

            <Image src="/Ellipse.png" width={1400} height={1522} alt="Angeles Conejero" 
            className='shrink-0 h-[550px] z-10 grayscale-[10%]'
            />
        </div>
        
        
      </div>
    </div>
  )
}

export default TitleParrafoeImagen
