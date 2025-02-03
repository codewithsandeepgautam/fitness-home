import React, { useContext, useState } from 'react';
import { AccountContext } from '../../utils/accountContext';
import ImageModal from '../modal/imageModal';

function Gallery() {
    const { galleryData } = useContext(AccountContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : Math.min(galleryData.length - 1, 6)
        );
    };
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < 6 ? prevIndex + 1 : 0
        );
    };
    return (
        <section>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -m-2">
                    <div className="w-full flex flex-wrap">
                        {Array.isArray(galleryData) && galleryData.slice(0, 6).map((item, index) => {
                            return (
                                <div key={index} className="cursor-pointer md:w-1/4 w-1/2 md:[&:nth-child(3)]:w-1/2 [&:nth-child(3)]:w-full md:[&:nth-child(4)]:w-1/2 [&:nth-child(4)]:w-full p-2 img-container" onClick={() => handleModalOpen(index)}>
                                    <img src={item?.image} alt={item?.altTag} className="block h-full w-full object-cover object-center rounded-[6px] max-h-[350px]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <ImageModal
                    setIsOpen={handleModalClose}
                    src={Array.isArray(galleryData) ? galleryData[currentImageIndex]?.image : ''}
                    alt={Array.isArray(galleryData) ? galleryData[currentImageIndex]?.altTag : ''}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
        </section>
    );
}

export default Gallery;
