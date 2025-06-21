import type { DefaultUser, DefaultSession } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

// NextAuth'un temel tiplerini kendi projemize özel alanlarla genişletiyoruz.
// Bu işlem "module augmentation" olarak adlandırılır.

declare module "next-auth" {
  /**
   * `profile` callback'inden dönen ve `jwt` callback'ine `user` parametresi olarak
   * aktarılan User objesinin tipini genişletiyoruz.
   */
  interface User extends DefaultUser {
    role?: "admin" | "user";
  }

  /**
   * `useSession` hook'u veya `getSession` fonksiyonu ile erişilen
   * Session objesinin tipini genişletiyoruz.
   */
  interface Session {
    user: {
      role?: "admin" | "user";
    } & DefaultSession["user"]; // Default session'daki (name, email) alanlarını koruyoruz.
  }
}

declare module "next-auth/jwt" {
  /**
   * `jwt` callback'i tarafından döndürülen ve şifrelenen
   * JWT token'ının tipini genişletiyoruz.
   */
  interface JWT extends DefaultJWT {
    role?: "admin" | "user";
  }
}
