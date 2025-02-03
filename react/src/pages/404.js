import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const NotFound = () => {
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
                        <h1 className="text-[90px] font-bold">Oops!</h1>
                        <p className='text-[22px] pb-4'>404 Page Not Found</p>
                        <button
                            className="mt-3 bg-[#c19b57] text-md font-semibold rounded-[4px] px-8 text-[#fff] py-2 hover:before:bg-[#364329c4] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#fff] before:transition-all before:duration-500 hover:text-[#fff] hover:before:left-0 hover:before:w-full"
                            type="button">
                            <Link to="/" className="relative z-10 flex items-center text-[22px] font-semibold">Home Page</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default NotFound;
