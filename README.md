# Task Manager

A full-stack task management application with Express.js backend and Next.js frontend.

## Tech Stack

- **Backend**: Express.js, MongoDB, JWT Authentication
- **Frontend**: Next.js 14, React, Tailwind CSS
- **Database**: MongoDB with Mongoose

## Features

- User authentication (register/login)
- Create, read, update, delete tasks
- Task filtering by status and priority
- Dashboard with analytics
- Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```

3. Create environment files:

   Backend (`backend/.env`):
   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

   Frontend (`apps/web/.env.local`):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

### Running the App

Start both backend and frontend:
```
pnpm dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
/
├── apps/web/          # Next.js frontend
├── backend/           # Express.js API
├── package.json       # Root workspace config
└── pnpm-workspace.yaml
```
