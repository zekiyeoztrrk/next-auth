"use client";

import Image from "next/image";
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
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 p-6">
      <Image
        src="/img/logo.png"
        alt="Kullanıcı Banner"
        width={250}
        height={100}
        className="rounded-xl shadow-md"
      />

      <h1 className="text-2xl font-bold text-center">
        Kullanıcı Paneli
      </h1>

      <p className="text-base text-center">
        Merhaba, <span className="font-semibold">{session.user.name || session.user.email}</span>!
      </p>

      <button
        className="mt-4 px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-red-700 transition duration-300"
        onClick={() => router.push("/api/custom-logout")}
      >
        Çıkış Yap
      </button>
    </main>
  );
}
