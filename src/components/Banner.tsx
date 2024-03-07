import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"

const items = [
    {
        title: 'Comfortable Sofa With Greate Comfort',
        img: 'https://i.ibb.co/0DgnG7N/png-clipart-modern-sofa-single-sofa-modern-thumbnail-removebg-preview.png'
    },
    {
        title: 'Cozy Couch Providing Superior Comfort',
        img: 'https://i.ibb.co/0DgnG7N/png-clipart-modern-sofa-single-sofa-modern-thumbnail-removebg-preview.png'
    },
    {
        title: 'Luxurious Lounger Ensuring Maximum Comfort',
        img: 'https://i.ibb.co/0DgnG7N/png-clipart-modern-sofa-single-sofa-modern-thumbnail-removebg-preview.png'
    },
    {
        title: 'Relaxing Settee Delivering Great Comfort',
        img: 'https://i.ibb.co/0DgnG7N/png-clipart-modern-sofa-single-sofa-modern-thumbnail-removebg-preview.png'
    },
];

const downBanner = [
    {
        img: 'https://i.ibb.co/5R3yYPF/png-clipart-beige-and-brown-throw-pillows-throw-pillows-towel-couch-cushion-collection-pillows-misce.png',
        title: 'Pillow'
    },
    {
        img: 'https://i.ibb.co/VJGZ5wb/f-29369212-1656592919187-bg-processed-removebg-preview.png',
        title: 'Chair'
    },
    {
        img: 'https://i.ibb.co/30ChzXw/png-transparent-creative-iron-lamps-product-kind-black-chandelier-thumbnail-removebg-preview.png',
        title: 'Lighting'
    },
    {
        img: 'https://i.ibb.co/0DgnG7N/png-clipart-modern-sofa-single-sofa-modern-thumbnail-removebg-preview.png',
        title: 'Sofa'
    },
]





function Navbar() {
    return (
        <div className="relative mb-[100px] md:mb-[300px] bg-[#eaecea]">
            <div className="w-screen lg:h-[85vh] pt-16 flex justify-center items-center lg:overflow-y-hidden ">
                <div className="container mx-auto ">
                    <Carousel className="w-full h-full">
                        <CarouselContent>

                            {
                                items.map((item, index) => {
                                    return (
                                        <CarouselItem key={index}>
                                            <div >
                                                <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 items-center justify-between p-6">
                                                    <div>
                                                        <h1 className="lg:text-5xl text-3xl font-bold leading-tight">{item.title}</h1>
                                                        <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque qui nisi <br />aspernatur laudantium dolorum praesentium libero veniam maiores iusto,<br /> hic odio impedit voluptas ducimus assumenda debitis. Aspernatur, ipsam. Placeat!</p>
                                                        <Button className="py-6 px-12" variant='outline'>Shop Now</Button>
                                                    </div>
                                                    <img className="lg:w-[40rem]" src={item.img} alt={`img${index + 1}`} />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    )
                                })
                            }

                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

            </div>
            <div className="md:grid md:grid-cols-2 hidden lg:grid-cols-4 absolute gap-12  -bottom-60 left-0 right-0 p-9 bg-white container mx-auto">
                {
                    downBanner.map((item, index) => <div className="bg-[#eaecea] px-8 flex justify-center relative items-center" key={index}>
                        <img className="w-full" src={item.img} alt={`img${index}`} />
                        <p className="absolute text-gray-500 bg-white text-xl font-semibold py-2 px-5 rounded">Comfortable {item.title}</p>
                    </div>)
                }
            </div>
        </div>

    )
}

export default Navbar