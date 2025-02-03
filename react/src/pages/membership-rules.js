import React from 'react';
import InnerPageBanner from '../components/shared/imagePageBanner';
import privicyBanner from "../assets/images/privicy-banner.png"
import ImageIcons from '../components/imageComponent/ImageIcons';
function Membership() {
  return (
    <div>
      <InnerPageBanner img={privicyBanner} heading="Membership Rules" desc="By using our services, you agree to the following Rules." />
      <section>
        <div className="container">
          <h2 className="text-[24px] font-bold mb-4 text-[#334023]">Membership Rules</h2>
          <ul class="space-y-3">
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />
              The full membership fee is payable whether the member makes full use of the facilities or not.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />The membership fee is non-refundable.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Membership can be transferred to a non-member only (Transfer Charges may be applicable).</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Freezing is available for a maximum of 30 days and will be applicable on annual membership only.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Members are requested to wear proper workout attire inside the gym (only sportswear is allowed in the gym premises).</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Members are requested to carry separate gym shoes to maintain hygiene.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Management has the right to cancel the membership of any member who does not abide by the terms & conditions at any time.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Members are requested to carry a hand towel to maintain hygiene.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Fitness Home Prides itself on inclusivity and a non-intimidating atmosphere. Therefore, any member indulging in misbehavior/language offensive to other member or staff, the same will be asked to leave the premises.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Members are requested to keep the weights in their original place after use and to use machinery properly.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />The Summer Gym timings are 5:30 AM - 10:00 PM and the Winter Gym timings are 6:00 AM - 9:30 PM from Monday to Saturday; Sunday will be closed.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Timing for facilities is subject to the type of membership and may change at the discretion of management.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Fitness Home management shall not be held responsible in any way in case of any injury/mishap. Members are requested to take due diligence while working out. A first aid kit is available at the reception.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Kids are not allowed inside the gym premises.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Usage of steroids is strictly prohibited inside the gym premises.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Management has the right to close the gym for maintenance, renovation, or any emergency conditions.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Music requests will not be entertained.</li>
            <li className='flex'> <img className='h-5 mr-[5px]' src={ImageIcons.check} alt='img' />Management shall not be responsible for any loss of valuable items belonging to members and their guests. Please do not leave your valuables unattended.</li>
          </ul>
        </div>
      </section>
      <section id="services" className="bg-[#c19b57] text-white">
        <div className="container mx-auto text-center pb-2">
          <h2 className="headingset leading-[46px] text-[42px] font-bold mb-6 text-[#fff]">Membership Rules</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services?.map((service, index) => (
            <div
              key={index}
              className="gymrule bg-white p-6 transition-transform duration-300 hover:transform hover:-translate-y-1 shadow-lg rounded-md"
              role="article"
              aria-labelledby="membership-rules"
            >
              <div>
                <img src={service.icon} alt={`Icon for ${service?.description}`} />
              </div>
              <p className="mt-2 text-[#2a2929] text-[19px] capitalize font-semibold">{service?.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
const services = [
  {
    icon: ImageIcons.MembershipRule1,
    description: 'Membership Fees Is non-Refundable & non transferable In any Circumstances',
  },
  {
    icon: ImageIcons.MembershipRule2,
    description: 'Membership Duration is non-extendable',
  },
  {
    icon: ImageIcons.MembershipRule3,
    description: 'Freezing in case Of non-attendance or any situation',
  },
  {
    icon: ImageIcons.MembershipRule4,
    description: 'Fitness home is not liable for any personal belongings or injury',
  },
  {
    icon: ImageIcons.MembershipRule5,
    description: 'As per supreme court notification anabolic steroids are banned without prescription',
  },
];
export default Membership;
