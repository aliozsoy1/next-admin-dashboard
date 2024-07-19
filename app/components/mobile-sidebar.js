'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../images/admin-logo.svg';
import overviewIcon from '../icons/overview.png';
import taskIcon from '../icons/task.png';
import mentorsIcon from '../icons/mentors.png';
import messageIcon from '../icons/message.png';
import settingsIcon from '../icons/settings.png';
import infoBackground from '../images/info-bg.png';
import mobileMenuIcon from '../icons/mobile-menu.svg';
import SidebarDesktop from './sidebar';

const SidebarMobile = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`fixed z-50 inset-0 bg-white text-black border-r-2 border-sidebar-li-hover flex flex-col justify-between transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div><Image src={logo} alt="Admin Logo" className="mx-auto" /></div>
            <button onClick={toggleSidebar} className="text-secondary-400 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="mt-12 space-y-2">
            <li className="flex items-center py-3 px-4 hover:bg-sidebar-li-hover cursor-pointer rounded-lg font-semibold active">
              <Image src={overviewIcon} alt="Overview Icon" width={20} height={20} />
              <span className="ml-2 text-secondary-500">Overview</span>
            </li>
            <li className="flex items-center py-3 px-4 hover:bg-sidebar-li-hover cursor-pointer rounded-lg">
              <Image src={taskIcon} alt="Task Icon" width={20} height={20} />
              <span className="ml-2 text-secondary-300">Task</span>
            </li>
            <li className="flex items-center py-3 px-4 hover:bg-sidebar-li-hover cursor-pointer rounded-lg">
              <Image src={mentorsIcon} alt="Mentors Icon" width={20} height={20} />
              <span className="ml-2 text-secondary-300">Mentors</span>
            </li>
            <li className="flex items-center py-3 px-4 hover:bg-sidebar-li-hover cursor-pointer rounded-lg">
              <Image src={messageIcon} alt="Message Icon" width={20} height={20} />
              <span className="ml-2 text-secondary-300">Message</span>
            </li>
            <li className="flex items-center py-3 px-4 hover:bg-sidebar-li-hover cursor-pointer rounded-lg">
              <Image src={settingsIcon} alt="Settings Icon" width={20} height={20} />
              <span className="ml-2 text-secondary-300">Settings</span>
            </li>
          </ul>
        </div>
        <div className="relative bg-info-bg h-64 rounded-lg m-4 text-white" style={{ backgroundImage: `url(${infoBackground.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 text-center flex flex-col items-center -mt-10">
            <div className='rounded-full bg-secondary-500 py-2 px-4 border-4 border-white text-lg shadow-[0px_2px_15px_2px_#54577A]'>?</div>
          </div>
          <div className="p-4 rounded-lg text-center flex flex-col">
            <p className="text-base mb-4">Help Center</p>
            <p className="text-xs">Having Trouble in Learning. Please contact us for more questions.</p>
          </div>
          <div className="p-4 rounded-lg text-center flex flex-col">
            <button className='bg-white text-secondary-500 w-full rounded-lg py-3 text-xs font-semibold mt-4'>Go to Help Center</button>
          </div>
        </div>
      </div>
    );
  };
  
  const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="flex">
        <SidebarDesktop />
        <SidebarMobile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-4 md:hidden">
          <button onClick={toggleSidebar} className=" text-white border-2 border-sidebar-li-hover p-4 rounded-full">
          <Image src={mobileMenuIcon} alt="Settings Icon" width={30} height={30} />
          </button>
        </div>
      </div>
    );
  };

  export default App;