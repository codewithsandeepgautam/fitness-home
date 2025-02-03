import React from 'react'
import { Link } from 'react-router-dom';
import { ImageIcons } from '../components/imageComponent';
import { MdContentCopy } from "react-icons/md";
import InnerPageBanner from '../components/shared/imagePageBanner';
import aboutimg from "../assets/images/about-banner.png"
import { CopyToClipboard } from '../utils/copyToClipboard';
function SocialMedia() {
    return (
        <div>
            <InnerPageBanner img={aboutimg} heading="Social Media" desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
            <section className="container">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className="bg-[#c19b572b] p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <Link to='https://www.facebook.com/fitnesshomechandigarh' target='_blank'>
                                <div className="flex items-center space-x-2">
                                    <img className='w-16 h-16 rounded-full bg-[#c19b57] p-[2px] transition-all duration-300 hover:bg-[#334023]' src={ImageIcons?.Facebook} alt="icon" />
                                    <div>
                                        <p className="font-semibold text-[20px]">Fitness Home</p>
                                        <p className="text-md">Last Posted 2 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="text-gray-500 cursor-pointer">
                                <button className=" transition-all duration-300 hover:bg-[#334023] hover:text-white rounded-full p-2" onClick={() => CopyToClipboard("https://www.facebook.com/fitnesshomechandigarh", "Link copied successfully")}>
                                    <MdContentCopy className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#c19b572b] p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <Link to='https://www.instagram.com/fitnesshomechandigarh/profilecard/?igsh=MWF4cmRiZTI0ZGF4eg%3D%3D' target='_blank'>
                                <div className="flex items-center space-x-2">
                                    <img className='w-16 h-16 rounded-full bg-[#c19b57] p-[2px] transition-all duration-300 hover:bg-[#334023]' src={ImageIcons.Instagram} alt="icon" />
                                    <div>
                                        <p className="font-semibold text-[20px]">Fitness Home</p>
                                        <p className="text-md">Last Posted 2 hours ago</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="text-gray-500 cursor-pointer">
                                <button className=" transition-all duration-300 hover:bg-[#334023] hover:text-white rounded-full p-2" onClick={() => CopyToClipboard("https://www.instagram.com/fitnesshomechandigarh/profilecard/?igsh=MWF4cmRiZTI0ZGF4eg%3D%3D")}>
                                    <MdContentCopy className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default SocialMedia;