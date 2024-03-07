'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { PiListPlusFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Login } from "./homeCompo/Login";



export default function Navbar() {
    const links = [
        {
            linkName: 'Home',
            path: '/'
        },
        {
            linkName: 'Shop',
            path: '/shop'
        },
        {
            linkName: 'Contact',
            path: '/contact'
        },
        {
            linkName: 'Blogs',
            path: '/blogs'
        },
    ];

    const pathname = usePathname();
    const [isTrue, setIsTrue] = useState(true);

    return (
        <div className="flex items-center justify-between">
            <Logo />

            <ul className="lg:flex hidden justify-center items-center gap-10">
                {
                    links.map((item, index) => <li className={`${pathname == item.path ? 'bg-[#d6dfd6] rounded' : ''} py-2 px-7  font-semibold`} key={index}><Link href={item.path}>{item.linkName}</Link></li>)
                }
            </ul>
            <div className="flex  items-center text-base md:gap-8 gap-4 md:text-xl">

                <AlertDialog>
                    <AlertDialogTrigger><IoSearch /></AlertDialogTrigger>
                    <AlertDialogContent className="rounded">
                        <AlertDialogCancel className="text-gray-200 hover:text-gray-700"><RxCross2 /></AlertDialogCancel>
                        <div className="flex w-full items-center space-x-2">
                            <Input type="text" placeholder="Search Your Product" />
                            <Button type="submit"><IoSearch/> </Button>
                        </div>

                    </AlertDialogContent>
                </AlertDialog>

                <AiFillShopping />
                <div className="cursor-pointer">
                    <Login/>
                </div>
            </div>

            <div className={`lg:hidden text-2xl cursor-pointer  border border-gray-300 w-8 flex justify-center items-center rounded h-8`}>{!isTrue ? <div className="text-3xl" onClick={() => setIsTrue(!isTrue)}><RxCross2 /></div> : <PiListPlusFill onClick={() => setIsTrue(!isTrue)} />} </div>

            <div className={`lg:hidden absolute z-20 block duration-500 py-5 bg-transparent backdrop-blur-md rounded -translate-y-80 ${!isTrue && 'translate-y-0'} w-[90%] top-20 left-0 right-0 mx-auto`}>

                {
                    links.map((item, index) => <Link onClick={() => setIsTrue(!isTrue)} href={item.path}><li className={`${pathname == item.path ? 'bg-[#d6dfd6] rounded' : ''} py-2 px-7  font-semibold w-full text-center list-none`} key={index}>{item.linkName}</li></Link>)
                }

            </div>
        </div>
    )
}
