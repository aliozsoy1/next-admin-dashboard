// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          // Auth0 token endpoint'ine istek
          const tokenResponse = await fetch(`https://${process.env.AUTH0_ISSUER}/oauth/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              grant_type: 'password',
              username: credentials.email,
              password: credentials.password,
              client_id: process.env.AUTH0_CLIENT_ID,
              client_secret: process.env.AUTH0_CLIENT_SECRET,
              scope: 'openid profile email',
              audience: `https://${process.env.AUTH0_ISSUER}/api/v2/`,
              connection: 'Username-Password-Authentication',
              realm: 'Username-Password-Authentication',
            }).toString(),
          });

          const tokens = await tokenResponse.json();

          if (!tokenResponse.ok) {
            console.error('Auth0 token error:', tokens);
            return null;
          }

          // Kullanıcı bilgilerini al
          const userResponse = await fetch(`https://${process.env.AUTH0_ISSUER}/userinfo`, {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          });

          const userData = await userResponse.json();

          if (!userResponse.ok) {
            console.error('Auth0 userinfo error:', userData);
            return null;
          }

          return {
            id: userData.sub,
            email: userData.email,
            name: userData.name || userData.email,
            accessToken: tokens.access_token,
          };
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.id;
      }
      return session;
    },
  },
  debug: true,
});

export { handler as GET, handler as POST };
