import React from "react";
import { Badge, Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/avatar";
import { NotificationIcon } from "../icons/NotificationIcon.js";
import MobileSidebar from "./mobile-sidebar";

const MobileHeader = () => {
  return (
    <div className="block sm:hidden p-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold"><MobileSidebar/></div>
        <div className="flex items-center">
            <Badge content="" shape="circle" className="bg-error-500 p-0 mr-5" placement="top-right">
              <Button radius="full" isIconOnly className="rounded-full border-2 border-sidebar-li-hover mr-5" style={{ width: '58px', height: '58px' }}>
                <NotificationIcon className="fill-current" size={24} />
              </Button>
            </Badge>
          <Avatar style={{ width: '58px', height: '58px' }} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;