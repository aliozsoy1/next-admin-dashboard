'use client';
import React, { useState } from 'react';
import rightIcon from '../icons/arrow-right-icon.png';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HomeRight = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState(0); // 1: next, -1: prev

  const today = new Date(); // Bugünün tarihi

  const handlePrevWeek = () => {
    setDirection(-1);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    setDirection(1);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const getCenteredWeekDates = (date) => {
    const centerIndex = 3;
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

  const isToday = (day) => {
    return (
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className='flex md:flex-col px-10 md:w-1/3 bg-sidebar-li-hover p-5'>
      <div className='w-full bg-white rounded-lg p-5'>
        <div className='flex justify-between items-center mb-3'>
          <Image
            onClick={handlePrevWeek}
            className="cursor-pointer ml-4 rotate-180"
            src={rightIcon}
            alt="Left"
            height="auto"
          />
          <div className='text-secondary-500 text-lg font-bold'>
            {currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </div>
          <Image
            onClick={handleNextWeek}
            className="cursor-pointer mr-4"
            src={rightIcon}
            alt="Right"
            height="auto"
          />
        </div>
        <div className="relative h-24 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentDate.toString()}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full flex justify-between"
            >
              {weekDates.map((day, index) => (
                <div
                  key={index}
                  className='min-w-[50px] text-center'
                  style={{
                    padding: '5px',
                    color: isToday(day) ? 'white' : '#141522',
                    backgroundColor: isToday(day) ? '#141522' : 'transparent',
                    borderRadius: '30px',
                  }}
                >
                  <div className='mb-4'>{daysOfWeek[day.getDay()]}</div>
                  <div
                    className='bg-sidebar-li-hover p-2 rounded-full'
                    style={{
                      backgroundColor: isToday(day) ? '#546FFF' : '#F5F5F7',
                    }}
                  >
                    {day.getDate()}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
