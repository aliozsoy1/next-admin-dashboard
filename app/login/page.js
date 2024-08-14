'use client'; // Bu satır, bileşenin client-side çalışacağını belirtir

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa'; // İkonları içe aktar

export default function LoginPage() {
  const router = useRouter(); // Yönlendirme için useRouter hook'unu kullanıyoruz
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basit kontrol: Eğer email ve password doluysa, login başarılı sayılır
    if (email === 'admin@example.com' && password === 'password') {
      // Giriş başarılıysa dashboard'a yönlendir
      router.push('/dashboard');
    } else {
      // Hata mesajı göster
      setError('Hatalı email veya şifre');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-md rounded-2xl">
        {/* Login Form Bölgesi */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-secondary-500 mb-6 text-center">Giriş Yap</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="E-Posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 text-secondary-500 w-full rounded-lg py-3 text-white mt-16"
            >
              Giriş Yap
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          
          {/* Sosyal Medya Butonları */}
          <div className="mt-4">
            <p className="text-center text-sm text-gray-500 mb-4">Diğer giriş yöntemleri:</p>
            <div className="flex gap-3 justify-center">
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100">
                <FaGoogle className="w-4 h-4 text-gray-700" />
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100">
                <FaFacebook className="w-4 h-4 text-gray-700" />
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100">
                <FaGithub className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
          <div className='mt-4 text-center text-sm text-gray-500 hover:underline cursor-pointer'>
            Şifremi Unuttum!
          </div>
        </div>
        {/* Hoşgeldiniz Bölgesi */}
        <div className="hidden md:flex md:w-1/2 bg-primary-200 p-12 rounded-l-[60px] rounded-r-2xl items-center shadow-md ml-8 justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hoşgeldiniz!</h2>
            <p className="text-gray-600">Panele giriş yapmak için;<br></br>
                <strong>E-Posta:</strong> admin@example.com<br></br>
                <strong>Şifre:</strong> password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
