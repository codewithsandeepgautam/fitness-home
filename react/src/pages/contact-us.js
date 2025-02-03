import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Loader from '../utils/loader';
import { validateEmail, validatePhone } from '../utils/formValidation';
import { PostRequest } from '../utils/requests';
import InnerPageBanner from '../components/shared/imagePageBanner';
import contactBanner from "../assets/images/contactus-banner.png";
import { WindowScroll } from '../utils/windowScroll';
function Contact() {
    const [loading, setLoading] = useState(false);
    const params = useLocation();
    const Package = params?.state?.item
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: Package || "",
        message: "",
        phone: ""
    })
    const [error, setError] = useState({
        email: false,
        msg: false,
        phone: false,
        message: "",
        success: false,
    });
    const fullNameHandler = (e) => {
        const inputValue = e.target.value;
        const alphaValue = inputValue.replace(/[^A-Za-z\s]/g, '');
        if (alphaValue.length <= 30) {
            setFormData(prevState => ({ ...prevState, fullName: alphaValue }));
            setError(prevState => ({ ...prevState, message: "" }));
        }
    };
    const handlePhoneInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        if (numericValue.length <= 10) {
            setFormData((prevState) => ({ ...prevState, phone: numericValue }));
            setError((prevState) => ({ ...prevState, phone: false, message: "" }));
        }
    };
    const handleEmailInputChange = (e) => {
        const inputValue = e.target.value;
        const val = inputValue.replace(" ", "");
        setFormData((prevState) => ({ ...prevState, email: val }));
        setError((prevState) => ({ ...prevState, email: false, message: "" }));
    };
    const handleSubjectInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
            setFormData((prevState) => ({ ...prevState, subject: inputValue }));
            setError((prevState) => ({ ...prevState, message: "" }));
        }
    };
    const handleMessageInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setFormData((prevState) => ({ ...prevState, message: inputValue }));
            setError((prevState) => ({ ...prevState, message: "" }));
        }
    };
    function handleSubmitData(e) {
        e.preventDefault();
        setError((prevState) => ({ ...prevState, message: "" }));
        if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setError((prevState) => ({
                ...prevState,
                success: false,
                message: "Fields must not be empty!",
            }));
        } else if (!validateEmail(formData.email)) {
            setError((prevState) => ({
                ...prevState,
                email: true,
                message: "Email is invalid!",
            }));
        } else if (!validatePhone(formData.phone)) {
            setError((prevState) => ({
                ...prevState,
                phone: true,
                message: "Phone number is invalid!",
            }));
        } else {
            setLoading(true);
            PostRequest(`${process.env.REACT_APP_URL}/contact/submit`, {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                subject: formData.subject,
            })
                .then((response) => {
                    setError((prevState) => ({ ...prevState, success: true }));
                    setLoading(false);
                    setFormData((prevState) => ({
                        ...prevState,
                        fullName: "",
                        email: "",
                        subject: "",
                        phone: "",
                        message: "",
                    }));
                })
                .catch((err) => {
                    setError((prevState) => ({
                        ...prevState,
                        message: err?.data
                            ? err.data.error
                            : "Something went wrong. Try again later!",
                    }));
                });
        }
    }
    const windowScroll = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        if (error.success) {
            const timer = setTimeout(() => {
                navigate('/thanks');
                WindowScroll();
                setError((prevState) => ({ ...prevState, success: false }));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [error.success, navigate]);
    return (
        <div>
            <InnerPageBanner img={contactBanner} heading="Contact Us" desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
            <section>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div className="lg:mb-0 mb-10">
                            <iframe
                                className='w-full h-96 lg:h-full lg:rounded-l-lg rounded-[4px] object-cover'
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6858.640820031127!2d76.72949341901672!3d30.73750014790359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSec%20237%2C%20Sector%2040D%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1725963012672!5m2!1sen!2sin"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                        <div className="relative bg-[#33402317] p-6 lg:rounded-r-lg rounded-[4px]">
                            {loading && (
                                <Loader />
                            )}
                            <h2 className="headingset leading-[46px] xl:text-[42px] lg:text-[42px] md:text-[30px] sm:text-[28px] font-bold mb-4 text-[#334023] pb-2">Send Us A Message</h2>
                            <p className={` mb-[10px] text-[#ff0033] text-[19px] ${error.message ? 'block' : 'hidden'}`}>{error.message}</p>
                            <form onSubmit={handleSubmitData}>
                                <label htmlFor="fullName" className="relative mb-1 text-[#334023] font-semibold inline-block">
                                    Name<span className='text-red-600 absolute top-[-4px] text-[22px] right-[-9px]'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-full h-12 text-[#000] bg-transparent text-base font-normal rounded-[4px] border border-[#c19b57] focus:outline-none pl-4 mb-4"
                                    placeholder="Enter your Name"
                                    value={formData.fullName}
                                    onChange={fullNameHandler} />
                                <label htmlFor="email" className="relative mb-1 text-[#334023] font-semibold inline-block">
                                    Email<span className='text-red-600 absolute top-[-4px] text-[22px] right-[-9px]'>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full h-12 text-[#000] bg-transparent text-base font-normal rounded-[4px] border border-[#c19b57] focus:outline-none pl-4 mb-4"
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    onChange={handleEmailInputChange}
                                />
                                <label htmlFor="phone" className="relative mb-1 text-[#334023] font-semibold inline-block">
                                    Phone Number<span className='text-red-600 absolute top-[-4px] text-[22px] right-[-9px]'>*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full h-12 text-[#000] bg-transparent text-base font-normal rounded-[4px] border border-[#c19b57] focus:outline-none pl-4 mb-4"
                                    placeholder="Enter Your Phone Number"
                                    value={formData.phone}
                                    onChange={handlePhoneInputChange}
                                />
                                <label htmlFor="subject" className="relative mb-1 text-[#334023] font-semibold inline-block">
                                    Subject<span className='text-red-600 absolute top-[-4px] text-[22px] right-[-9px]'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full h-12 text-[#000] bg-transparent text-base font-normal rounded-[4px] border border-[#c19b57] focus:outline-none pl-4 mb-4"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleSubjectInputChange}
                                    disabled={Package ? true : false}
                                />
                                <label htmlFor="message" className="relative mb-1 text-[#334023] font-semibold inline-block">
                                    Message<span className='text-red-600 absolute top-[-4px] text-[22px] right-[-9px]'>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full h-32 text-[#000] bg-transparent text-base font-normal rounded-[4px] border border-[#c19b57] focus:outline-none pl-4 pt-4 mb-4"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleMessageInputChange}
                                ></textarea>
                                <button
                                    type='submit'
                                    className="bg-[#334023] inline-block font-semibold rounded-[4px] px-4 text-[#fff] py-2 hover:before:bg-[#c19b57] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#c19b57] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full" onClick={windowScroll}
                                >
                                    <span className="relative z-10 flex items-center text-[19px] font-semibold">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-0'>
                <div class="container flex flex-col mx-auto">
                    <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
                        <div class="gymrule1 group flex flex-col items-center gap-3 p-[20px] justify-center text-center bg-[#334023] rounded-[4px] shadow-lg ">
                            <CiMail className='text-[60px] text-[#c19b57]' />
                            <h5 class="text-[22px] md:text-[26px] font-bold text-white">Email Address</h5>
                            <Link to="mailto:fitnesshomechandigarh@gmail.com" class="text-lg font-medium text-white break-all" aria-label="email">fitnesshomechandigarh@gmail.com</Link>
                        </div>
                        <div class="gymrule1 group flex flex-col items-center gap-3 px-6 py-[50px] justify-center text-center bg-[#334023] rounded-[4px] shadow-lg">
                            <PiPhoneCallThin className='text-[60px] text-[#c19b57]' />
                            <h5 class="text-[22px] md:text-[26px] font-bold text-white">Phone</h5>
                            <Link to="tel:+91 79868 56897" aria-label="phone" class="text-lg font-medium text-[#fff]">+91 79868 56897</Link>
                        </div>
                        <div class="gymrule1 group flex flex-col items-center gap-3 px-6 py-[50px] justify-center text-center bg-[#334023] rounded-[4px] shadow-lg">
                            <CiLocationOn className='text-[60px] text-[#c19b57]' />
                            <h5 class="text-[22px] md:text-[26px] font-bold text-white">Location</h5>
                            <div class="text-lg font-medium  max-w-[330px] text-white">S.C.O. 237, Sector 40-D, Chandigarh</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
