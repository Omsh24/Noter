This is a simple Full stack Web Application that aims to give every user a space where they can create notes for all their work. 
Hence the name Noter.

Things I have done:
1. Downloaded nodemon, prettier, express, mongoose, cors,          cookie-parser, mongoose-aggregate-paginate-v2, bcrypt, jsonwebtoken
2. Changes in package.json: 
    "type" : "modules"
    "dev" : nodemon -r dotenv/config --experimental-json-modules src/index.js 
3. Folders i have made:
    models, controllers, middlewares, utils, db, routes
4. I have made a asyncHandler so I wouldn't have to wrap everything   within try-catch or promise.

Things to Note:
1. Database is always in another continent: So always use async await statements whenever trying to connect to the database.
2. Always try to wrap everything into a try-catch block.
3. Try to always use .js extention in all files even if not neccessary.
4. Everytime there is a change in .env file we have to restart the server manually, this cannot be done by nodemon.
5. Cors - allows the backend and frontend to communicate with each other while running on different ports.
6. To add the functionality to upload files like videos and image we have to use something like multer and cloudinary to store them, they will be shown in website using url.
7. We can use '_' in place of parameters that have remained unused, such as res in auth.middleware.js.
8. For activities such as logout we have to use the auth.middleware since we need to verify that the user is logged in in order to log them out.

