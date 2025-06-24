# Next.js Role-Based Authentication Project

This project is a role-based authentication and authorization system built with Next.js, Auth0, and NextAuth.js. It provides secure login functionality using OAuth, protects specific pages using middleware, and authorizes access based on user roles (admin and user) defined by email.

## Features

- OAuth login with Auth0
- JWT-based session management
- Role-based access control (admin & user)
- Route protection with Next.js middleware
- Environment variable-based configuration
- Docker support for local development
- Jest-based unit testing for key logic

## Technologies Used

- Next.js (App Router)
- Auth0 (OAuth Provider)
- NextAuth.js
- TypeScript
- JWT (JSON Web Token)
- Tailwind CSS (for styling)
- Docker & Docker Compose
- Jest (for testing)
- ESLint & Prettier (for code formatting)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/zekiyeoztrrk/next-auth.git
cd next-auth
npm install

Then, create a .env.local file using the .env.example file as a reference:
cp .env.example .env.local

Fill in your Auth0 credentials and configuration details in .env.local:
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
AUTH0_ISSUER=https://your-issuer.auth0.com
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_EMAIL=admin@gmail.com

Start the development server:
npm run dev

To run tests:
npm run test

To use Docker:
docker-compose up --build

#Zekiye Öztürk
