import React from 'react';
import { Link } from 'react-router-dom';
import { WindowScroll } from '../../utils/windowScroll';

function Getstarted() {
  return (
    <section className="Contactbg relative bg-cover bg-fixed bg-no-repeat py-12" >
      <div className="container">
        <div className="flex flex-wrap items-center justify-center lg:justify-between relative z-10 lg:flex-nowrap">
          <h2 className="headingset font-semibold text-[42px] leading-[74px] tracking-[-1px] text-center text-white mb-5 lg:mb-0 lg:w-auto w-full lg:text-left capitalize">
            Ready to get started with fitness home
          </h2>
          <button
            className="bg-[#c19b57] text-md font-semibold rounded-[4px] px-6 text-[#fff] py-3 hover:before:bg-[#fff] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#fff] before:transition-all before:duration-500 hover:text-[#c19b57] hover:before:left-0 hover:before:w-full"
            type="button">
            <Link to="/contact-us" className="relative z-10 flex items-center text-[22px] font-semibold" onClick={WindowScroll}>Join Now</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Getstarted
