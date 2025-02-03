import React from 'react';
import GymRule from '../components/shared/gymrules';
import InnerPageBanner from '../components/shared/imagePageBanner';
import { Link } from 'react-router-dom';
import ImageIcons from '../components/imageComponent/ImageIcons';
import Membershipbanner from "../assets/images/membership-banner.png";
import { useNavigate } from 'react-router-dom';
import { WindowScroll } from '../utils/windowScroll';
function Membership() {
    const navigate = useNavigate();
    const handleData = (item) => {
        navigate('/contact-us', {
            state: { item },
        });
    }
    return (
        <>
            <InnerPageBanner img={Membershipbanner} heading='Membership' desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
            <section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {plans?.map((plan, index) => (
                            <div key={index} className="price-bg relative rounded-[6px] shadow-lg p-6 transform hover:scale-105 transition duration-300">
                                <div className="mb-8">
                                    <h3 className="text-[26px] font-semibold text-white">{plan?.title}</h3>
                                    <p className="mt-4 text-[19px] text-white">{plan?.description}</p>
                                </div>
                                <div className="mb-8">
                                    <span className="text-xl font-medium text-[#c19b57]">Rs.</span>
                                    <span className="text-white font-extrabold text-[52px] leading-[74px] tracking-[-1px]">{plan?.price}</span>
                                    {plan.offerimg && <span className="font-bold inline-block text-[#c19b57] text-[17px] ml-1"><img className="absolute top-[-5px] right-[3px] w-[92px]" src={ImageIcons?.offer} alt='offer' /></span>}
                                </div>
                                <ul className="mb-8 space-y-4 text-gray-400">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <img className='h-5 w-6 mr-[4px]' src={ImageIcons?.check} alt='img' />
                                            <span className='text-white text-[19px]'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="bg-[#c19b57] font-semibold rounded-[4px] mt-5 px-4 text-[#fff] py-2 hover:before:bg-[#fff] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#fff] before:transition-all before:duration-500 hover:text-[#c19b57] hover:before:left-0 hover:before:w-full" onClick={() => { handleData(plan?.title) }}>
                                    <Link to={plan?.link} className="relative z-10 flex items-center text-[19px] font-semibold" onClick={WindowScroll}>Get Started</Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <GymRule />
        </>
    );
}
const plans = [
    {
        title: 'Monthly',
        description: 'Get started with our basic features.',
        price: '3999',
        features: [
            'Yoga Classes',
            'Personal Training',
            'Martial Art and Karate',
            'Basic support',
        ],
        buttonText: 'Sign Up',
        link: '/contact-us'

    },
    {
        title: '3 Months',
        description: 'Perfect for small businesses and startups.',
        price: '6999',
        features: [
            'Yoga Classes',
            'Personal Training',
            'Martial Art and Karate',
            '100% support',
        ],
        buttonText: 'Get Started',
        link: '/contact-us',
        offerimg: ImageIcons.offer
    },
    {
        title: '6 Months',
        description: 'Ideal for growing businesses and enterprises.',
        price: '9999',
        features: [
            'Yoga Classes',
            'Personal Training',
            'Martial Art and Karate',
            '100% support',
        ],
        buttonText: 'Get Started',
        link: '/contact-us',
        offerimg: ImageIcons.offer
    },
    {
        title: 'Yearly',
        description: 'Tailored for large-scale deployments and custom needs.',
        price: '17999',
        features: [
            'Yoga Classes',
            'Personal Training',
            'Martial Art and Karate',
            '100% support',
        ],
        buttonText: 'Contact Sales',
        link: '/contact-us',
        offerimg: ImageIcons.offer
    }
];
export default Membership;
