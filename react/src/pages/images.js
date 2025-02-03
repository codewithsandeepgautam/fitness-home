import React, { useState, useContext } from 'react';
import InnerPageBanner from '../components/shared/imagePageBanner';
import classNames from 'classnames';
import { AccountContext } from '../utils/accountContext';
import galleryBanner from "../assets/images/gallery-banner.png";
import Videos from '../components/shared/videos';
import ImageModal from '../components/modal/imageModal';

function Images() {
    const { galleryData } = useContext(AccountContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('images');
    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    };
    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
    };
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <InnerPageBanner img={galleryBanner} heading="Social Media" desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
            <section className='container'>
                <div className="mb-4">
                    <div className="responsivetab flex space-x-4">
                        {menuBar?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(item.title.toLowerCase())}
                                className={classNames(
                                    'py-3 px-5 font-semibold text-[19px] rounded-[4px] capitalize',
                                    {
                                        'bg-[#334023] text-white': activeTab === item.title.toLowerCase(),
                                        'bg-[#c19b57] text-[#fff]': activeTab !== item.title.toLowerCase(),
                                    }
                                )}
                            >
                                {item?.title}
                            </button>
                        ))}
                    </div>
                </div>
                {activeTab === 'images' ? (
                    <div className="grid min-h-[140px] w-full overflow-x-scroll rounded-lg lg:overflow-visible">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {galleryData?.map((item, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        className="object-cover object-center w-full h-40 rounded-lg cursor-pointer img-container md:h-[420px] transition-all duration-300"
                                        src={item?.image}
                                        alt={item?.altTag}
                                        onClick={() => openModal(index)}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                ) : (
                    <Videos />
                )}
            </section>
            {isModalOpen && (
                <ImageModal
                    src={galleryData[selectedImageIndex]?.image}
                    alt={galleryData[selectedImageIndex]?.altTag}
                    handlePrev={prevImage}
                    handleNext={nextImage}
                    setIsOpen={handleModalClose}
                />
            )}
        </div>
    );
}
const menuBar = [
    { title: "Images" },
    { title: "Videos" }
];
export default Images;
