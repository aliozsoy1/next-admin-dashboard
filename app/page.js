import Sidebar from "./components/sidebar";
import HomeMain from "./components/home-main";
import HomeRight from "./components/home-right";
import './globals.css';
import "@fontsource/plus-jakarta-sans";


export default function Home() {
  
  return (
    <div className="flex">
      <Sidebar />
      <HomeMain />
      <HomeRight />
    </div>
  );
}