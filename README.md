# 🔗 URL Shortener Backend System

A production-style URL shortener built using Node.js, Express, MongoDB, and Redis.

## 🚀 Features

- Shorten long URLs
- Redirect using short codes
- Redis caching for faster access
- Rate limiting for API protection
- Click analytics tracking

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Redis

## 📡 API Endpoints

### Create Short URL
POST /shorten

Body:
{
  "originalUrl": "https://example.com"
}

---

### Redirect
GET /:code

---

### Analytics
GET /stats/:code

---

## ⚙️ Setup

1. Clone repo
2. Run:
   npm install

3. Add `.env`:
   MONGO_URI=your_mongo_uri
   REDIS_URL=your_redis_url

4. Start:
   node server.js

---

## 📌 Highlights

- Reduced database load using Redis caching
- Designed modular backend architecture
- Implemented rate limiting for system stability