export const config = {
  auth0: {
    clientId: process.env.AUTH0_CLIENT_ID || "",
    clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
    issuer: process.env.AUTH0_ISSUER || "",
    logoutUrl: process.env.AUTH0_LOGOUT_URL || "",
  },
  nextAuth: {
    url: process.env.NEXTAUTH_URL || "http://localhost:3000",
    secret: process.env.NEXTAUTH_SECRET || "",
  },
  adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@example.com",
};
