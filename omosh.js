const express = require('express');
const  cors = require("cors");

//create express app
const app  = express();

//middleware
app.use(express.json());
app.use(cors());
//register a route for users
const userRoute = require("./routes/user.routes.js");

app.use('/api/users',userRoute);

app.get("/",(req,res)=>{
	res.send("App running");})
const  PORT =3000;

app.listen(PORT,()=>console.log(`srver running on port ${PORT}`))
