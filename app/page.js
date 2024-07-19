import Sidebar from "./components/sidebar";
import './globals.css';
import "@fontsource/plus-jakarta-sans";
import {CircularProgress, Card, CardBody} from "@nextui-org/react";


export default function Home() {
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl">Hi, Ali Özsoy</h1>
      <Card className="w-[196px] h-[214px] border-none bg-secondary-500 rounded-lg mt-10">
        <CardBody className="justify-left items-left pb-0 text-white p-4">
          <div className="mb-4 text-left w-full text-base">Running Task</div>
          <div className="mb-4 text-3xl w-full text-left font-semibold">65</div>
          <div className="flex justify-left items-center">
          <CircularProgress
            classNames={{
              svg: "w-[75px] h-[75px] drop-shadow-md",
              indicator: "stroke-primary-500",
              track: "stroke-primary-500/10",
              value: "text-lg text-white absolute top-6 left-1/4",
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
      </div>
    </div>
  );
}