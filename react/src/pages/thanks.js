import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Thanks = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <>
            <section>
                <div className="flex  items-center justify-center">
                    <div className="flex flex-col items-center text-center m-8 space-y-2">
                        <MdCheckCircle className="h-28 w-28 text-[#c19b57]" />
                        <h1 className="text-4xl font-bold">Thank You!</h1>
                        <p>Thank you for your interest! Check your email for a link to the guide.</p>
                        <button
                            className="mt-3 bg-[#c19b57] text-md font-semibold rounded-[4px] px-6 text-[#fff] py-3 hover:before:bg-[#364329c4] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#fff] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full"
                            type="button">
                            <Link to="/contact-us" className="relative z-10 flex items-center text-[22px] font-semibold">Join Know</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Thanks;
