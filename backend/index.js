const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
app.get('/',(req,res) => {
    res.json('Hello World');
});

//Signup a new user
app.post("/signup",(req,res) => {
    const {name,email,password} = req.body;
    console.log({name,email,password});
});
app.listen(3000,() => {
    console.log('Server is listining at port 3000');
})