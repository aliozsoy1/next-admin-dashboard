import React from "react";
import {CircularProgress, Card, CardBody} from "@nextui-org/react";
import {Badge, Button} from "@nextui-org/react";
import {NotificationIcon} from "../icons/NotificationIcon.js";
import {Avatar} from "@nextui-org/avatar";

const HomeMain = () => {
  return (
    <div className="flex-1 p-10">
        <div className="flex justify-between mb-10">
          <div className="text-2xl font-semibold text-secondary-500">
            Hi, Ali Özsoy
          <div className="text-secondary-400 font-medium mt-2 text-base">Lets finish your task today!</div>
          </div>
          <div className="flex text-secondary-500">
            <Badge content="" shape="circle" className="bg-error-500 p-0 mr-5" placement="top-right">
              <Button
                radius="full"
                isIconOnly
                className="rounded-full border-2 border-sidebar-li-hover mr-5"
              >
                <NotificationIcon className="fill-current" size={24} />
              </Button>
            </Badge>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </div>
        </div>
      <div className="flex lg:flex-row sm:flex-col">
        <Card className="lg:w-[196px] md:w-full h-[214px] border-none bg-secondary-500 rounded-lg">
            <CardBody className="justify-left items-left pb-0 text-white p-4">
            <div className="mb-4 text-left w-full text-base">Running Task</div>
            <div className="mb-4 text-3xl w-full text-left font-semibold">65</div>
            <div className="flex justify-left items-center">
            <CircularProgress
                classNames={{
                svg: "w-[75px] h-[75px] drop-shadow-md",
                indicator: "stroke-primary-500",
                track: "stroke-primary-500/10",
                value: "text-lg text-white",
                }}
                value={45}
                strokeWidth={1.5}
                showValueLabel={true}
            />
            <div className="text-xl ml-3">100
                <div className="text-sm text-secondary-300">Task</div>
            </div>
            </div>
            </CardBody>
        </Card>
        <div className="flex justify-between lg:ml-10 p-7 bg-sidebar-li-hover rounded-2xl w-full">
            <div className="text-base text-secondary-500 font-semibold">Activity</div>
            <div className="text-sm  text-secondary-500 font-medium">This Week</div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;