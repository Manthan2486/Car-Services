const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const validator=require("validator")
app.use(cors());
app.use(express.json())
const mysql=require("mysql2")
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'csr'
});
db.connect((err)=>{ 
    if(err){
        console.log(err)
    }else{
        console.log("connected to db")
    } 
});
app.use(express.json());
app.get('/',(req,res) => {
    res.json('Hello World');
});

//Signup a new user
app.post("/signup",async (req,res) => {
    const {name,email,password} = req.body;
    if(name===''){
        res.json({status:false,msg:'name is required'})
    }else if(!validator.isEmail(email)){
        res.json({status:false,msg:"email is invalid"})
    }else if(password===''){
        res.json({status:false,msg:"password is not accepted"})
    }else{
        const pd=await bcrypt.hash(password,10)
        const sql="insert into user values('"+name+"','"+email+"','"+pd+"')";
        db.query(sql,(err,result)=>{
            if(err){    
                console.log(err)
                res.json({status:false,msg:"something went wrong try again..!"})
            }else{
                console.log("user inserted...!")
                res.json({status:true})
            }
        })
    }
});
app.post("/login",async (req,res) => {
    const {email,password} = req.body;
    if(!validator.isEmail(email)){
        res.json({status:false,msg:"email is invalid"})
    }else if(password==null){
        res.json({status:false,msg:"password is not accepted"})
    }else{
        const sql="select * from user where email='"+email+"'";
        db.query(sql,async (err,result)=>{
            if(err){    
                console.log(err)
                return res.json({status:false,msg:"user not found"})
            }else if(result.length===0){
                return res.json({status:false,msg:"user not found"})
            }else{
                if(await bcrypt.compare(password,result[0].password)){
                    let data={status:true,data:{name:result[0].name,email:email}}
                    return res.json(data)
                }else{
                    return res.json({status:false,msg:"password is incorrect"})
                }
            }
        })
    }
    console.log({email,password});
});
app.listen(3000,() => {
    console.log('Server is listining at port 3000');
})