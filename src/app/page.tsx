"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Hoş geldin 👋</h1>
      
      {session ? (
        <>
          <p>Merhaba, {session.user?.name}</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => signOut()}
          >
            Çıkış Yap
          </button>
        </>
      ) : (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => signIn("auth0")}
        >
          Giriş Yap
        </button>
      )}
    </main>
  );
}
