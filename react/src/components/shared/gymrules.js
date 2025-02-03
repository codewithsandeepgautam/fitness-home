import React from 'react';
import ImageIcons from '../imageComponent/ImageIcons';

const GymRule = () => {
  return (
    <section id="services" className="bg-[#c19b57] text-white">
      <div className="container mx-auto text-center pb-2">
        <h2 className="headingset leading-[46px] text-[42px] font-bold mb-6 text-[#fff]">Gym Rules</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="gymrule bg-white p-6 transition-transform duration-300 hover:transform hover:-translate-y-1 shadow-lg rounded-md"
            role="article"
            aria-labelledby="gym-rules"
          >
            <div>
              <img src={service.icon} alt={service.description} />
            </div>
            <p className="mt-2 text-[#2a2929] text-[19px] capitalize font-semibold">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
const services = [
  {
    icon: ImageIcons.RuleImg,
    description: 'No dirty footwear in gym! Carry your workout shoes.',
  },
  {
    icon: ImageIcons.RuleImg2,
    description: 'Put the equipment back where it belongs.',
  },
  {
    icon: ImageIcons.RuleImg3,
    description: 'Carry your own towel for personal hygiene.',
  },
  {
    icon: ImageIcons.RuleImg4,
    description: 'Report any accidents or equipment issues.',
  },
  {
    icon: ImageIcons.RuleImg6,
    description: 'No firearms or any weapons allowed.',
  },
  {
    icon: ImageIcons.RuleImg5,
    description: 'No smoking inside.',
  },
];
export default GymRule;
