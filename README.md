# Next.js Admin Dashboard with Auth0

## Demo Linki

[Live Demo Link](https://next-admin-dashboard-sand.vercel.app/)

## Kullanılan Teknolojiler

- Next.js
- Tailwind CSS
- Auth0 Authentication
- React Icons
- Chart.js
- Swiper
- NextUI Components

## Ana Özellikler

- 🔐 Auth0 ile güvenli kullanıcı girişi
- 📱 Responsive tasarım (Mobil ve Desktop uyumlu)
- 📊 Dashboard üzerinde grafikler ve istatistikler
- 🎨 Modern ve kullanıcı dostu arayüz
- 🔄 Gerçek zamanlı veri görselleştirme
- 📱 Mobil uyumlu sidebar ve header

## Kurulum

1. Projeyi klonlayın
```bash
git clone [https://github.com/aliozsoy1/next-admin-dashboard.git]
```

2. Proje dizinine gidin
```bash
cd next-admin
```

3. Gerekli paketleri yükleyin
```bash
npm install
```

4. `.env.example` dosyasını `.env` olarak kopyalayın ve Auth0 bilgilerinizi ekleyin
```env
AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret
AUTH0_ISSUER=your-domain.us.auth0.com
NEXTAUTH_SECRET=your_random_string
NEXTAUTH_URL=http://localhost:3000
```

5. Geliştirme sunucusunu başlatın
```bash
npm run dev
```

6. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## Auth0 Yapılandırması

1. [Auth0 Dashboard](https://manage.auth0.com/) üzerinde yeni bir uygulama oluşturun
2. Application Settings'de aşağıdaki URL'leri ekleyin:
   - Allowed Callback URLs: `http://localhost:3000/api/auth/callback/auth0`
   - Allowed Logout URLs: `http://localhost:3000`
   - Allowed Web Origins: `http://localhost:3000`
3. Username-Password Authentication'ı aktif edin
4. Test kullanıcısı oluşturun veya var olan kullanıcılarla giriş yapın

## Örnek Kullanıcı

```
Email: admin@example.com
Password: PasswordAdmin@
```

## Deployment

Bu proje Vercel'e deploy edilebilir. Vercel'de deployment yaparken environment variables'ları eklemeyi unutmayın.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/next-admin)

## İletişim

Ali Özsoy - [GitHub](https://github.com/aliozsoy1) - [LinkedIn](https://www.linkedin.com/in/ali-%C3%B6zsoy-33870986/)
