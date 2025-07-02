# 🌍 Natours API

A production-ready RESTful API for a tour booking platform, built with **Node.js**, **Express**, and **MongoDB**. Designed to demonstrate scalable backend architecture and modern API features.

## 🚀 Features

- Modular **MVC structure**
- **JWT-based authentication** & role-based access control
- Advanced filtering, sorting, field limiting, and pagination
- Nested routes (e.g. tours → reviews)
- MongoDB schema design with **Mongoose**
- Global error handling with `AppError` and `catchAsync`
- Security middlewares: data sanitization, rate limiting, HPP
- API versioning (`/api/v1`)

## 📂 Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT for authentication
- Postman for API testing

## 🛠️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/okancingoz/natours.git
cd natours

# 2. Install dependencies
npm install

# 3. Create a .env file in the root directory
# Example .env content:
PORT=3000
DATABASE=<your-mongodb-connection-string>
DATABASE_PASSWORD=<password-if-needed>
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d

# 4. Start the development server
npm run start:dev

## 📡 API Endpoints

### 🧭 Tours

- `GET    /api/v1/tours` – Get all tours  
- `GET    /api/v1/tours/:id` – Get a single tour  
- `POST   /api/v1/tours` – Create a new tour  
- `PATCH  /api/v1/tours/:id` – Update a tour  
- `DELETE /api/v1/tours/:id` – Delete a tour  
- `GET    /api/v1/tours/top-5-cheap` – Get top 5 cheapest tours  
- `GET    /api/v1/tours/tour-stats` – Get tour statistics  
- `GET    /api/v1/tours/monthly-plan/:year` – Get monthly plan  

---

### 👤 Users

- `GET    /api/v1/users` – Get all users  
- `PATCH  /api/v1/users/updateMe` – Update current user data  
- `DELETE /api/v1/users/deleteMe` – Delete current user  
- `PATCH  /api/v1/users/:id` – Update a user (admin)  
- `DELETE /api/v1/users/:id` – Delete a user (admin)  

---

### 🔐 Authentication

- `POST   /api/v1/users/signup` – Sign up  
- `POST   /api/v1/users/login` – Login  
- `POST   /api/v1/users/forgotPassword` – Request password reset  
- `PATCH  /api/v1/users/resetPassword/:token` – Reset password  
- `PATCH  /api/v1/users/updateMyPassword` – Update current password  

---

### 📝 Reviews

- `GET    /api/v1/reviews` – Get all reviews  
- `GET    /api/v1/reviews/:id` – Get a review  
- `POST   /api/v1/reviews` – Create a review  
- `PATCH  /api/v1/reviews/:id` – Update a review  
- `DELETE /api/v1/reviews/:id` – Delete a review  

---

### 🔁 Nested Routes (Tour Reviews)

- `GET    /api/v1/tours/:tourId/reviews` – Get all reviews for a tour  
- `POST   /api/v1/tours/:tourId/reviews` – Create a review for a tour  
