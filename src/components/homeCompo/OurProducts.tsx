"use client"
import { Product } from "@/dataFeatch/allProducts";
import Title from "../Title";
import ReactStars from "react-rating-stars-component";
import { Button } from "../ui/button";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";


export default function OurProducts({ allData }: { allData: Product[] }) {
    const [sliceData, setSliceData] = useState(8);
    const [products, setProducts] = useState(allData);
    const [activeButton, setActiveButton] = useState('all');

    const handleSliceData = () => {
        if (sliceData === 8) {
            setSliceData(allData.length);
        }
        else if (sliceData === allData.length) {
            setSliceData(8)
        }
    }
    const handleCategory = (type: string) => {

        if (type === 'all') {
            setProducts(allData);
            setSliceData(8);
        } else {
            const filterType = allData.filter(data => data.type === type);
            setProducts(filterType);
            setSliceData(4);
        }
        setActiveButton(type)
    }

    return (
        <div>
            <div className='container mx-auto'>
                <Title>Our Products</Title>

                <div className="mt-16 flex flex-wrap justify-between gap-2 items-center">
                    <div className=" flex flex-wrap items-center justify-start gap-y-2 gap-x-10">
                        <button onClick={() => handleCategory("all")} className={activeButton === 'all' ? 'font-bold' : 'font-medium'}>All Products</button>
                        <button onClick={() => handleCategory("table")} className={activeButton === 'table' ? 'font-bold' : 'font-medium'}>Table</button>
                        <button onClick={() => handleCategory("chair")} className={activeButton === 'chair' ? 'font-bold' : 'font-medium'}>Chair</button>
                        <button onClick={() => handleCategory("other things")} className={activeButton === 'other things' ? 'font-bold' : 'font-medium'}>Others</button>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Filter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Comming</SelectLabel>
                                    <SelectItem value="apple">Comming</SelectItem>
                                    <SelectItem value="apple">Comming</SelectItem>
                                    <SelectItem value="apple">Comming</SelectItem>
                                    <SelectItem value="apple">Comming</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className={`grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 ${sliceData === 4 ? 'grid-rows-1' : sliceData === 8 ? 'grid-rows-2' : 'grid-rows-3'} gap-x-12 mt-16`}>
                    {
                        products.slice(0, sliceData).map((item, index) => {
                            return (
                                <div className='h-[80%]' key={index}>
                                    <div className='bg-[#eaecea] h-[80%] flex justify-center items-center'><img className='w-full h-full' src={item.img} alt="" /></div>
                                    <div className='flex justify-between mt-4 items-center'>
                                        <div>
                                            <p className='font-semibold'>{item.name}</p>
                                            <p>${item.price}</p>
                                        </div>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                value={item.rating}
                                                size={24}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {
                    sliceData === 4 ? '' :
                        <div className="flex justify-center items-center"><Button variant={'outline'} onClick={handleSliceData}>{sliceData === 8 ? 'See More' : 'See Less'}</Button></div>
                }

            </div>
        </div>
    );
}