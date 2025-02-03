import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { WindowScroll } from '../../utils/windowScroll';

function TimetableModal({ modalIsOpen = "", setIsOpen = "", src = "", alt = "", title = "", detail = "" }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='sm:w-[420px] md:sm:w-[560px] lg-[620px] h-[600px] w-[320px] ouverflow-auto p-4'>
                    <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-2xl max-h-full">
                            <div class="relative bg-white rounded-lg shadow">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center capitalize">
                                    {title} Exercise
                                </h3>
                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <img className='w-full rounded-[6px]' src={src} alt={alt} />
                                </div>
                                <div
                                    className="mb-4 ml-4 mr-4"
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                />
                            </div>
                            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <Link to="/contact-us" className="bg-[#c19b57] mr-2 inline-block font-semibold rounded-[4px] mt-5 px-4 text-[#fff] py-2 hover:before:bg-[#334023] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full" onClick={WindowScroll}>
                                    <span className="relative z-10 flex items-center text-[19px] font-semibold">Apply</span>
                                </Link>
                                <button className="bg-[#c19b57] inline-block font-semibold rounded-[4px] mt-5 px-4 text-[#fff] py-2 hover:before:bg-[#334023] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full" onClick={closeModal}>
                                    <span className="relative z-10 flex items-center text-[19px] font-semibold">Close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal >
        </div >
    );
}

export default TimetableModal;
