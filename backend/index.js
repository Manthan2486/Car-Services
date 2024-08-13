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
        const sql="insert into user values('"+name+"','"+email+"','"+pd+"','clint')";
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
                    let data={status:true,data:{name:result[0].name,email:email,usertype:result[0].usertype}}
                    return res.json(data)
                }else{
                    return res.json({status:false,msg:"password is incorrect"})
                }
            }
        })
    }
    console.log({email,password});
});
//new booking
app.post("/bookservice",async(req,res)=>{
    const {appointment_date,car_type,registration_number,car_model, types_of_services, name,phone_number,em,address,city,state,zip_code}=req.body;
    let tos=JSON.stringify(types_of_services);
    const sql = "INSERT INTO appointments (appointment_date, car_type, registration_number, car_model, name, phone_number, email, address, city, state, zip_code, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [appointment_date, car_type, registration_number, car_model, name, phone_number, em, address, city, state, zip_code, "Pending"];
    db.query(sql,values,(err,result)=>{
        if(err){
            console.log(err);
            res.json({status:false,msg:"something want wrong please try again later"})
        }else{
            const appointmentId = result.insertId;
            const serviceValues = types_of_services.map(service => [appointmentId, service, "Pending"]);
            const sqlServices = "INSERT INTO appointment_services (appointment_id, service_name, status) VALUES ?";
            db.query(sqlServices, [serviceValues], (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({ status: false, msg: "Error inserting services" });
                } else {
                    console.log("Inserted services");
                    res.json({ status: true, msg: "Booking successfully" });
                }
            });
        }
    })
    console.log({appointment_date,car_type,registration_number,car_model, tos, name,phone_number,em,address,city,state,zip_code});
})
app.get("/getbookingsbyuser",(req,res)=>{
    const email=req.query.email;
    const sql = `
        SELECT a.id AS appointment_id, a.appointment_date, a.car_type, a.registration_number, a.car_model,
               a.name, a.phone_number, a.email, a.address, a.city, a.state, a.zip_code, s.service_name, s.status
        FROM appointments a
        LEFT JOIN appointment_services s ON a.id = s.appointment_id
        WHERE a.email = ?`;
    db.query(sql,[email],(err,result)=>{
        if(err){
            console.log(err)
            res.json({status:false,msg:"something went wrong...!"})
        }else if(result.length === 0){
            res.json({status:true,msg:"no bookings have done"})
        }else{
            const bookingsMap = {};
            result.forEach(row => {
                if (!bookingsMap[row.appointment_id]) {
                    bookingsMap[row.appointment_id] = {
                        appointment_id: row.appointment_id,
                        appointment_date: row.appointment_date,
                        car_type: row.car_type,
                        registration_number: row.registration_number,
                        car_model: row.car_model,
                        name: row.name,
                        phone_number: row.phone_number,
                        email: row.email,
                        address: row.address,
                        city: row.city,
                        state: row.state,
                        zip_code: row.zip_code,
                        services: []
                    };
                }
                bookingsMap[row.appointment_id].services.push({
                    service_name: row.service_name,
                    status: row.status
                });
            });
            const bookings = Object.values(bookingsMap);
            res.json({ status: true, data: bookings });
        }   
    })
})

app.get("/getallappointments", (req, res) => {
    const sql = `
        SELECT a.id AS appointment_id, a.appointment_date, a.car_type, a.registration_number, a.car_model,
               a.name, a.phone_number, a.email, a.address, a.city, a.state, a.zip_code,
               s.service_name, s.status
        FROM appointments a
        LEFT JOIN appointment_services s ON a.id = s.appointment_id`;
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.json({ status: false, msg: "Something went wrong!" });
        } else if (results.length === 0) {
            res.json({ status: true, msg: "No appointments found" });
        } else {
            const bookingsMap = {};
            results.forEach(row => {
                if (!bookingsMap[row.appointment_id]) {
                    bookingsMap[row.appointment_id] = {
                        appointment_id: row.appointment_id,
                        appointment_date: row.appointment_date,
                        car_type: row.car_type,
                        registration_number: row.registration_number,
                        car_model: row.car_model,
                        name: row.name,
                        phone_number: row.phone_number,
                        email: row.email,
                        address: row.address,
                        city: row.city,
                        state: row.state,
                        zip_code: row.zip_code,
                        services: []
                    };
                }
                bookingsMap[row.appointment_id].services.push({
                    service_name: row.service_name,
                    status: row.status
                });
            });
            const bookings = Object.values(bookingsMap);
            res.json({ status: true, data: bookings });
        }
    });
});
app.post("/updateservicestatus", (req, res) => {
    const { appointment_id, service_name, new_status } = req.body;
    const sql = `
        UPDATE appointment_services
        SET status = ?
        WHERE appointment_id = ? AND service_name = ?`;
    db.query(sql, [new_status, appointment_id, service_name], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ status: false, msg: "Failed to update service status" });
        } else {
            res.json({ status: true, msg: "Service status updated successfully" });
        }
    });
});
app.listen(3000,() => {
    console.log('Server is listining at port 3000');
})