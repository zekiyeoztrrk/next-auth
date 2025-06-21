'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return null; // Oturum bilgileri yüklenene kadar header'ı gösterme

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Görev Paneli
      </Link>
      <div className="flex items-center gap-4">
        {session?.user ? (
          <>
            <span className="text-sm text-gray-300">
              Hoş geldin, {session.user.name || session.user.email} ({session.user.role})
            </span>
            {/* Rol bazlı dashboard linki */}
            <Link 
              href={session.user.role === 'admin' ? '/admin' : '/dashboard'}
              className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
            >
              Panel
            </Link>
            <button
              // Özel çıkış endpoint'ine yönlendir
              onClick={() => router.push("/api/custom-logout")}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
            <Link 
                href="/api/auth/signin/auth0"
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Giriş Yap
            </Link>
        )}
      </div>
    </header>
  );
}
