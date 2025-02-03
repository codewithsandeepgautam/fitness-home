import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
function InnerPageBanner({ heading = "", desc = "", href = "", path = "", img = "" }) {
    return (
        <div className="about" style={{ backgroundImage: `url(${(img)})`, backgroundPosition: 'right' }}>
            <div className='container'>
                <div className="banner py-24">
                    <h2 className="text-white font-bold text-4xl lg:text-5xl leading-tight tracking-tight">{heading}</h2>
                    <ul className="flex pt-2 bradcrm">
                        <li className='flex items-center text-[#c19b57] text-lg'>
                            <Link className='font-semibold' to="/">Home</Link>
                            <MdOutlineNavigateNext className='text-white text-[26px]' />
                        </li>
                        {!path ? (<li className='flex items-center text-white text-lg'>{heading}</li>)
                            :
                            (<>
                                <li className='flex items-center text-white text-lg'><Link className='font-semibold' to={href}>{heading}</Link></li></>)}
                        {path && (<li className='flex items-center text-[#c19b57] text-lg '>
                            <MdOutlineNavigateNext className='text-white text-[26px]' />
                            <li className='flex items-center text-white text-lg capitalize'>{path}</li>
                        </li>)}
                    </ul>
                    <p className='text-lg text-white leading-7 font-light pt-4'>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default InnerPageBanner
