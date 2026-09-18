
const User =require("../modells/user.modells.js");


const getAllUsers = async()=>{
	return await User.find();
};

const getUser = async(id) => {
  return await User.findById(id);
};

const createUser = async(userData) => {
	return await User.create({
		
		name:userData.name,
		email:userData.email
	});

};

const deleteUser =async(id) =>{
	return await User.findByIdAndDelete(id);
};

module.exports ={
 getAllUsers,
 getUser,
 createUser,
 deleteUser
};
