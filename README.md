ConnectVerse

Overview

ConnectVerse is a user authentication web application built using React.js (frontend) and Node.js with MongoDB (backend). The project includes signup, login, and authentication functionality using JWT (JSON Web Tokens).

Contact
Email: vaibhav.hebale.mec21@iitbhu.ac.in

Features

	•	User signup and login
	•	JWT-based authentication
	•	Backend built with Node.js and Express
	•	Frontend built with React.js
	•	Data stored in MongoDB

Table of Contents

	•	Setup Instructions
	•	Technologies Used
	•	API Endpoints
	•	Folder Structure

Setup Instructions

To run this project locally, follow these steps:

Prerequisites

	•	Node.js (v14.x or above)
	•	MongoDB (installed locally or using MongoDB Atlas)
	•	npm (comes with Node.js)

1. Clone the Repository

git clone https://github.com/yourusername/connectVerse.git

2. Backend Setup

Navigate to the backend directory:

cd connectVerse/backend

Install Dependencies

npm install

Environment Variables

Create a .env file in the backend directory and add the following:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

	•	Replace your_mongodb_connection_string with your MongoDB URI.
	•	Replace your_jwt_secret with any secret string to use for JWT signing.

Run the Server

To start the backend server:

npm run dev

The backend server should now be running on http://localhost:4000.

3. Frontend Setup

Navigate to the frontend directory:

cd ../frontend

Install Dependencies

npm install

Run the Frontend

To start the frontend app:

npm start

The frontend will start running on http://localhost:3000.

4. Connecting the Backend and Frontend

Ensure that the frontend makes API calls to http://localhost:4000 (the backend server). This is typically handled in your axios configuration in the frontend.

Technologies Used

	•	Frontend: React.js, Chakra UI
	•	Backend: Node.js, Express.js
	•	Database: MongoDB
	•	Authentication: JSON Web Tokens (JWT)

API Endpoints

Here are the key API endpoints available:

	•	POST /api/users/register: Register a new user.
	•	POST /api/users/login: Login an existing user.

Folder Structure

The project is structured as follows:

/connectVerse
  ├── /backend      # Node.js server and MongoDB setup
  ├── /frontend     # React.js application
  └── README.md     # This file



For any issues or questions, feel free to reach out!


