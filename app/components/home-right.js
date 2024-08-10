'use client';
import React, { useState } from 'react';
import rightIcon from '../icons/arrow-right-icon.png';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import taskImage from '../images/task-image-1.png';
import timeIcon from '../icons/time-icon.png';
import { Avatar } from "@nextui-org/avatar";

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HomeRight = () => {

  const upcomingTasks = [
    { id: 1, name: "Creating Mobile App Design", title: "UI UX Design", image: taskImage, tasksTime: 1, progress:90},
  ];

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
      {upcomingTasks.map(tasks => (
      <div className='w-full bg-white rounded-lg p-5 mt-10'>
        <div className='flex flex-row justify-between'>
          <div className='text-secondary-500 font-bold'>Task Today</div>
          <div>•••</div>
        </div>
        <div>
        
          <Card className="w-full">
            <CardHeader className="justify-between p-0 mt-5">
              <div className="flex flex-col gap-3">
                <Image src={tasks.image} alt="Task Icon" className='rounded-xl' />
                <div className="flex flex-col gap-1 items-start justify-center mt-3">
                  <h4 className="text-base font-semibold leading-none text-secondary-500">{tasks.name}</h4>
                  <h5 className="text-xs tracking-tight text-secondary-400">{tasks.title}</h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className='p-0 mt-5'>
              <div className='mb-5'>
                <div className="flex justify-between mb-3">
                  <span className="text-base font-medium text-secondary-500 dark:text-white">Progress</span>
                  <span className="text-base font-medium text-primary-500 dark:text-white">{tasks.progress}%</span>
                </div>
                <div className="w-full bg-primary-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: `${tasks.progress}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image src={timeIcon} alt="Task Icon" width={24} height={24} />
                  <div className="font-medium text-secondary-500 text-base">{tasks.tasksTime} Days Left</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex flex-row font-medium text-secondary-500 text-sm">
                    <Avatar style={{ width: '24px', height: '24px' }} className="border-2" radius="full" src="https://nextui.org/avatars/avatar-1.png" />
                    <Avatar style={{ width: '24px', height: '24px' }} className='ml-[-7px] border-2' radius="full" src="https://nextui.org/avatars/avatar-2.png" />
                    <Avatar style={{ width: '24px', height: '24px' }} className='ml-[-7px] border-2' radius="full" src="https://nextui.org/avatars/avatar-3.png" />
                    <Avatar style={{ width: '24px', height: '24px' }} className='ml-[-7px] border-2' radius="full" src="https://nextui.org/avatars/avatar-4.png" />
                    <Avatar style={{ width: '24px', height: '24px' }} className='ml-[-7px] border-2' radius="full" src="https://nextui.org/avatars/avatar-5.png" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          
        </div>
        <div><hr class="h-px my-8 bg-sidebar-li-hover border-0 dark:bg-gray-700"/></div>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-secondary-500 font-bold'>Detail Task</div>
          <h5 className="text-xs tracking-tight text-secondary-400">{tasks.title}</h5>
        </div>
        <div className='mt-5'>
          <div className='flex flex-row items-center gap-3 text-secondary-500 mb-5'>
            <div className='bg-sidebar-li-hover p-2 rounded-lg min-w-[42px] text-center font-bold'>1</div><div>Understanding the tools in Figma</div>
          </div>
          <div className='flex flex-row items-center gap-3 text-secondary-500 mb-5'>
            <div className='bg-sidebar-li-hover p-2 rounded-lg min-w-[42px] text-center font-bold'>2</div><div>Understand the basics of making designs</div>
          </div>
          <div className='flex flex-row items-center gap-3 text-secondary-500'>
            <div className='bg-sidebar-li-hover p-2 rounded-lg min-w-[42px] text-center font-bold'>3</div><div>Design a mobile application with Figma</div>
          </div>
          <button className='bg-primary-500 text-secondary-500 w-full rounded-lg py-3 text-white mt-16'>Go to Detail</button>
        </div>
      </div>
      ))}
    </div>
  );
};

export default HomeRight;
