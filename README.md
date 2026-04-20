# 🔗 URL Shortener Backend System


Built to simulate real-world backend systems with caching, analytics tracking, and performance optimization.

A scalable and production-style URL shortener built using **Node.js, Express, MongoDB, and Redis**.  
This project demonstrates backend system design concepts like caching, rate limiting, and analytics tracking.



## 🚀 Features

- 🔗 Shorten long URLs into unique short codes
- 🔁 Redirect users using short URLs
- ⚡ Redis caching for faster access
- 🛡️ Rate limiting for API protection
- 📊 Click tracking & basic analytics
- ⏱️ Duplicate request handling (prevents double counting)



## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Caching:** Redis  
- **Other:** REST APIs, Middleware, Rate Limiting  


---

## ⚡ Why Redis?

Redis is used to cache frequently accessed URLs, reducing database load and improving response time for redirection requests. This improves system scalability and performance under high traffic.

---


## 📂 Project Structure
src/
├── config/ # DB & Redis configuration
├── controllers/ # Request handling logic
├── models/ # Mongoose schemas
├── routes/ # API routes
├── services/ # Business logic
├── middleware/ # Rate limiter, etc.
├── utils/ # Helper functions
└── app.js # Express app setup

server.js # Entry point



## ⚙️ Run Locally

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd url-shortener
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
REDIS_URL=your_redis_connection_string
```

### 4. Run the server
```bash
node server.js
```

---

## 📌 API Endpoints

### 🔗 Create Short URL
```http
POST /shorten
```

**Body:**
```json
{
  "originalUrl": "https://example.com"
}
```


### Redirect
GET /:code



### Analytics
GET /stats/:code





## 📌 Highlights

- Reduced database load using Redis caching
- Designed modular backend architecture
- Implemented rate limiting for system stability