import Sidebar from "./components/sidebar";
import HomeMain from "./components/home-main";
import HomeRight from "./components/home-right";
import './globals.css';
import Head from 'next/head'
import "@fontsource/plus-jakarta-sans";


export default function Home() {
  
  return (
    <>
    <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>
    <div className="flex">
      <Sidebar />
      <HomeMain />
      <HomeRight />
    </div>
    </>
  );
}