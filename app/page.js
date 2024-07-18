import Sidebar from "./components/sidebar";
import './globals.css';
import "@fontsource/plus-jakarta-sans";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl">Hi, Ali Özsoyy</h1>
      </div>
    </div>
  );
}