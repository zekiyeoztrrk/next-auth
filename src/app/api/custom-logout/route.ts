import { NextResponse } from "next/server";

export async function GET() {
  const logoutUrl = `https://dev-40nwyqb1atwank2i.us.auth0.com/v2/logout?client_id=xzQqvThtkfU8rGd38B7oIrilbOXo3JUU&returnTo=http://localhost:3000/`;

  const response = NextResponse.redirect(logoutUrl);

  // Tüm çerezleri temizle
  const cookieNames = [
    "next-auth.session-token",
    "__Secure-next-auth.session-token",
    "__Host-next-auth.csrf-token",
  ];

  cookieNames.forEach(name => {
    response.cookies.set(name, "", {
      maxAge: 0,
      path: "/",
    });
  });

  return response;
}
