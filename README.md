# Express Starter Folders (TypeScript)

A reusable Express + TypeScript starter template with a structured folder layout.

---

## Folder Structure
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

##  Features

- TypeScript ready  
- Express server setup  
- Structured folders for controllers, routes, services, and more  
- Environment variable support  

---

##  Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)  
- **npm**  

---

##  Setup Instructions

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

## Folder Purpose

1. config – database and environment configuration

2. controllers – route handler logic

3. middlewares – Express middleware functions

4. models – database models / schemas

5. routes – API route definitions

6. services – business logic/services

7. utils – helper functions

8. server.ts – entry point of the app
