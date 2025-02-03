import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageIcons from '../imageComponent/ImageIcons';

const Logo = () => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="py-6 bg-[#334023]">
      <div className="container mx-auto px-4 text-center">
        <Slider {...settings}>
          {partners.map((item, index) => (
            <div key={index} className="p-4 flex justify-center">
              <img
                src={item.src}
                alt={item.alt}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
const partners = [
  { src: ImageIcons.logo1, alt: 'Partner 1' },
  { src: ImageIcons.logo2, alt: 'Partner 2' },
  { src: ImageIcons.logo3, alt: 'Partner 3' },
  { src: ImageIcons.logo4, alt: 'Partner 4' },
  { src: ImageIcons.logo5, alt: 'Partner 5' },
];
export default Logo;
