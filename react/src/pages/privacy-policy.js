import React from 'react';
import { Link } from 'react-router-dom';
import InnerPageBanner from '../components/shared/imagePageBanner';
import privicyBanner from "../assets/images/privicy-banner.png"
function PrivacyPolicy() {
  return (
    <div>
      <InnerPageBanner img={privicyBanner} heading="Privacy Policy" desc=" By using our services, you agree to the following terms and conditions." />
      <section>
        <div className="container">
          <h2 className="text-[24px] font-bold mb-2 text-[#334023]">Membership Responsibilities</h2>
          <p className="mb-4 text-[19px]">
            As a member, you are expected to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className='text-[19px]'>Maintain a respectful attitude towards staff and other members.</li>
            <li className='text-[19px]'>Follow all instructions given by gym staff.</li>
            <li className='text-[19px]'>Keep the gym clean by wiping down equipment after use.</li>
            <li className='text-[19px]'>Adhere to gym hours and be mindful of time limits on equipment during peak hours.</li>
          </ul>
          <h2 className="text-[24px] font-bold mb-2 text-[#334023]">Safety Guidelines</h2>
          <p className="mb-4 text-[19px]">
            Your safety is our priority. Please adhere to the following guidelines:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className='text-[19px]'>Use equipment properly and ask staff for assistance if unsure.</li>
            <li className='text-[19px]'>Report any injuries or unsafe conditions immediately to gym staff.</li>
            <li className='text-[19px]'>Wear appropriate workout attire and footwear.</li>
            <li className='text-[19px]'>No running or horseplay in the gym.</li>
          </ul>
          <h2 className="text-[24px] font-bold mb-2 text-[#334023]">Personal Items</h2>
          <p className="mb-4 text-[19px]">
            We are not responsible for lost or stolen items. Please:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className='text-[19px]'>Keep personal items in designated lockers.</li>
            <li className='text-[19px]'>Avoid bringing valuables into the gym.</li>
          </ul>
          <h2 className="text-[24px] font-bold mb-2 text-[#334023]">Cancellation and Refund Policy</h2>
          <p className="mb-4 text-[19px]">
            Members may cancel their membership at any time. Refunds for unused months will be processed upon request, subject to a 20% cancellation fee.
          </p>
          <h2 className="text-[24px] font-bold mb-2 text-[#334023]">Modifications to Policies</h2>
          <p className="mb-4 text-[19px]">
            Our policies may change to enhance the experience for all members. We will notify you of any significant changes through email or announcements within the gym.
          </p>
          <h2 className="text-[24px] font-bold mb-2 text-[#334023]">Contact Us</h2>
          <p className="mb-4 text-[19px]">
            If you have any questions or concerns regarding our policies, please contact our staff or email us at <Link className='text-[#c19b57] font-bold' to="mailto:fitnesshomechandigarh@gmail.com">fitnesshomechandigarh@gmail.com</Link>.
          </p>
          <p className="mb-4 text-[19px]">
            Thank you for being part of our community and for adhering to our policies to help create a safe and enjoyable environment for everyone.
          </p>
        </div>
      </section>
    </div>
  );
}
export default PrivacyPolicy;
