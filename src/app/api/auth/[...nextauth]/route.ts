import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions, User, Profile } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
      profile(profile: Profile & { sub: string }): User {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          role: profile.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? "admin" : "user",
        };
      },
    }),
  ],

  // Oturum süresi ayarları (1 saat)
  session: {
    strategy: "jwt",       // JWT tabanlı session 
    maxAge: 60 * 60,       // 1 saat (saniye cinsinden)
    updateAge: 0,          // Oturum süresi her istekte yenilenmesin
  },

  jwt: {
    maxAge: 60 * 60,       // JWT token'ın da ömrü 1 saat
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as "admin" | "user";
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

