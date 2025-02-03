import React, { createContext, useState, useContext, useEffect } from 'react';
import { GetRequest } from './requests';
export const AccountContext = createContext();
export const AccountProvider = ({ children }) => {
  const [serviceData, setServiceData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [open, setOpen] = useState(false);
  const [pData, setPData] = useState([]);

  const data = {
    pData,
    setPData,
    serviceData,
    setServiceData,
    galleryData,
    setGalleryData,
    blogsData,
    setBlogsData,
    classesData,
    setClassesData,
    scheduleData,
    setScheduleData,
    timeData,
    setTimeData,
    categoryData,
    setCategoryData,
    open,
    setOpen,
  };
  const getServiceData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/service`);
      setServiceData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getGalleryData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/gallery`);
      setGalleryData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getBlogsData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/blogs`);
      setBlogsData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getClassesData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/timetable`);
      setClassesData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getScheduleData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/schedule`);
      setScheduleData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getTimeData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/time`);
      setTimeData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getcategoriesData = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/category`);
      setCategoryData(response?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getServiceData();
    getGalleryData();
    getBlogsData();
    getClassesData();
    getScheduleData();
    getTimeData();
    getcategoriesData();
  }, []);
  return (
    <AccountContext.Provider value={data}>
      {children}
    </AccountContext.Provider>
  );
};
export const useAccount = () => {
  return useContext(AccountContext);
};
