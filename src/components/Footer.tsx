import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaLocationPin } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Input } from './ui/input';
import { IoPaperPlane } from "react-icons/io5";

export default function Footer() {
    return (
        <div className='mt-10'>

            <div className='bg-[#eaecea]  p-12'>
                <div className='flex justify-between flex-col lg:flex-row items-start gap-20 container mx-auto'>
                    <div className='flex flex-col gap-5'>
                        <Logo />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eos odit eligendi iusto, excepturi veritatis cum, maiores ratione eaque dolor sit dolorem libero illum omnis nostrum accusantium deleniti, illo voluptatibus!</p>
                        <div className='flex items-center gap-2'>
                            <Button variant='outline' size='icon'><FaFacebookF /></Button>
                            <Button variant='outline' size='icon'><FaTwitter /></Button>
                            <Button variant='outline' size='icon'><FaLinkedinIn /></Button>
                            <Button variant='outline' size='icon'><FaInstagram /></Button>
                            <Button variant='outline' size='icon'><MdAlternateEmail /></Button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl font-semibold'>People</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur minima assumenda facere! Voluptatibus eos</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl font-semibold'>Contact Us</h1>
                        <div className='flex items-center gap-3'><FaLocationPin></FaLocationPin> <p>New Voirob Hotel and Restaurant
                            <br />Asian, Bangladeshi</p></div>
                        <div className='flex items-center gap-3'><FaPhone /> <p>+8801304581989<br />+8801304581989</p></div>
                        <div className='flex items-center gap-3'><IoMdMail /> <span>mahbub01304@gmail.com</span></div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl font-semibold'>Join To NewsLetter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, qui quaerat. Non numquam, ea mollitia natus voluptatibus.</p>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="email" placeholder="Email" />
                            <Button type="submit" variant='outline'  ><IoPaperPlane className='text-gray-600'></IoPaperPlane></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-between container mx-auto py-2'>
                <p>© 2024 CozyMart LTD All rights reserved.</p>
                <div className='flex items-center gap-7'>
                    <p>Home</p>
                    <p>Blogs</p>
                    <p>Contact</p>
                </div>
            </div>

        </div>
    )
}
