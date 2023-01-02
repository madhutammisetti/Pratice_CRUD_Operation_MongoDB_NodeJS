/**Create a post API where you need to store user details
name ,e-mail, password , phone number.
type of name is string
e-mail should be in e-mail format
password should be minimum length 5 
phone number should be number
isadmin  men should be bollean 

all fields must required

// http://localhost:8080/users     

*/


//2)  create 2 get requests 1st to get all the users

//getAllUsers - user api
//getsingleuser - http://localhost:8080/users/:id



//3) create a put route to update user!! this can only be done by the admin
// updateUser  - http://localhost:8080/users/:adminId/:userId


//4) create a delete route to delete user!! this can only be done by the admin
// deleteUser  - http://localhost:8080/users/:adminIdId/:userId




const express = require("express")
const app = express();
const mongoose  = require("mongoose")
const userRoutes = require("./views/userRoutes")

app.use(express.json())

app.use(userRoutes)

const url ="mongodb+srv://madhu:0aCceLw9@cluster0.g1cyrgw.mongodb.net/crud-mongo?retryWrites=true&w=majority"

mongoose.connect(url).then( ()=>{
    console.log("DB Connected")
}).catch(err=>{
    console.log(err)
})

app.listen("8080",()=>{
    console.log("server running on port 8080")
})

