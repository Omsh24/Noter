The Noter - A Note making website. This website integrates the concept of Frontend and Backend together to provide the users ability to create all the Notes they want.
This webiste uses MongoDB Atlas to store all the data present in it. 

This web application has all the functionality from Registering, Login, Logout, Creating Notes and Getting Notes.

Backend and frontend both servers can be started using "npm run dev" command.

![image](https://github.com/user-attachments/assets/52b5cbfd-b6dd-465e-a58c-4a4c0f03a3c0)

![image](https://github.com/user-attachments/assets/d43dbe43-fdd0-41e3-b341-f3134f37fd67)

![image](https://github.com/user-attachments/assets/9e872342-e0d1-40e9-844c-92305ced6434)

Things I have done:
1. Downloaded nodemon, prettier, express, mongoose, cors,          cookie-parser, mongoose-aggregate-paginate-v2, bcrypt, jsonwebtoken
2. Changes in package.json: 
    "type" : "modules"
    "dev" : nodemon -r dotenv/config --experimental-json-modules src/index.js 
3. Folders i have made:
    models, controllers, middlewares, utils, db, routes
4. I have made a asyncHandler so I wouldn't have to wrap everything   within try-catch or promise.
5. All the authenticated user work such as logout and note making and getting is validated throught a verifyJWT function that is present in auth.middleware.js
6. Since the Login was not working with CORS_ORIGIN = "*", I gave a whitelist variable that had the exact port frontend was running at, now it works.
7. I have used a variable called Status who tells wheather the user is Unregistered, registered, logged in or logged out. This is done using Context API. So I have defined a StatusProvider in StatusContext file that provides the status variable all throughout the project since the App.jsx is wrapped up in StatusProvider hook in main.jsx.

Things to Note:
1. Database is always in another continent: So always use async await statements whenever trying to connect to the database.
2. Always try to wrap everything into a try-catch block.
3. Try to always use .js extention in all files even if not neccessary.
4. Everytime there is a change in .env file we have to restart the server manually, this cannot be done by nodemon.
5. Cors - allows the backend and frontend to communicate with each other while running on different ports.
6. To add the functionality to upload files like videos and image we have to use something like multer and cloudinary to store them, they will be shown in website using url.
7. We can use '_' in place of parameters that have remained unused, such as res in auth.middleware.js.
8. For activities such as logout we have to use the auth.middleware since we need to verify that the user is logged in in order to log them out.
9. Always check the methods used: I had used the findByIdAndDelete instead of findByIdAndUpdate which gave me alot of errors.
10. The Problem that I encountered while fetching the notes for the user was that I kept getting "user not found" error, so I added withCredentials: true in the function to make it work
const response = await API.get("/getNoteHist", { withCredentials: true });
11. Be sure to add withCredentials everytime you use a route that requires auth Middleware i.e., verifyJWT function in this case, otherwise you will get a 401 unauthorized access error.
