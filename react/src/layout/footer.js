import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosCall } from "react-icons/io";
import { validateEmail } from '../utils/formValidation';
import { PostRequest } from '../utils/requests';
import { Link, useLocation } from 'react-router-dom';
import { MdPhonelinkRing } from "react-icons/md";
import { WindowScroll } from '../utils/windowScroll';
const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    message: "",
    success: false
  })
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setError(() => ({
      message: "",
    }));
  };
  function handleSubmit() {
    setError({ message: "" });
    if (!email.length > 0) {
      setError({ message: "Field must not be empty!", success: false })
    } else if (!validateEmail(email)) {
      setError({ message: "Email is invalid!", success: false });
    } else {
      PostRequest(`${process.env.REACT_APP_URL}/newsletter`, { email: email }).then((response) => {
        setEmail("");
        toast(response?.data, {
          position: "bottom-right",
          className: 'foo-bar'
        });
      }).catch((error) => {
        setError({ message: error?.data, success: false });
      })
    }
  }
  useEffect(() => {
    if (error.success) {
      const timer = setTimeout(() => {
        setError({ success: false });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error.success]);
  const isActive = (path) => {
    const isActivePath = location.pathname === path;
    return isActivePath ? "text-[#c19b57]" : "text-gray-300";
  };
  return (
    <footer>
      <div className="bg-[#334023] pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col text-white">
              <Link to="/">
                <div className="w-[130px] responsiveimg" onClick={WindowScroll}>
                  <img className='w-[162px] mt-[-25px] mb-4' src={ImageIcons.Logo} alt='logo' />
                </div>
              </Link>
              <p className="text-[18px] mb-8">Joining this gym will be a game changer for you. The trainers are incredibly knowledgeable and supportive.</p>
              {!error.success && (
                <div className="text-[#ff0033]">
                  {error.message}
                </div>
              )}
              <div className="relative">
                <input className="form-input rounded-md w-full py-4 px-4 pr-16 focus:border-none focus:outline-none text-black text-[16px] " name='email' value={email} onChange={handleChange} type="text" placeholder="Enter Your Email" />
                <button type="button" className="absolute top-0 right-0 mt-1 mr-[5px] py-3 px-4 bg-[#c19b57] text-white rounded-md text-[16px] font-semibold transition-all hover:bg-[#334023]" onClick={handleSubmit}> Subscribe </button>
              </div>
            </div>
            <div className="text-white">
              <h4 className="text-[22px] font-semibold text-[#c19b57] mb-4">Quick Links</h4>
              {footerData?.map((item, index) => (
                <ul key={index}>
                  <li onClick={WindowScroll}>
                    <Link to={item?.href} className={`flex items-center mb-2 hover:text-[#c19b57] ${isActive(item.href)} text-[18px] transition-all`}>
                      <span className="mr-2">{item?.icon}</span> {item?.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="text-white">
              <h4 className="text-[22px] font-semibold text-[#c19b57] mb-4">Opening Hours</h4>
              <div className="mb-3">
                <h6 className="text-[#c19b57]  text-[18px] mb-0">
                  <strong className='block text-white font-light'> (Summer Timing)</strong>
                  Monday - Saturday</h6>
                <p className="mb-3 text-[18px]">5:30 AM to 10:00 PM</p>
                <h6 className="text-[#c19b57]  text-[18px] mb-0">
                  <strong className='block text-white font-light'>(Winter Timing)</strong>
                  Monday - Saturday </h6>
                <p className="mb-0 text-[18px]">6:00 AM to 09:30 PM</p>
              </div>
              <div className="mb-3">
                <h6 className="text-[#c19b57] text-[18px] mb-0">Holiday</h6>
                <p className="mb-0 text-[18px]">Sunday Closed</p>
              </div>
            </div>
            <div className="text-white md:ml-[-60px]">
              <h4 className="text-[22px] font-semibold text-[#c19b57] mb-4">Contact Info</h4>
              <ul className='mb-6'>
                <li><Link to="tel:0172-2994237" className="z-[9] flex items-center mb-2 text-gray-300 hover:text-[#c19b57] text-[18px] transition-all "><div><IoIosCall className="mr-2 text-[24px]" /></div><div>0172-2994237</div></Link></li>
                <li><Link to="tel:+7986856897" className="z-[9] flex items-center mb-2 text-gray-300 hover:text-[#c19b57] text-[18px] transition-all "><div><MdPhonelinkRing className="mr-2 text-[24px]" /></div><div> +91 79868 56897</div></Link></li>
                <li><Link to="mailto:fitnesshomechandigarh@gmail.com" className="z-[9] flex items-center mb-2 text-gray-300 hover:text-[#c19b57] text-[18px] transition-all "><div><FaEnvelope className="mr-2 text-[20px]" /></div><div className='break-all'>fitnesshomechandigarh@gmail.com</div></Link></li>
                <li className="flex items-center mb-2 text-gray-300 text-[18px] transition-all"><div><FaMapMarkerAlt className="mr-2 text-[20px]" /></div><div className='z-[9] '> S.C.O. 237, Sector 40-D, Chandigarh</div></li>
              </ul>
              <div className="flex">
                <Link to="https://www.facebook.com/fitnesshomechandigarh" target="_blank" className="w-10 h-10 text-[24px] flex items-center justify-center bg-[#c19b57] text-white rounded-full mr-3 hover:bg-[#fff] transition-all hover:text-[#c19b57]"><FaFacebookF className='z-[9] ' /></Link>
                <Link to="https://www.instagram.com/fitnesshomechandigarh/profilecard/?igsh=MWF4cmRiZTI0ZGF4eg%3D%3D" target='_blank' className="w-10 h-10 text-[24px] flex items-center justify-center bg-[#c19b57] text-white rounded-full mr-3 transition-all hover:bg-[#fff] hover:text-[#c19b57]"><FaInstagram className='z-[9] ' /></Link>
              </div>
            </div>
          </div>
        </div>
        <img className='w-[200px] absolute bottom-0 right-0 animate-bounce2 ImgIcon3' src={ImageIcons.Bgicon3} alt='icon' />
      </div>
      <div className='bg-[#c19b57]'>
        <div className='container'>
          <p className='text-[18px] text-white text-center py-4'>© Copyright 2024 Gym. All Rights Reserved.</p>
        </div>
      </div>
      <ToastContainer position='top-bottom' />
    </footer>
  );
};
const footerData = [
  {
    title: "About Us",
    href: "/about-us",
    icon: <FaAngleRight />
  },
  {
    title: "Services",
    href: "/services",
    icon: <FaAngleRight />
  },
  {
    title: "Social Media",
    href: "/social-media",
    icon: <FaAngleRight />
  },
  {
    title: "Images",
    href: "/images",
    icon: <FaAngleRight />
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: <FaAngleRight />
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: <FaAngleRight />
  },
  {
    title: "Membership Rules",
    href: "/membership-rules",
    icon: <FaAngleRight />
  },
]
export default Footer;
