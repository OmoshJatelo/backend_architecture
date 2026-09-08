const userService = require("../services/users.services.js");

//GET /api/users
const getAllUsers = (req,res) =>{
	const users = userService.getAllUsers();
	res.json(users);}

//GET /api/users/:id

const getUser = (req,res) =>{
	const id = req.params.id;
	const user = userService.getUser(id);
	
	if(!user){
	  return res.status(404).json({message:"user not found!"});
	 }
	 res.json(user);
};

//POST /api/users

const createUser =(req,res)=>{
	const userData =req.body;
	const newUser = userService.createUser(userData);
	return res.status(201).json(newUser);
};

//DELETE /api/users/:id

const deleteUser = (req,res) =>{
	const id = req.params.id;
	const deletedUser =userService.deleteUser(id);
	
	if(!deletedUser){
	   return res.status(404).json({message:"User not Found!"});
	}
	res.json({
	  message:"User deleted successfully",
	  user:deletedUser
	});
};

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	deleteUser
};
