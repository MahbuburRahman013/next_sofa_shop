import React from 'react'
import Title from './Title'
import { FaCartPlus } from "react-icons/fa";
import { Button } from './ui/button';
import { FaRegHeart } from "react-icons/fa";

const featuresData = [
    {
        img: 'https://i.ibb.co/nQYyPGY/png-transparent-votive-candle-wax-candle-candle-family-amazoncom-thumbnail-removebg-preview.png',
        name: 'Super Candle',
        price: 3234
    },
    {
        img: 'https://i.ibb.co/w7DNfnx/gvbm-301y-2-removebg-preview.png',
        name: 'LG Bread Meaker',
        price: 3234
    },
    {
        img: 'https://i.ibb.co/7b3Q67M/BL-002-03-removebg-preview.png',
        name: 'Mac Blander',
        price: 3234
    },
    {
        img: 'https://i.ibb.co/cYRWd8V/pngtree-frying-pan-photography-pictures-kitchenware-cooking-png-image-3610509-removebg-preview.png',
        name: 'Apple Pan',
        price: 3234
    },
]






export default function FeaturesProduct() {
    return (
        <div className='container mx-auto md:mt-[400px]'>
            <Title>Featured Products</Title>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-10 gap-12'>
                {
                    featuresData.map((item, index) => {
                        return (
                            <div className='h-[80%]' key={index}>
                                <div className='bg-[#eaecea] h-[85%] flex justify-center items-center'><img className='w-full h-full' src={item.img} alt="" /></div>
                                <div className='flex justify-between mt-4 items-center'>
                                    <div>
                                        <p className='font-semibold'>{item.name}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Button variant='outline' size='icon'><FaCartPlus /></Button>
                                        <Button variant='outline' size='icon'><FaRegHeart /></Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
