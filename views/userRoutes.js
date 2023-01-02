const express = require();
const router = express.Router();
const {body,validationResult} = require("express-validator")
const{userregister,getAllUsers,singleUser,isAdmin,updateUser,deleteUser} = require("../controller/userController")
const userSchema = require("../model/userModel")

router.post("/register", body("email").isEmail() , userregister)

router.get("/users" , getAllUsers)

router.get("/users/:id" ,singleUser )

router.put("/users/:adminId:/userId" ,isAdmin,updateUser)

router.delete("/users/:adminId:/userId" , isAdmin,deleteUser)


module.exports = router;
