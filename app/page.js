import './globals.css';
import Head from 'next/head'
import "@fontsource/plus-jakarta-sans";
import LoginPage from './login/page';


export default function Home() {
  
  return (
    <>
    <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>
    
      <LoginPage />
    
    </>
  );
}