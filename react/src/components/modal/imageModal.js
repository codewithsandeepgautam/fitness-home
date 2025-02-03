import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
function ImageModal({ setIsOpen = "", src = "", alt = "", handlePrev = () => { }, handleNext = () => { } }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative">
          <button
            onClick={setIsOpen}
            className="bg-[#c19b57] absolute top-0 right-0 text-white p-1 m-2"
          >
            <IoClose className='text-[32px] font-bold' />
          </button>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="bg-[#c19b57] text-white p-1 rounded-full m-2"
            >
              <GrFormPrevious className='text-[32px] font-bold' />
            </button>
            <img
              className="max-w-full max-h-screen object-contain transition-all duration-300"
              src={src}
              alt={alt}
            />
            <button
              onClick={handleNext}
              className="bg-[#c19b57] text-white p-1 rounded-full m-2"
            >
              <MdNavigateNext className='text-[32px] font-bold' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageModal
