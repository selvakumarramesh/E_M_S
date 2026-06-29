# Employee Management System

# Tools used for making the project

    - React JS
    - Express JS
    - MongoDB

# Features

    - Register Employee
    - Register Employer
    - view Employee detail
    - view Employer detail
    - Edit and delete Employee detail
    - Edit and delete Employer detail

## Installation

    ### Frontend

    - npm create vite@latest .  -> for creating vite react app with same name of folder

    - npm i react-router-dom -> for Routing 

    - npm i axios -> Api handling

    ### Backend

    - npm init -y -> creating package.json file

    - npm i express -> framework for nodejs

    - npm i cors 
    
     CORS (Cross-Origin Resource Sharing) in the backend to allow the frontend and backend
     to communicate

    - npm i mongoose -> for mongodb connection and releted operation

    -  npm i dotenv -> load environment variables from a .env or config.env file into process.env

    - npm i nodemon -> for automatic server refreshing when changes happen

## Commands

    ### command for running the react app : npm run dev

    ### command for running the backend server : npm start


## Frontend Folder structure

Frontend
│
└──  src
      ├── Compontent
                ├── RegisterEmployee.jsx
                ├── RegisterEmployer.jsx
                ├── Employer.jsx
                ├── Employees.jsx
                ├── Employees.css
                └── view.jsx

      ├── app.css
      ├── app.jsx
      ├── index.jsx
      ├── main.jsx


         
## Backend Folder Structure

Backend
│
├── config
│   ├── config.env
│   └── db.js
|
├── Controller
|     └── ManageController
|
├── Models
|     ├── Employerregister.js
│     └── Empregister.js
|
├── Route
|     └── Manageroute
|
├── app.js
|
├── server.js
|
└── package.json

## Hooks used in React js

        --> useState()
        --> useEffect()

## Server Creation code

import express from "express";
import cors from "cors"
import dotenv from "dotenv"


const app = express(); 

---> express() → creates an Express application
     app → the server object

app.use(express.json());

---> is a middleware that tells Express to automatically convert incoming JSON data into a JavaScript object

---> converts the incoming JSON into req.body

app.use(cors());

        React App (5173)
            |
            | API Request
            v
        Browser
            |
            | Check CORS
            v
        Express Backend (8000)
            |
            | Access-Control-Allow-Origin
            v
        Response Returned



dotenv.config({path:"./config/config.env"})

const PORT = process.env.PORT || 3000; --> variable hold the "port " value from config.env file

 app.listen(PORT,()=>{
    console.log(`server running sucessfully in the lochost:${PORT}`);
    
})   --> this code is for checking the server is running or not 




        