'use client'; // Bu satır, bileşenin client-side çalışacağını belirtir

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-secondary-500 mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 text-secondary-500 w-full rounded-lg py-3 text-white mt-16"
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        <div className="hidden md:flex md:w-1/2 bg-primary-200 p-12 rounded-l-[60px] items-center shadow-md ml-8 justify-center">
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
