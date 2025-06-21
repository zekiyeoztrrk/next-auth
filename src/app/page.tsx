"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      setIsRedirecting(true);
      if (session.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } else {
      setIsRedirecting(false);
    }
  }, [session, status, router]);

  if (isRedirecting || status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Hoş geldin 👋</h1>

      {!session ? (
        // Kullanıcı giriş yapmamışsa:
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => signIn("auth0", { prompt: "login" })} 
        >
          Giriş Yap
        </button>
      ) : (
        // Kullanıcı giriş yaptıysa
        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => router.push("/api/custom-logout")} 
        >
          Çıkış Yap
        </button>
      )}
    </main>
  );
}
