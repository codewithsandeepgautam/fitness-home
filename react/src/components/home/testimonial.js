import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { ImageIcons } from '../imageComponent';
const Testimonial = () => {
    const sliderRef = useRef(null);
    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
    };
    return (
        <section>
            <div className="container m-auto xl:flex items-center">
                <div className='sm:text-center md:text-center lg:text-center xl:text-left text-center'>
                    <span className="inline-block text-[26px] uppercase text-[#c19b57] mb-4 font-semibold">Our Happy Clients</span>
                    <h1 className="headingset leading-[46px] text-[42px] font-bold  text-[#334023] pb-5"> A word from our customers</h1>
                </div>
                <div className="max-w-[1000px] m-auto">
                    <Slider ref={sliderRef} {...settings} className='px-[0] md:px-[80px] bg-top bg-auto pt-[18px]'>
                        {testimonialData?.map((item, i) => (
                            <div>
                                <div className="text-center max-w-[800px] m-auto" key={i}>
                                    <img src={item?.profileImage} alt={"img"} className="m-auto rounded-full border-[3px] p-[1px] border-[#c19b57] bg-cover w-[121px] mb-2" />
                                    <p className="text-[18px] md:text-[20px] lg:text-[22px] text-black">{item?.text}</p>
                                    <p className="mb-[22px] md:my-[22px] text-[#c19b57] italic font-bold ">{item?.desc}</p>
                                    <div className="rating flex justify-center mb-[45px]">
                                        <span className="mx-[2.5px] text-[#334023] text-[22px]">{item?.rating}</span>
                                        <span className="mx-[2.5px] text-[#334023] text-[22px]">{item?.rating}</span>
                                        <span className="mx-[2.5px] text-[#334023] text-[22px]">{item?.rating}</span>
                                        <span className="mx-[2.5px] text-[#334023] text-[22px]">{item?.rating}</span>
                                        <span className="mx-[2.5px] text-[#334023] text-[22px]">{item?.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='flex justify-center gap-[10px]'>
                        <button className="bg-[#c19b57] text-md font-semibold rounded-[4px] px-6 text-[#fff] py-3 hover:before:bg-[#334023] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full" onClick={() => sliderRef.current.slickPrev()}>
                            <span className="relative z-10 flex items-center text-[22px] font-semibold"><FaArrowLeft /></span>
                        </button>
                        <button className="bg-[#c19b57] text-md font-semibold rounded-[4px] px-6 text-[#fff] py-3 hover:before:bg-[#334023] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full" onClick={() => sliderRef.current.slickNext()}>
                            <span className="relative z-10 flex items-center text-[22px] font-semibold"><FaArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
const testimonialData = [
    {
        profileImage: ImageIcons.Client1,
        text: "This is the friendliest gym or exercise class I have ever been to! The coaches all know my capabilities (and when to push me) and the atmosphere is supportive and fun. I never thought I would enjoy strength training and sweating so much.",
        rating: <FaStar />,
        desc: "Tanishq"
    },
    {
        profileImage: ImageIcons.Client2,
        text: "The level of strength and fitness that I’ve achieved since joining Artemis has amazed me, more than any other gym I’ve been to. These workouts have significantly decreased my chronic pain and improved my mood as I see that I am capable of far more than I imagined and can control more of my physical wellbeing than I had thought.",
        rating: <FaStar />,
        desc: "Pravneet Kaur"
    },
    {
        profileImage: ImageIcons.Client3,
        text: "Gym is a very special place. If you have a goal they will give you the tools, support and accountability to achieve it. The space is meticulously clean and each class is organized and fast paced. All the trainers are extremely knowledgeable about nutrition and fitness. They make sure your form is correct and are happy to make any modifications when necessary.",
        rating: <FaStar />,
        desc: "Rahul Thakur"
    },

]
export default Testimonial