import React from 'react';
import { ImageIcons } from '../imageComponent';
function Trainer() {
    return (
        <section>
            <div className="container mx-auto px-4">
                <div className='text-center pb-7'>
                    <span className="inline-block text-[26px] uppercase text-[#c19b57] mb-4 font-semibold">Trainers</span>
                    <h1 className="headingset capitalize leading-[46px] text-[42px] font-bold mb-6 text-[#334023] pb-5">
                        Dedicated and professional trainers <br /> ready to support you
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2  gap-4">
                    {trainers?.map((item, index) => (
                        <div key={index} className="bg-[#3340232b] overflow-hidden rounded-[4px]">
                            <div className="block img-container">
                                <img src={item?.img} alt={item?.role} className="w-full object-cover h-[350px] object-top" />
                            </div>
                            <div className="py-[12px] bg-[#c19b57] text-center text-white">
                                <h4 className="text-[22px] font-semibold capitalize">
                                    {item?.name}
                                </h4>
                                <h6 className="border-white-300 pb-4 text-lg capitalize">{item?.role}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
const trainers = [
    {
        img: ImageIcons.Trainer1, name: 'Karam Singh', role: 'Fitness Manager ',
    },
    {
        img: ImageIcons.Trainer4, name: 'Balwinder Balli', role: 'Head Trainer',
    },
    {
        img: ImageIcons.Trainer3, name: 'Surjeet sodhi', role: 'Assistant Trainer',
    }
];
export default Trainer;
