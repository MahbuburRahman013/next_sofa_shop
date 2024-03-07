'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '@/components/shopCompo/shop.css'

const slideData = [
    {
        img: 'https://i.ibb.co/w7DNfnx/gvbm-301y-2-removebg-preview.png',
        discount: 32
    },
    {
        img: 'https://i.ibb.co/7b3Q67M/BL-002-03-removebg-preview.png',
        discount: 35
    },
    {
        img: 'https://i.ibb.co/cYRWd8V/pngtree-frying-pan-photography-pictures-kitchenware-cooking-png-image-3610509-removebg-preview.png',
        discount: 15
    },
    {
        img: 'https://i.ibb.co/w7DNfnx/gvbm-301y-2-removebg-preview.png',
        discount: 32
    },
    {
        img: 'https://i.ibb.co/7b3Q67M/BL-002-03-removebg-preview.png',
        discount: 35
    },
    {
        img: 'https://i.ibb.co/cYRWd8V/pngtree-frying-pan-photography-pictures-kitchenware-cooking-png-image-3610509-removebg-preview.png',
        discount: 15
    },

]


export default function ShopBanner() {
    return (
        <div className='container  lg:h-[60vh] bg-[#eaecea] mx-auto'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"

            >
                {
                    slideData.map(item => 

                    <SwiperSlide className='relative'>
                        <img className='z-20 absolute top-0 left-0 right-0 bottom-0 m-auto ' src={item.img} />
                        <h1 className='absolute text-3xl left-44 bottom-0 font-bold z-30'>{item.discount}% OFF</h1>
                    </SwiperSlide>

                    )
                }
            </Swiper>
        </div>
    )
}
