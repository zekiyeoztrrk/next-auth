"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";


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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/img/e-trade-center.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Beyaz kutu */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[40%] max-w-sm flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <Image
          src="/img/logo2.png"
          alt="Kayra Export Logo"
          width={120}
          height={120}
          className="object-contain"
        />

        {/* Başlık */}
        <h1 className="text-xl font-semibold text-gray-800">
          {"Kayra Export'a Hoşgeldiniz"}
        </h1>
        {/* Buton */}
        <button
          onClick={() => signIn("auth0", { prompt: "login" })}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium rounded-lg shadow-md transition duration-300"
        >
          Giriş Yap
        </button>
      </div>
    </main>
  );
}
