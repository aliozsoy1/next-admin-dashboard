'use client';
import React, { useState } from 'react';
import rightIcon from '../icons/arrow-right-icon.png';
import Image from 'next/image';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HomeRight = () => {
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const getCenteredWeekDates = (date) => {
    const centerIndex = 3; // Bugünün haftanın ortasında olması için
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - centerIndex);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startOfWeek);
      currentDay.setDate(startOfWeek.getDate() + i);
      weekDays.push(currentDay);
    }
    return weekDays;
  };

  const weekDates = getCenteredWeekDates(currentDate);

  return (
    <div className='flex md:flex-col px-10 md:w-1/3 bg-sidebar-li-hover p-5'>
      <div className='w-full bg-white rounded-lg p-5'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Image onClick={handlePrevWeek} className="cursor-pointer ml-4 rotate-180" src={rightIcon} alt="Left" height="auto"/>
        <div className='text-secondary-500 text-lg font-bold'>{currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
        <Image onClick={handleNextWeek} className="cursor-pointer mr-4" src={rightIcon} alt="Left" height="auto"/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {weekDates.map((day, index) => (
          <div
          className='min-w-[50px]'
            key={index}
            style={{
              display: 'flex',
              flexDirection:'column',
              padding:'5px',
              color: day.toDateString() === currentDate.toDateString() ? 'white' : '#141522',
              backgroundColor: day.toDateString() === currentDate.toDateString() ? '#141522' : 'transparent',
              borderRadius:'30px',
              textAlign: 'center',
            }}
          >
            <div className='mb-4'>{daysOfWeek[day.getDay()]}</div>
            <div className='bg-sidebar-li-hover p-2 rounded-full'
            style={{
              backgroundColor: day.toDateString() === currentDate.toDateString() ? '#546FFF' : '#F5F5F7',
            }}
            >{day.getDate()}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HomeRight;