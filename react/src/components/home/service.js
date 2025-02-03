import React, { useContext } from 'react';
import { AccountContext } from '../../utils/accountContext';
import { Link } from 'react-router-dom';
import { WindowScroll } from '../../utils/windowScroll';

function Service() {
    const { serviceData } = useContext(AccountContext);
    return (
        <section
            className="service-bg" >
            <div className="container mx-auto">
                <div className='text-center pb-7' >
                    <span className="inline-block text-[26px] uppercase text-[#c19b57] mb-4 font-semibold">Our Services</span>
                    <h1 className="headingset capitalize leading-[46px] text-[42px] font-bold mb-6 text-white pb-5 lg:w-[667px] m-auto">Solutions for moving better and feeling healthier</h1>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                    {serviceData?.slice(0, 4).map((item, index) => {
                        return (
                            <div className="w-full mb-3 " key={index}>
                                <div className="bg-white min-h-[100%] max-h-[100%] border border-gray-200 shadow-lg p-8 text-center transition-transform duration-300 hover:transform hover:-translate-y-2">
                                    <img src={item?.image} alt={item?.altTag} className='text-[#334023] w-[100px] p-[6px]  mx-auto filter brightness-0 inver' />
                                    <span className="text-gray-800 text-[22px] font-bold my-4 inline-block uppercase">{item?.title}</span>
                                    <p className='text-[18px]'>{item?.metaDescription.substring(0, 100)}</p>
                                    <Link to={`services/${item?.handle}`} className="bg-[#334023] inline-block font-semibold rounded-[4px] mt-5 px-4 text-[#fff] py-2 hover:before:bg-[#c19b57] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full" onClick={WindowScroll}>
                                        <span className="relative z-10 flex items-center text-[19px] font-semibold">Read More</span>
                                    </Link>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </section>
    );
}

export default Service;
