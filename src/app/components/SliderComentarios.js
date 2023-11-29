'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import clientes from '../../data/comments.js'


const SliderComentarios = () => {

  return (
    <>
        <div>
            <h5 className='text-center text-3xl text-primary font-bold'>Personitas que han decidido liberarse</h5>
            <div className='w-full mt-10 flex flex-col'>
                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 3,
                        }
                    }}
                    slidesPerView={3}
                    className="h-[280px] sm:h-[480px] w-full "
                >
                    <div className="">
                        {clientes.map((cliente, index) => {
                            return(
                                <SwiperSlide key={index}>
                                    <div className='border-2 border-slate-200 p-[25px] rounded-2xl mr-5'>
                                            <p className='leading-none justify-center text-primary text-xs'>	&quot;{cliente.comentario}&quot;</p>
                                        <div className='flex mt-5 border-t-2'>
                                            <div className='mt-5'>
                                                Imagen
                                            </div>
                                            <div className='ml-5 mt-5'>
                                                <p className='text-2xl font-bold text-primary'>{cliente.nombre}</p>
                                                <p className='text-slate-500 text-xs'>{cliente.puesto}</p>
                                            </div>
                                                
                                        </div>       
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </div>
                    
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default SliderComentarios
