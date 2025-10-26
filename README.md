# React + Vite Application

This project is a React application built with Vite. It supports both local development and production deployment using Docker.

---

## 🛠️ Prerequisites
Before you begin, make sure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🧑‍💻 Running the Project Locally

### 1. Clone the Repository
```bash
git clone <repository-url>
cd revise-react
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Open the Application
Visit `http://localhost:5173` in your browser.

---

## 🐳 Running the Project Locally with Docker

### 1. Build and Run the Docker Container
```bash
docker compose -f local-compose.yml up --build
```

### 2. Open the Application
Visit `http://localhost:5173` in your browser.

### 3. Stop the Container
To stop the container, press `Ctrl+C` or run:
```bash
docker compose -f local-compose.yml down
```

---

## 🌐 Running the Project in Production

### 1. Build and Run the Production Docker Container
```bash
docker compose up --build
```

### 2. Open the Application
Visit `http://localhost:3000` in your browser.

### 3. Stop the Container
To stop the container, press `Ctrl+C` or run:
```bash
docker compose down
```

---

## 📂 Project Structure
```
revise-react/
├── src/                # Source code
├── public/             # Static assets
├── Dockerfile          # Production Dockerfile
├── Dockerfile.dev      # Development Dockerfile
├── docker-compose.yml  # Production Docker Compose file
├── local-compose.yml   # Development Docker Compose file
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## 📝 Notes
- **Environment Variables**: Update `.env` for custom configurations.
- **Vite Port**: The development server runs on `http://localhost:5173` by default.
- **Production Port**: The production server runs on `http://localhost:3000`.

---


