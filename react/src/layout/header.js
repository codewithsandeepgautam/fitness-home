import React from 'react';
import '../style/style.css';
import { BsList } from 'react-icons/bs';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { Link, useLocation } from 'react-router-dom';
import { WindowScroll } from '../utils/windowScroll';

function Header() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path) ? "text-[#c19b57]" : "text-gray-300";
  };
  return (
    <header className="bg-[#334023] sticky top-0 w-full z-20 left-0 right-0">
      <div className="container">
        <nav className="flex items-center">
          <div className="logo" onClick={WindowScroll}>
            <Link to="/">
              <div className="w-[120px] responsiveimg">
                <img src={ImageIcons.Logo} alt="logo" />
              </div>
            </Link>
          </div>
          <ul
            className="navigation max-w-[90vw] flex flex-wrap justify-end items-center relative w-full"
            onClick={WindowScroll}
          >
            <input type="checkbox" id="check" className="hidden" />
            <span className="menu flex items-center [&>li]:pl-10 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${isActive(item.path)} text-[18px] font-semibold`}
                >
                  <Link
                    className="hover:text-[#c19b57] transition-all capitalize"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="flex items-center">
                <Link to="/contact-us">
                  <button
                    className="bg-[#c19b57] font-semibold rounded-[2px] py-3 px-8 mr-2 text-[#fff] hover:before:bg-[#fff] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#fff] before:transition-all before:duration-500 hover:text-[#c19b57] hover:before:left-0 hover:before:w-full"
                    type="button"
                  >
                    <span className="relative z-10 flex items-center font-semibold capitalize">
                      Contact Us
                    </span>
                  </button>
                </Link>
              </li>
              <label htmlFor="check" className="close-menu text-white]">
                <IoIosCloseCircleOutline className="text-[40px] text-[#fff]" />
              </label>
            </span>
            <label htmlFor="check" className="open-menu text-[#fff]">
              <BsList />
            </label>
          </ul>
        </nav>
      </div>
    </header>
  );
}
const navItems = [
  { path: '/about-us', title: 'About Us' },
  { path: '/services', title: 'Services' },
  { path: '/social-media', title: 'Social Media' },
  { path: '/images', title: 'Images' },
];
export default Header;
