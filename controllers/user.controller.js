const userService = require("../services/users.services.js");

//GET /api/users
const getAllUsers = async(req,res) =>{
	const users = await userService.getAllUsers();
	res.json(users);}

//GET /api/users/:id

const getUser = async(req,res) =>{
	const id = req.params.id;
	const user = await userService.getUser(id);
	
	if(!user){
	  return res.status(404).json({message:"user not found!"});
	 }
	 res.json(user);
};

//POST /api/users

const createUser = async(req,res)=>{
	const userData =req.body;
	const newUser = await userService.createUser(userData);
	return res.status(201).json(newUser);
};

//DELETE /api/users/:id

const deleteUser = async (req,res) =>{
	const id = req.params.id;
	const deletedUser =await userService.deleteUser(id);
	
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
