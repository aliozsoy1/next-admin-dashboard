'use client';
import React from 'react';
import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";


const HomeRight = () => {
  
  return (
    <div className='flex md:flex-col h-screen px-3 md:w-1/3 bg-sidebar-li-hover p-5'>
      <div className='w-full bg-white rounded-lg'>
        <div className="flex w-full">
        <div className="flex gap-x-4">
        <Calendar 
      aria-label="Date (Read Only)" 
      value={today(getLocalTimeZone())} 
    />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;