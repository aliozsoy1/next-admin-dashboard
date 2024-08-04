"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CircularProgress, Card, CardBody } from "@nextui-org/react";
import { Badge, Button } from "@nextui-org/react";
import { NotificationIcon } from "../icons/NotificationIcon.js";
import { Avatar } from "@nextui-org/avatar";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CardHeader } from "@nextui-org/react";
import taskBoxIcon from '../icons/box-task-icon.png';
import boxStar from '../icons/box-star.png';
import leftIcon from '../icons/arrow-left-icon.png';
import rightIcon from '../icons/arrow-right-icon.png';
import '../../app/globals.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HomeMain = () => {
  const users = [
    { id: 1, name: "Curious George", title: "UI UX Designer", avatar: "https://nextui.org/avatars/avatar-1.png", tasks: 40, rating: 4.7, reviews: 750 },
    { id: 2, name: "Abraham Lincoln", title: "3D Design", avatar: "https://nextui.org/avatars/avatar-2.png", tasks: 32, rating: 4.9, reviews: 510 },
    { id: 3, name: "Alex Santon", title: "UI UX Designer", avatar: "https://nextui.org/avatars/avatar-3.png", tasks: 40, rating: 4.7, reviews: 750 },
    { id: 4, name: "Julia Philips", title: "IOS Developer", avatar: "https://nextui.org/avatars/avatar-4.png", tasks: 25, rating: 4.8, reviews: 250 },
  ];
  const [followStates, setFollowStates] = useState(users.map(user => ({ id: user.id, isFollowed: false })));
  const swiperRef = useRef(null);

  const toggleFollow = (userId) => {
    setFollowStates(prevStates => 
      prevStates.map(state => 
        state.id === userId ? { ...state, isFollowed: !state.isFollowed } : state
      )
    );
  };

  

  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: '',
        data: [1, 2, 1, 3, 1, 2, 2],
        borderColor: '#141522',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#546FFF',
        pointHoverBorderWidth: 7,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          color: '#F5F5F7',
          borderDash: [5, 5],
        },
        ticks: {
          stepSize: 1,
          font: {
            size: 14,
            family: 'Arial',
            weight: 'bold',
          },
          color: '#333',
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: true,
          color:'#F5F5F7',
        },
        ticks: {
          font: {
            size: 14,
            family: 'Plus Jakarta Sans',
            weight: 'bold',
          },
          color: '#333',
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function () {
            return '';
          },
          label: function (context) {
            return context.raw + ' task';
          },
        },
        backgroundColor: '#141522',
        titleFont: {
          size: 0,
        },
        bodyFont: {
          size: 14,
          family: 'Plus Jakarta Sans',
        },
        boxPadding: 6,
        caretPadding: 4,
        padding: 10,
        displayColors: false,
        borderColor: '#333',
        borderWidth: 1,
        position: 'nearest',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex-1 p-10 max-w-[992px]">
      <div className="flex justify-between mb-10">
        <div className="text-2xl font-semibold text-secondary-500">
          Hi, Ali Özsoy
          <div className="text-secondary-400 font-medium mt-2 text-base">Let&apos;s finish your task today!</div>
        </div>
        <div className="hidden md:flex text-secondary-500">
          <Badge content="" shape="circle" className="bg-error-500 p-0 mr-5" placement="top-right">
            <Button radius="full" isIconOnly className="rounded-full border-2 border-red mr-5" style={{ width: '52px', height: '52px' }}>
              <NotificationIcon className="fill-current" size={24} />
            </Button>
          </Badge>
          <Avatar style={{ width: '52px', height: '52px' }} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row sm:flex-col gap-5">
        <Card className="w-full sm:w-[194px] h-[214px] border-none bg-secondary-500 rounded-lg">
          <CardBody className="flex flex-row sm:flex-col w-full justify-left items-center pb-0 text-white p-4 overflow-hidden">
            <div className="mb-4 text-left w-full text-base">Running Task
              <div className="mt-4 text-3xl w-full text-left font-semibold">65</div>
            </div>
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
        <div className="flex-1 bg-sidebar-li-hover rounded-2xl p-5  h-[214px]">
          <div className="flex justify-between mb-5">
            <div className="text-base text-secondary-500 font-semibold">Activity</div>
            <div className="text-sm text-secondary-500 font-medium">This Week</div>
          </div>
          <div className="w-full bg-white rounded-2xl p-2 h-[130px]">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
      <div className="flex mt-10 rounded-2xl justify-between">
        <div className="text-2xl font-semibold text-secondary-500">Monthly Mentorss</div>
        <div className="flex flex-row items-center text-2xl font-semibold text-secondary-500">
          <Image onClick={() => swiperRef.current.swiper.slidePrev()} className="cursor-pointer mr-7 rotate-180" src={rightIcon} alt="Left" height="auto"/>
          <Image onClick={() => swiperRef.current.swiper.slideNext()} className="cursor-pointer" src={rightIcon} alt="right" height="auto"/>
        </div>
      </div>
      <div className="flex mt-5 rounded-2xl">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          navigationHide
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            720: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }}
        >
          {users.map(user => (
            <SwiperSlide key={user.id} className="bg-white p-5 rounded-lg">
              <Card className="w-full">
                <CardHeader className="justify-between">
                  <div className="flex gap-3">
                    <Avatar style={{ width: '48px', height: '48px' }} radius="full" src={user.avatar} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-base font-semibold leading-none text-secondary-500">{user.name}</h4>
                      <h5 className="text-xs tracking-tight text-secondary-400">{user.title}</h5>
                    </div>
                  </div>
                  <Button
                    className={followStates.find(state => state.id === user.id).isFollowed ? "bg-transparent text-primary-500 border-default-200" : "text-primary-500"}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={followStates.find(state => state.id === user.id).isFollowed ? "bordered" : "solid"}
                    onPress={() => toggleFollow(user.id)}
                  >
                    {followStates.find(state => state.id === user.id).isFollowed ? "- Unfollow" : "+ Follow"}
                  </Button>
                </CardHeader>
                <CardBody>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src={taskBoxIcon} alt="Task Icon" width={24} height={24} />
                      <div className="font-medium text-secondary-500 text-sm">{user.tasks} Task</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src={boxStar} alt="Task Icon" width={24} height={24} />
                      <div className="font-medium text-secondary-500 text-sm">{user.rating} ({user.reviews} Reviews)</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeMain;
