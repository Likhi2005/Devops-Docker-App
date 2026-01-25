# DevOps Docker App

A full-stack application demonstrating containerized development with a React frontend, Node.js API backend, and PostgreSQL database.

---

## Architecture

- **Frontend**: React with Vite, TailwindCSS, and TanStack Query
- **Backend**: Node.js with Express and PostgreSQL
- **Database**: PostgreSQL 15.1
- **Development**: Docker containerization with health checks

---

## Project Structure
```text
├── api-node/ # Node.js backend API
│ ├── src/
│ │   ├── index.js # Express server with routes
│ │   └── db.js # PostgreSQL connection and queries
│ ├── healthcheck/
│ │   └── healthcheck.js # Docker health check script
│ ├── package.json
│ └── README.md
├── client-react/ # React frontend
│ ├── src/
│ │   ├── App.jsx # Main React component with API integration
│ │   ├── main.jsx # React app entry point
│ │   ├── App.css # Component styles
│ │   └── index.css # Global styles with TailwindCSS
│ ├── public/ # Static assets
│ ├── index.html # HTML template
│ ├── vite.config.js # Vite configuration with API proxy
│ ├── package.json
│ └── eslint.config.js
├── .github/
│ └── workflows/
│     └── image-ci.yaml # CI/CD pipeline
├── Makefile # Development commands
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 19.4 recommended)
- [Docker](https://www.docker.com/)
- [Make](https://www.gnu.org/software/make/) (optional, for using Makefile commands)

---


## Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
cd Devops-Docker-App
```

---

## 2. Install Dependencies
### Backend (Node.js API):
```bash
cd api-node
nvm use node 19.4  # or use your Node.js version manager
npm install
cd ..
```


### Frontend (React):

```bash
cd client-react
npm install
cd ..
```

---

## 3. Start the Application

### Option A: Using Makefile (Recommended)

#### Start PostgreSQL database
```bash
make run-postgres
```

#### In a new terminal, start the API server

```bash
make run-api-node
```

#### In another terminal, start the React client
```bash
make run-client-react
```


### Option B: Manual Setup
#### Start PostgreSQL:

```bash
docker run \
  -e POSTGRES_PASSWORD=postgres123 \
  -v pgdata:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:15.1-alpine
```


#### Start API Server:

```bash
cd api-node
DATABASE_URL=postgres://postgres:postgres123@localhost:5432/postgres npm run dev
```


#### Start React Client:

```bash
cd client-react
npm run dev
```

---

## Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Health Check: http://localhost:3000/ping

---

## Features
- Real-time Data: Frontend displays current timestamp from database
- API Proxy: Vite proxy configuration routes /api/node/* to backend
- Health Monitoring: Docker health check endpoint
- Hot Reload: Both frontend and backend support hot reloading
- Modern Stack: Uses latest React 19, Vite 7, and TailwindCSS 4

---


## API Endpoints
```http
GET /   # Returns current timestamp from database with API identifier
GET /ping    # Health check endpoint
```
---

## Environment Variables

```env
API Node
PORT - Server port (default: 3000)
DATABASE_URL - PostgreSQL connection string
DATABASE_URL_FILE - Path to file containing database URL
```

---



## CI/CD

```text
.github/workflows/image-ci.yaml
```

The project includes GitHub Actions workflow in image-ci.yaml for automated builds and deployments.

---


## Technologies Used


### Frontend
- React 19
- Vite 7
- TailwindCSS 4
- TanStack Query 5
- Axios
- ESLint


### Backend
- Node.js
- Express 5
- PostgreSQL (pg)
- Morgan (logging)


### DevOps
- Docker
- GitHub Actions
- Make

---

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
