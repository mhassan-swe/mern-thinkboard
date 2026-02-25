// Import Express toolbox to create a web server
import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import connectDB from"./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimitter.js";

dotenv.config();// use to get the enviorment variable from .env file and add them into process.env

const app = express();// Create a server called "app" using Express
const PORT = process.env.PORT || 5001; 

// connects te database using the connectDB function from db.js
            
app.use(express.json());//middleware will parse the json bodies
app.use(rateLimiter)

app.use((req,res,next)=>{
  console.log(`Method used ${req.method} and the URL is ${req.url}`);
  next();
})

app.use("/api/notes", noteRoutes);



connectDB().then(()=>{
  // A method used to listen incomming requests on ports 5000.
app.listen(PORT,()=>{  
    console.log("Server is running on port:",PORT);
});     
});



    
/*
ERROR CODES

1: 100 is informational

2: 200 code is for that everything is working as expected.
2.1: 201 New resources are created successfully.

3: 300 code is for redirection means the thing you are looking is someware else 
3.1: 301 means the resource you are looking for is permanently moved to another location.

4: 400 means Client Error. something goes wrong on client side .
4.1: 400 bad request means the client sent something wrong to the server.
4.2: 401 unauthorized means the client is not authorized to access the resource.
4.3: 403 forbidden means the client is not allowed to access the resource.
4.4: 404 not found means the resource you are looking for is not found on the server.
4.5: 429 to many requests.
 
5: 500 Server error. something got wrong on server side
5.1: 500 internal error means something is broken on server side .
5.2: 503 service unavailable means server is temp overloaded or down .

*/ 


/* What is Endpoint 
  An endpoint is a specific URL (or path) on a server where the server listens
    for requests and sends back responses.
 -> an endpoint is a resturant
 -> it is a specific table or counter where a customer can ask for something
 -> in code : the URL/path you go to in, order to get or send data . 
 -> each does a specific job send ,delete update or create data.

 */



