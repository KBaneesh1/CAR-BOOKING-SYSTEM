const mongoose=require('mongoose');
const urlparse=require('url-parser');
function connectdb(){
    mongoose.connect("mongodb://localhost:27017",{useUnifiedTopology:true,useNewUrlParser:true})
    const connection=mongoose.connection
    connection.on('connected',(err,dbo)=>{
        if(err) console.log('error occured');
        var db=dbo.db('admin')
        db.collection('user_auth').insert
    })
   

}

connectdb()

module.exports=mongoose