import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../utils/accountContext';
import GymRule from '../components/shared/gymrules';
import ImageIcons from '../components/imageComponent/ImageIcons';
import InnerPageBanner from '../components/shared/imagePageBanner';
import { WindowScroll } from '../utils/windowScroll';
function Services() {
    const { serviceData } = useContext(AccountContext);
    return (
        <>
            <InnerPageBanner img={ImageIcons.serviceBanner} heading='Services' desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
            <section className="">
                <div className="container">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                        {serviceData?.map((item, index) => (
                            <div key={index} className="all-services w-full xs:m-3 bg-[#334023] p-8 text-center transform transition-transform duration-300 hover:translate-y-1">
                                <img src={item?.image} alt={item?.altTag} className="text-[#334023] w-[100px] p-[6px] mx-auto" />
                                <span className="text-[#fff] text-[22px] font-bold my-4 block capitalize">{item?.title}</span>
                                <p className="text-[18px] text-white">{item?.metaDescription.substring(0, 84)}</p>
                                <Link to={`/services/${item?.handle}`} className="bg-[#c19b57] inline-block font-semibold rounded-[4px] mt-5 px-4 text-[#fff] py-2 hover:before:bg-[#fff] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#c19b57] hover:before:left-0 hover:before:w-full" onClick={WindowScroll}>
                                    <span className="relative z-10 flex items-center text-[19px] font-semibold">Read More</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <GymRule />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services?.map((service, index = 0) => (
                        <div
                            key={index}
                            className={`relative p-0 ${index % 2 === 0} lg:order-${index + 1}`}
                        >
                            {service.imgSrc && (
                                <div className="img-container overflow-hidden">
                                    <img src={service.imgSrc} alt="Service" className="w-full h-[420px] object-cover relative rounded-[6px]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Services;
const services = [
    { imgSrc: ImageIcons.personaltrainer1 },
    { imgSrc: ImageIcons.strength1 },
    { imgSrc: ImageIcons.hiit3 },
    { imgSrc: ImageIcons.zumba2 },
];
