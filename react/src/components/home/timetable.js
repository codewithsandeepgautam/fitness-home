import React, { useContext, useState } from 'react';
import { ImageIcons } from '../imageComponent';
import { AccountContext } from '../../utils/accountContext';
import TimetableModal from '../modal/timetableModal';
import { Link } from 'react-router-dom';
function Timetable() {
  const { classesData, timeData, scheduleData } = useContext(AccountContext);
  const [tableData, setTableData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const classMapping = {};
  classesData?.forEach(classItem => {
    if (!classMapping[classItem.dayId]) {
      classMapping[classItem.dayId] = {};
    }
    classMapping[classItem.dayId][classItem.startTimeId] = classItem;
  });
  const handleModalOpen = (item) => {
    setTableData(item);
    setIsOpen(true);
  }
  return (
    <section className='bg-[#334023] relative overflow-hidden'>
      <div className="container">
        <div className='text-center pb-7'>
          <h1 className="headingset leading-[46px] text-[42px] font-bold text-white pb-4">Class Schedule</h1>
          <p className='text-[18px] md:text-[20px] lg:text-[20px] text-[#fff] mb-6 lg:w-[667px] mx-auto'>
            If you work in a gym, then you know the trend among members is group classes. They are a way to make working out more pleasant for those who may struggle with physical exercise.
          </p>
        </div>
        <div className="bg-transparent">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-center">
              <thead>
                <tr>
                  <th className="border bg-[#fff] border-gray-300 p-[14px] min-w-[145px] max-w-[150px] h-[80px] text-[20px] font-bold text-[#334023]">Timing</th>
                  {scheduleData?.map((scheduleitem, index) => (
                    <th key={index} className="border bg-[#fff] border-gray-300 p-[14px] min-w-[145px] max-w-[150px] h-[80px] text-[20px] font-bold text-[#334023]">{scheduleitem?.day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeData?.map((timeItem, timeIndex) => (
                  <tr key={timeIndex}>
                    <td className="bg-white border border-gray-300 p-[4px] text-center min-w-[145px] max-w-[150px] h-[80px] text-[18px] font-semibold text-[#334023]">
                      {timeItem?.timeStart} - {timeItem?.timeEnd}
                    </td>
                    {scheduleData?.map((scheduleItem, scheduleIndex) => {
                      const classItem = classMapping[scheduleItem._id]?.[timeItem._id];
                      return (
                        <td key={scheduleIndex} className="border bg-[#fff] border-gray-300 p-[4px] min-w-[145px] max-w-[150px] h-[80px]">
                          {classItem ? (
                            <Link className="block text-center p-2 rounded-[2px] bg-[#c19b57] text-[#fff] hover:before:bg-[#334023] hover:text-[#fff] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full" >
                              <div onClick={() => { handleModalOpen(classItem) }}>
                                <div className="relative z-10 font-semibold text-[18px] text-white">{classItem?.exerciseName}</div>
                                <div className="relative z-10 text-[16px] text-white">Classes</div>
                              </div>
                            </Link>
                          ) : (
                            <div className="block text-center p-5 rounded-[2px] bg-[#c19b57] text-[#fff] hover:before:bg-[#334023] hover:text-[#fff] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full cursor-not-allowed">
                              <span className='relative z-10 font-semibold text-[18px] text-white'>OFF</span></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <img className='ImgIcon absolute top-[12px] left-[-60px] animate-bounce' src={ImageIcons.Bgicon2} alt='icon' />
      <img className='absolute bottom-0 right-[-20px] animate-bounce2' src={ImageIcons.Bgicon} alt='icon' />
      <TimetableModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        src={tableData?.image}
        alt={tableData?.altTag}
        title={tableData?.exerciseName}
        detail={tableData?.details}
      />
    </section>
  );
}

export default Timetable;
