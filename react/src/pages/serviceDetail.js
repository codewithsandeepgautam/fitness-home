import React, { useState, useEffect } from 'react';
import { GetRequest } from '../utils/requests';
import { useParams } from 'react-router-dom';
import { ImageIcons } from '../components/imageComponent';
import InnerPageBanner from '../components/shared/imagePageBanner';
function ServiceDetail() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { handle } = useParams();
  const getServiceDetails = async () => {
    
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/service/data?handle=${handle}`);
      setServiceDetails(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getServiceDetails();
    // eslint-disable-next-line
  }, []);
  const servicesToShow =
    handle === 'yoga-classes' ? yogaServices :
      handle === 'personal-training' ? personalServices :
        handle === 'martial-art-and-karate' ? martialServices :
          handle === 'cardio-section' ? cardioServices :
            handle === 'hiit-classes' ? hiitServices :
              handle === 'bollywood-bhangra-zumba-classes' ? zumbaServices :
                handle === 'medical-conditions-injury-rehabilitation' ? medicalServices :
                  handle === 'strength-training' ? strengthServices :
                    handle === 'bootcamp-outdoor-activities' ? outdoorServices : []

  const handleBanner =
    handle === 'yoga-classes' ? ImageIcons.yogaBanner :
      handle === 'personal-training' ? ImageIcons.trainingBanner :
        handle === 'cardio-section' ? ImageIcons.cardioBanner :
          handle === 'hiit-classes' ? ImageIcons.hiitBanner :
            handle === 'strength-training' ? ImageIcons.strengthBanner :
              handle === 'dance-fusion' ? ImageIcons?.zumbaBanner :
                handle === 'martial-art-and-karate' ? ImageIcons.selfdefenceBanner :
                  handle === 'medical-conditions-injury-rehabilitation' ? ImageIcons.medicalBanner :
                    handle === 'bootcamp-outdoor-activities' ? ImageIcons.bootcamBanner : []

  const workoutImages =
    handle === 'yoga-classes' ? ImageIcons.yogabanner :
      handle === 'personal-training' ? ImageIcons.trainingbanner :
        handle === 'cardio-section' ? ImageIcons.cardiobanner :
          handle === 'hiit-classes' ? ImageIcons.hiitbanner :
            handle === 'strength-training' ? ImageIcons.strengthbanner :
              handle === 'dance-fusion' ? ImageIcons?.dancebanner :
                handle === 'martial-art-and-karate' ? ImageIcons.defencebanner :
                  handle === 'medical-conditions-injury-rehabilitation' ? ImageIcons.medicalbanner :
                    handle === 'bootcamp-outdoor-activities' ? ImageIcons.bootcampbanner : []

  return (
    <>
      <InnerPageBanner img={handleBanner} heading="Services" href="/services" path={handle} desc=" Gym plays a vital role in promoting an active and healthy lifestyle." />
      <section>
        <div className="container">
          <div class="flex flex-wrap relative">
            <div class="w-full sm:w-2/3 lg:w-8/12 p-4">
              <div
                className="unorderlist mb-4"
                dangerouslySetInnerHTML={{ __html: serviceDetails?.description }}
              />
            </div>
            <div class="w-full sm:w-1/3 lg:w-4/12 p-4">
              <img className='sticky top-[200px] md:block sm:hidden hidden lg:block rounded-[26px] shadow-[8px_8px_0px_#334023] border border-[#334023] p-[12px] w-[90%]' src={workoutImages} alt="Allworkout" />
            </div>
          </div>
        </div>
      </section>
      <section className='pt-0'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesToShow?.map((service, index) => (
            <div
              key={index}
              className={`relative p-0 ${index % 1 === 0 ? 'order-first' : 'order-last'} lg:order-${index + 1}`} >
              {service.imgSrc && (
                <div className="img-container overflow-hidden">
                  <img src={service?.imgSrc} alt="Service" className="w-full h-[420px] object-cover relative rounded-[6px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default ServiceDetail;
const yogaServices = [
  { imgSrc: ImageIcons.y1 },
  { imgSrc: ImageIcons.y2 },
  { imgSrc: ImageIcons.y3 },
  { imgSrc: ImageIcons.y4 },
];
const personalServices = [
  { imgSrc: ImageIcons.personaltrainer1 },
  { imgSrc: ImageIcons.pt5 },
  { imgSrc: ImageIcons.personaltrainer3 },
  { imgSrc: ImageIcons.personaltrainer4 },
];
const martialServices = [
  { imgSrc: ImageIcons.cr4 },
  { imgSrc: ImageIcons.m2 },
  { imgSrc: ImageIcons.m3 },
  { imgSrc: ImageIcons.m4 },
];
const cardioServices = [
  { imgSrc: ImageIcons.cr1 },
  { imgSrc: ImageIcons.ss },
  { imgSrc: ImageIcons.cr3 },
  { imgSrc: ImageIcons.car },
];
const hiitServices = [
  { imgSrc: ImageIcons.hiit1 },
  { imgSrc: ImageIcons.hiit2 },
  { imgSrc: ImageIcons.hiit3 },
  { imgSrc: ImageIcons.hiit4 },
];
const zumbaServices = [
  { imgSrc: ImageIcons.zumba1 },
  { imgSrc: ImageIcons.zumba2 },
  { imgSrc: ImageIcons.zumba3 },
  { imgSrc: ImageIcons.zumba4 },
];
const medicalServices = [
  { imgSrc: ImageIcons.medical1 },
  { imgSrc: ImageIcons.medical2 },
  { imgSrc: ImageIcons.medical3 },
  { imgSrc: ImageIcons.medical4 },
];
const strengthServices = [
  { imgSrc: ImageIcons.strength1 },
  { imgSrc: ImageIcons.strength2 },
  { imgSrc: ImageIcons.strength3 },
  { imgSrc: ImageIcons.strength4 },
];
const outdoorServices = [
  { imgSrc: ImageIcons.bootcamp1 },
  { imgSrc: ImageIcons.bootcamp2 },
  { imgSrc: ImageIcons.bootcamp3 },
  { imgSrc: ImageIcons.bootcamp4 },
];

