import React, { useState } from 'react';
import { GoUnmute, GoMute } from "react-icons/go";
import { ImageIcons } from '../imageComponent';

const Banner = () => {
    const [play, setPlay] = useState(false);
    const handleVoice = () => {
        setPlay(prev => !prev);
    };
    return (
        <div className="about relative w-full h-[640px] overflow-hidden">
            <video autoPlay muted={play ? false : true} loop className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2">
                <source src={ImageIcons.video} type="video/mp4" />
            </video>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-5">
                <div className='bg-[#334023a8] p-4 rounded-md'>
                    <h1 className="text-[38px] md:text-[42px] lg:text-[82px] font-bold lg:leading-[108px] text-center">
                        Ignite Transformation
                    </h1>
                    <h2 className="text-2xl md:text-4xl lg:text-[68px] font-bold leading-tight text-center">
                        & Unite Your Strength
                    </h2>
                    <p className="text-base md:text-[28px] lg:text-[22px] font-light text-center lg:leading-[34px] py-4 lg:max-w-[800px] ">
                        Discover fitness excellence at our premier gym. Join us today and unleash your full potential!
                    </p>
                </div>
            </div>
            {play ? (
                <GoMute
                    className='absolute bottom-[38px] right-[38px] z-10 text-[#c19b57] h-[48px] w-[48px] cursor-pointer p-[10px] bg-white rounded-full'
                    onClick={handleVoice} />
            ) : (
                <GoUnmute
                    className='absolute bottom-[38px] right-[38px] z-10 text-[#c19b57] h-[48px] w-[48px] cursor-pointer p-[10px] bg-white rounded-full'
                    onClick={handleVoice} />
            )}
        </div>
    );
};

export default Banner;
