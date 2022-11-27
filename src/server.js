const express=require('express')// hi hello
const app=express();
const cors=require('cors');
const url=require('url');
const MongoCLient=require('mongodb').MongoClient;
// const dbconn=require('./db')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/signUp',async(req,res)=>{
    console.log("posted")        
    const {username,email,password,confirmpass}=req.body
    console.log(req.body)
    console.log("user:",username,email,password,confirmpass)
    const user=new Object({
        username,
        email,
        password
    })
    MongoCLient.connect('mongodb://localhost:27017',(err,dbo)=>{
        if(err) throw err;
        var coll=dbo.db('admin')
        user_coll=coll.collection('user_auth')
        var find=true
        user_coll.findOne({email:email},(err,docs)=>{
            if(err) throw err;
            if(docs){
                res.send({message:"already registered email",user:user})

            }
            else{
                user_coll.insertOne(user,(err,docs)=>{
                    if(err) throw err;
                    console.log(docs+" appended");
                })}
        
            res.end()
            })
        
       
    })
})  

app.post('/login',async(req,res)=>{
    console.log("login entered")        
    const {email,password}=req.body
    console.log(req.body)
    console.log("user:",email,password)
    const user=req.body
    var msg;
    MongoCLient.connect('mongodb://localhost:27017',(err,dbo)=>{
        if(err) throw err;
        var coll=dbo.db('admin')
        user_coll=coll.collection('user_auth')
        var find=true
       
        user_coll.findOne({email:email},(err,docs)=>{
            if(err) throw err;
            if(docs){
                if(docs.password===password){
                console.log('login successfull')
                msg="login successfull"}
                else{
                    console.log('invalid password')
                    msg="invalid password"
                }
            }
            else{
                console.log('NO USERS FOUND');
                msg="NO USERS FOUND";
                
                }
            
            if(msg!=undefined){
                    console.log(msg)
                    res.send({message:msg,user});}   
                    res.end() 
            })
            
            })  
           
            })
            
    

        // let obj=body.split("&");
    // console.log(req.body);

app.get('/cardet',async(req,res)=>{
    console.log("inside car details")
    var emp={}
    MongoCLient.connect('mongodb://localhost:27017',(err,dbo)=>{
        if(err) throw err;
        car_db=dbo.db('caar_list')
        car_coll=car_db.collection('car_details')
        car_coll.find({}).toArray((err,docs)=>{ 
        if(err) throw err;
        console.log(docs)
         res.send(docs)})
})
})
app.post('/FullUser',async(req,res)=>{
    console.log("inside users booking details");
    const fulluser=req.body;
    MongoCLient.connect('mongodb://localhost:27017',(err,dbo)=>{
        if(err) throw err;
        full_db=dbo.db('userbook')
        full_coll=full_db.collection('coll_book');
        full_coll.findOne(fulluser,(err,docs)=>{
            if(err) throw err;
            if(docs){
                console.log("already booked");
            }
            else[
                full_coll.insertOne(fulluser,(err,docs)=>{
                    if(err) throw err;
                    console.log(docs+" appended");
                })
            ]
        })
    })
})
app.listen(5000,()=>console.log("server is listening at 5000"));