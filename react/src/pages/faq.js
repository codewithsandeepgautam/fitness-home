import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import InnerPageBanner from '../components/shared/imagePageBanner';
import faqBanner from "../assets/images/faqbanner.png"
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <InnerPageBanner img={faqBanner} heading="FAQs" desc=" Gym plays a vital role in promoting an active and healthy lifestyle." />
      <section>
        <div className="container">
          <ul className="flex flex-col">
            {faqData?.map((item, index) => (
              <li key={index} className="bg-[#c19b57] my-2 rounded-[4px]">
                <h2
                  onClick={() => handleToggle(index)}
                  className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer text-[#334023] text-[20px]">
                  <span className='text-white'>{item.question}</span>
                  <MdKeyboardArrowRight
                    className={`bg-[#fff] rounded-full fill-current text-[#c19b57] h-8 w-8 transform transition-transform duration-500 ${activeIndex === index ? 'rotate-90' : ''}`} />
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`} >
                  <p className="p-3 text-white text-[19px]">{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
const faqData = [
  {
    question: "What are the gym hours?",
    answer: "Our gym is open 24/7 for members. Staffed hours vary, so please check our website for details."
  },
  {
    question: "Do I need to book a class in advance?",
    answer: "Yes, we recommend booking classes in advance through our app or website to secure your spot."
  },
  {
    question: "What should I bring to the gym?",
    answer: "Bring a water bottle, a towel, and any personal workout gear you prefer. We provide all necessary equipment."
  },
  {
    question: "Are personal trainers available?",
    answer: "Yes, we have certified personal trainers available. You can book a session through our website."
  },
  {
    question: "Is there a dress code for the gym?",
    answer: "We recommend wearing comfortable workout clothing and closed-toe shoes. No jeans or sandals, please."
  },
  {
    question: "Can I bring a guest?",
    answer: "Yes, members can bring a guest for a fee. Please check with reception for guest policies."
  }
];
export default Faq;
