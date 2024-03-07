import { Button } from "../ui/button";


export default function BeautifulSofa() {
    return (
        <div className="container mx-auto my-40">
            <div className="flex justify-between px-10 items-center bg-[#eaecea] h-[37vh] relative">
                <div className="">
                    <h1 className="lg:text-5xl text-3xl font-bold leading-tight">Beautiful Sofa</h1>
                    <p>From $350</p>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Button className="py-6 px-12" variant='default'>Shop Now</Button>
                </div>
                <div className="absolute hidden md:block lg:w-[45rem] -top-36 lg:-top-72 right-0">
                    <img className="w-full h-full" src="https://i.ibb.co/Y0FThM9/gratis-png-sofa-de-desmayo-de-rayas-blancas-y-negras-sillon-de-mesa-sillon-sillon-sofa-a-rayas-thumb.png" alt="" />
                </div>

            </div>
        </div>
    )
}
