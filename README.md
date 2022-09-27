# mern-web-app
just a mern stack work in progress(JWT-Jason web tokens etc)

 <h4>Lets get started</h4>
 1. git clone the project </br>
 2. npm i express </br>
 3. npm i -g nodemon </br>
 4. npm i dotenv</br>
 5. npm i mongoose </br>
 6. create a .env file and make sure that you pass on the PORT aswell as MONGO_URI </br>
 7. npm i date-fns </br>
 8. npm i bcrypt </br>
 9. npm i validation </br>

 # env setup
 <h4>MONGO_URI=LINK TO YOUR MONGO DB</h4>
 <h4>PORT=whatever port you want</h4>
 
 <h5>Dotenv is a zero-dependency module that loads environment variables
 from a .env file into process.env. Storing configuration in the environment
separate from code is based on The Twelve-Factor App methodology.
</h5>
 <h2>Tools used</h2>
  //nodemon for testing the routes or the endpoints locally
  //alternatively you can use postman make sure you download and install

<p>just a mern web application lets see how far we can go👽😁</>

#API ENDPOINTS 

  <h3>GET /routine</h3> //get all the routine documents
  
  <h3>POST /routine</h3> //Creates a new routine in the documents
  
  <h3>Get /routine/:id</h3> //gets a single routine document
  
  <h3>DELETE /routine/:id</h3> //deletes a single routine from the database
  
  <h3>PATCH /routine/:id</h3> //updates a single routine... it modifies an existing route using the id 

<h3>Please feel free to contribute..reach out whenever you fee like contributing</h3>
 
<h1>CORS</h1> 
  <p>Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, 
  if the frontend and backend are at two different domains, we need CORS there.</p> </br>

 #How I fixed them
  <p>if you look at the package json I used the proxy and then added 
  the localhost address</p> </br>
 #bcrypt 
 <p>used for encryption of passwords such that even if the database is hacked
   hackers wont be able to get the user passwords</p> </br>

##Controllers
 <h6>So basically routes and controller work together its a way
 of splitting the code</h6>
 
 #Bugs
