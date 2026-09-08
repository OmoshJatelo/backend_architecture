let users =[
	{
	 id:1,
	 name:"Omosh",
	 email:"omosh@email.com"
	},
	{
	 id:2,
	 name:"Jatelo",
	 email:"jatelo@gmail.com"
	}
];

const getAllUsers =()=>{return users;};

const getUser = (id) => {
  return users.find((user) => user.id === Number(id));
};

const createUser = (userData) => {
	const newUser ={
		id:users.length+1,
		name:userData.name,
		email:userData.email
	};
	users.push(newUser);
	return newUser;
};

const deleteUser =(id) =>{
	const index = users.findIndex(user =>user.id===Number(id));
	if(index===-1) return null;
	const userToDelete = users[index];
	users.splice(index, 1);
	return userToDelete;
};

module.exports ={
 getAllUsers,
 getUser,
 createUser,
 deleteUser
};
