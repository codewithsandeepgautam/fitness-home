import React from 'react';
import { Link } from 'react-router-dom';
import { ImageIcons } from '../components/imageComponent';
import Trainer from '../components/home/trainers';
import Video from '../components/shared/video'
import InnerPageBanner from '../components/shared/imagePageBanner';
import aboutimg from "../assets/images/about-banner.png"
import { WindowScroll } from '../utils/windowScroll';
function About() {
  return (
    <>
      <InnerPageBanner img={aboutimg} heading="About Us" desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
      <section>
        <div className='container'>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={ImageIcons.Founder} alt="ceo" className="rounded-[6px] w-full" />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h2 className="headingset leading-[46px] text-[42px] font-bold mb-6 text-[#334023] pb-2">Message from Founder/CEO</h2>
              <p className="text-[19px] mb-4">
                Dear valued customers,
              </p>
              <p className="text-[19px] mb-4">
                I hope this message finds you in great spirits and high energy. As we continue to push boundaries and redefine what it means to be fit and healthy, I want to take a moment to express my deepest gratitude for your unwavering support and dedication.
                Our journey together is incredible and it’s your commitment that fuels our passion. Every day, we see the extraordinary efforts you put into achieving your goals and it’s truly inspiring. Whether you’re crushing personal records, embracing a new fitness routine or simply finding joy in movement, you are the heart of our community.
              </p>
              <p className="text-[20px]">
                Sincerely,
                <img src={ImageIcons.Ceo} alt="ceo" className="pt-3 w-[200px]" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#c19b57]'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="p-4">
                <h1 className="headingset leading-[46px] text-[42px] font-bold mb-6 text-[#fff]">
                  Fitness Home
                </h1>
                <p className="text-[19px] text-[#fff] mb-6">
                  At Fitness Home, we specialize in transforming spaces into personalized fitness heaven. With experienced trainers and staff, we understand the unique
                  needs of an individual customer at our fitness centre.
                  Our gym offers a wide range of workout program tailored to your goals, whether its weight loss, weight gain or muscle building.
                  <p className='pt-[12px]'> Join us and start your journey towards a healthier and stronger you.</p>
                </p>
                <button
                  className="bg-[#fff] text-md font-semibold rounded-[4px] px-6 text-[#c19b57] py-3 hover:before:bg-[#364329c4] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#fff] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full capitalize"
                  type="button">
                  <Link to="/contact-us" className="relative z-10 flex items-center text-[20px] font-semibold" onClick={WindowScroll}>Join Now</Link>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full h-full flex items-center justify-center">
                <Video />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Trainer />
    </>
  );
}

export default About;
