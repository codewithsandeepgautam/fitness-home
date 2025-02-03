import React, { useState } from 'react';
import '../../style/style.css'
import { BiSolidPhoneCall } from "react-icons/bi";
import ImageIcons from '../imageComponent/ImageIcons';
import { Link } from 'react-router-dom';
import { WindowScroll } from '../../utils/windowScroll';
const About = () => {
    const [tab, setTab] = useState(0);
    const handleClick = (item) => {
        setTab(item)
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 relative xl:pr-16 lg:pr-16">
                            <div className="relative mb-5 lg:mb-0">
                                <img className='rounded-[20px] xs:w-full h-full object-cover' src={ImageIcons.AboutImg} alt='icon' />
                                <img className='animation animate-bounce absolute bottom-24 right-0 rounded-[20px] border-[#fff] border-[6px] shadow-l nextprebtn' src={ImageIcons.AboutImg1} alt='icon' />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="p-6">
                                <div className="mb-0">
                                    <span className="inline-block text-[26px] uppercase text-[#c19b57] mb-4 font-semibold">About Us</span>
                                    <h1 className="headingset leading-[46px] text-[42px] font-bold mb-6 text-[#334023]">
                                        Unlock Your Full Potential, Achieve Your Goals.
                                    </h1>
                                    <p className="text-[19px] text-[#000]">
                                        Welcome to Fitness Home, your destination for achieving your fitness goals. We understand the importance of leading a healthy lifestyle and provide a top-notch fitness facility to support you in your fitness journey.
                                    </p>
                                    <div className="tab-section mt-10">
                                        <div className="flex border-b border-gray-200 pb-6 space-x-2">
                                            {buttons.map((item, index) => {
                                                return (
                                                    <button
                                                        className={`${tab === index ? 'bg-[#c19b57]' : 'bg-[#364329c4]'} text-md font-semibold rounded-[4px] px-6 text-[#fff] py-3`}
                                                        type="button"
                                                        onClick={() => { handleClick(index) }}
                                                    >
                                                        <span className="items-center text-[22px] font-semibold">{item?.title}</span>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <div className="responsivetab">
                                                {
                                                    data?.map((item, index) => {
                                                        return (
                                                            tab === index && (<div className="customborder items-center flex gap-8 border-b border-gray-200 py-8" key={index}>
                                                                <div className="flex-none">
                                                                    <img className='smdone w-[60px]' src={item?.img} alt='icon' />
                                                                </div>
                                                                <p className="text-black text-[18px]">
                                                                    {item?.tabdata}
                                                                </p>
                                                            </div>)
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="responsive-group mt-2 flex flex-wrap items-center gap-x-8 gap-y-5">
                                        <button
                                            className="bg-[#c19b57] text-md font-semibold rounded-[4px] px-6 text-[#fff] py-3 hover:before:bg-[#364329c4] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full mt-3"
                                            type="button"><Link to="/contact-us" className="relative z-10 flex items-center text-[22px] font-semibold" onClick={WindowScroll}>
                                                <span className="relative z-10 flex items-center text-[22px] font-semibold">Make Appointment</span></Link>

                                        </button>
                                        <div className="flex gap-5">
                                            <div className="icon h-[56px] w-[56px] flex items-center justify-center border border-[#c19b57] rounded-full">
                                                <BiSolidPhoneCall className='text-[#c19b57] text-[28px]' />
                                            </div>
                                            <div className="text-[#334023]">
                                                <p className="text-[19px] font-medium mb-0">Need Help?</p>
                                                <Link className="text-xl font-bold textsize" to="tel:+79868 56887">(+91) 79868 56897</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const data = [
    {
        tabdata: "Gym plays a vital role in promoting an active and healthy lifestyle.",
        img: ImageIcons.Icon
    },
    {
        tabdata: "They provide a supportive and motivating environment for individuals to engage in regular physical activity.",
        img: ImageIcons.Icon2
    },
    {
        tabdata: "It plays a vital role in promoting an active and healthy lifestyle. They provide a supportive and motivating environment for individuals to engage in regular physical activity.",
        img: ImageIcons.Icon3
    },

]
const buttons = [
    { title: "Our Mission" },
    { title: "Our Vision" },
    { title: "Our Goal" },
]

export default About;
