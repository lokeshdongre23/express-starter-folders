# Express Starter Folders (TypeScript)

A reusable Express + TypeScript starter template with a structured folder layout.

---

## 📂 Folder Structure
```
src/
├── config/
│ └── db.ts
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
└── server.ts
.env
.gitignore
```


---

## 🚀 Features

- TypeScript ready  
- Express server setup  
- Structured folders for controllers, routes, services, and more  
- Environment variable support  

---

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)  
- **npm**  

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/lokeshdongre23/express-starter-folders.git <your-project-name>
```
## Install Dependencies
```
npm init -y
npm install express 
npm install -D typescript ts-node @types/express @types/node @types/basic-auth nodemon
npx tsc --init
```
-> Add below lines inside the `package.json`
```
 "scripts": {
    "build": "tsc",
    "dev": "ts-node src/server",
    "start": "nodemon src/server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Run this to start
```
npm install
npm run dev
```
### use below commande for nodemon 
`npm start`

📌 Folder Purpose

config – database and environment configuration

controllers – route handler logic

middlewares – Express middleware functions

models – database models / schemas

routes – API route definitions

services – business logic/services

utils – helper functions

server.ts – entry point of the app
