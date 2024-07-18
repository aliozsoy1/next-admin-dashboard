import React from 'react';
import Image from 'next/image';
import logo from '../images/admin-logo.svg';
import overviewIcon from '../icons/overview.png';
import taskIcon from '../icons/task.png';
import mentorsIcon from '../icons/mentors.png';
import messageIcon from '../icons/message.png';
import settingsIcon from '../icons/settings.png';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-black border-r-2 border-sidebar-li-hover text text-sm">
      <div className="p-4">
        <div><Image src={logo} alt="Admin Logo" className="mx-auto" /></div>
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
    </div>
    
 
    
  );
};

export default Sidebar;