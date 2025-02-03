import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../../utils/accountContext';
import { WindowScroll } from '../../utils/windowScroll';

function Blogs() {
    const { blogsData } = useContext(AccountContext);
    const dataToRender = Array.isArray(blogsData) ? blogsData : [];
    return (
        <section className=''>
            <div className='container'>
                <div className='text-center pb-7'>
                    <h1 className="headingset leading-[46px] text-[42px] font-bold mb-6 text-[#334023]">
                        Latest Blog Post
                    </h1>
                    <p className='text-[18px] md:text-[20px] lg:text-[20px] text-[#000] mb-6 lg:w-[667px] mx-auto'>
                        Keeping up with your exercise regime is good but what we need along with the workout is proper nutrition. What we eat before and after our workout makes a huge difference.
                    </p>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {dataToRender.map((item, index) => {
                        return (
                            <div key={index} className="group w-full justify-center border-[1px] border-dashed border-[#c19b57] rounded-[4px] mb-4">
                                <div className="flex items-center img-container">
                                    <img
                                        src={item?.image}
                                        alt={item?.altTag}
                                        className="rounded-t-[4px] w-full h-[250px] object-cover"
                                    />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 bg-[#f7f2e9] box-shadow1">
                                    <div className='flex justify-between pr-4'>
                                        <span className="text-[#c19b57] font-bold block">{item?.author}</span>
                                        <span className="text-[#c19b57] font-bold block">{item?.publishedAt}</span>
                                    </div>
                                    <h5 className="text-[19px] text-[#334023] font-semibold py-3">
                                        {item?.metaTitle}
                                    </h5>
                                    <p className="text-black text-[18px] leading-6 mb-3">
                                        {item?.metaDescription.substring(0, 150) + "..."}
                                    </p>
                                    <Link to={`/blogs/${item?.handle}`} className="bg-[#334023] inline-block font-semibold rounded-[4px] mt-5 px-4 text-[#fff] py-2 hover:before:bg-[#c19b57] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full" onClick={WindowScroll}>
                                        <span className="relative z-10 flex items-center text-[19px] font-semibold">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
