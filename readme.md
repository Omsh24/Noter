This is a simple Full stack Web Application that aims to give every user a space where they can create notes for all their work. 
Hence the name Noter.

Things I have done:
1. Downloaded nodemon, prettier, express, mongoose, cors, cookie-parser
2. Changes in package.json: 
    "type" : "modules"
    "dev" : nodemon -r dotenv/config --experimental-json-modules src/index.js
3. Folders i have made:
    models, controllers, middlewares, utils, db, routes
4. 

Things to Note:
1. Database is always in another continent: So always use async await statements whenever trying to connect to the database.
2. Always try to wrap everything into a try-catch block.
3. Try to always use .js extention in all files even if not neccessary.
4. Everytime there is a change in .env file we have to restart the server manually, this cannot be done by nodemon.
5. Cors - allows the backend and frontend to communicate with each other while running on different ports.
