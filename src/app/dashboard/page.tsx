'use client';

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.replace("/");
    } else {
      setAuthorized(true);
    }
  }, [session, status, router]);

  if (status === "loading" || !authorized || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-green-400 to-emerald-600 text-white p-4">
      <h1 className="text-4xl font-extrabold text-shadow-lg flex items-center gap-3 text-center">
        Kullanıcı Paneli 👋
      </h1>

      <p className="text-xl font-semibold text-center mt-4">
        Merhaba, {session.user.name || session.user.email}!
      </p>

      <button
        className="px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
        onClick={() => router.push("/api/custom-logout")}
      >
        Çıkış Yap
      </button>
    </main>
  );
}
