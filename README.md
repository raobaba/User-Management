
# Project Title
User-Management-App

## Introduction

### User Management API
- Create a web app for managing user details with CRUD operations using JSONPlaceholder API
- View, add, edit, and delete users with corresponding UI elements.
- Use JSONPlaceholder’s '/users' endpoint; also implemented a custom Node.js server for enhanced functionality.
- Display error messages for failed API requests.
- Optional features include pagination, client-side validation, and responsive design.

## Project Type
Frontend & Backend 

## Deplolyed App
```bash
Frontend: https://user-data-manage-by-rajan.netlify.app/
Backend: https://server-side-kvyh.onrender.com/api/v1/users
JSONAPI : https://jsonplaceholder.typicode.com/users
Database: mongodb+srv://YOUR_USERNAME:YUOR_PASSWORD@cluster0.vvtoxbl.mongodb.net/DigitalPaani?retryWrites=true&w=majority
```

```
## Directory Structure
```bash
DigitalPaani-Assignment/
├─ server/
   ├─ src/
   │  ├─ config/
   │  │  └─ db.js
   │  ├─ models/
   │  │  └─ user.model.js
   │  ├─ controllers/
   │  │  └─ user.contorller.js
   │  ├─ routes/
   │  │  └─ user.route.js
   │  ├─ app.js
   │  └─ index.js
├─ client/
   ├─ public/
   │  └─ (public assets)
   ├─ src/
   │  ├─ components/
   │  │  └─ Modal.jsx
   │  │  └─ Pagination.jsx
   │  │  └─ UserDetailsModal.jsx
   │  │  └─ UserForm.jsx
   │  │  └─ UserList.jsx
   │  ├─ context/
   │  │  └─ ErrorHandler.jsx
   │  ├─ service/
   │  │  └─ API.js
   │  └─ App.css
   │  └─ App.js
   │  └─ Index.css
   │  └─ Index.js
   └─ package-lock.json
   └─ package.json
```



## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
- Manage user details with CRUD operations, interactive UI, error handling, and optional features like pagination and responsive design.


## Design Decisions & Assumptions:

### React UI
- Use React.js for UI.
- Employ a third-party json API.
- Ensure responsiveness with CSS frameworks.
- Opt for minimalist UI.
- Assume city name searches as primary.

### Node.js User Management API:
- Choose Node.js for backend.
- Utilize Express.js for API.
- Implement JWT for authentication.
- Use MongoDB for storage.
- Assume basic security measures.
- Prioritize scalability and performance.


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
git clone <complete_repository> 
For Backend:-
cd book_management
npm install 
cd my-project-backend
npm start

For Frontend:-
```bash
cd weather_app
npm install
npm start
```

## Usage
Provide instructions and examples on how to use your project.

```bash
# Example
```

## Credentials
Include screenshots as necessary.
```bash
# MongoURL
mongoURL= YOUR_MONGODB_URL_HERE

```

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
### User Management:
- `GET /api/v1/users`: Get User List.
- `GET /api/v1/users/id`: Get User by Id.
- `POST /api/v1/users`: User logout.
- `DELETE /api/v1/users/id`: Delete user.
- `PUT /api/v1/users`: Update User.


## UI 
![Screenshot (193)](https://github.com/user-attachments/assets/4e1b5404-f657-4512-aa2c-5c5903aff881)
![Screenshot (194)](https://github.com/user-attachments/assets/5d5561a6-0fc7-4b11-8a0b-84dd7abfc728)
![Screenshot (195)](https://github.com/user-attachments/assets/ac151699-bc8e-498b-85c0-ca9a57836785)
![Screenshot (196)](https://github.com/user-attachments/assets/50bf8d7b-83a4-4e8b-bc10-171bbee807c7)
![Screenshot (197)](https://github.com/user-attachments/assets/e8219482-3071-4fb8-91fd-9177b54d72ad)
![Screenshot (198)](https://github.com/user-attachments/assets/c929602a-baa5-482d-a495-330f6719ecc6)

## Technology Stack
- Node.js
- Express.js
- MongoDB
- ReactJS
- Tailwind CSS
- Flowbite
