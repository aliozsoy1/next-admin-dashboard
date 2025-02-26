'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Sidebar from "../components/sidebar";
import HomeMain from "../components/home-main";
import HomeRight from "../components/home-right";
import MobileHeader from "../components/mobile-header";
import '../globals.css';
import Head from 'next/head'
import "@fontsource/plus-jakarta-sans";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <>
    <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>
  <MobileHeader/>
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <HomeMain />
      <HomeRight />
    </div>
    </>
  );
}