let express = require('express');
let dotenv = require('dotenv')
dotenv.config()
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
//app.use(express.static())
//app.use(express.static(__dirname + '/public'));

// app.get("/json",(req,res,next)=>{
// console.log(`${req.method} ${req.path} - ${req.ip}`)
// next();

// })
app.get("/user",(req,res,next)=>{
    console.log("user is here")
    next();
    
    })
    

// app.get("/json",(req,res,next)=>{
//     let c = process.env.MESSAGE_STYLE
// let r ={"message": "Hello json"} 
//    if(c=="uppercase"){
//   r = r.message.toUpperCase()

//        return res.json(r)

//     }
//     else{
//         return res.json(r)
//     }

//return res.json({"message":process.env.MESSAGE_STYLE})


//})


// app.get("/now",(req,res,next)=>{
//     req.maha= Date()
//     next()
//   },(req,res,next)=>{

//     return res.json({time:req.maha})
//   }
// )
  app.get("/:name",(req,res,next)=>{
    
   console.log(req.query)
    return res.json({name:req.query.first + " "+req.query.last})
  })
  app.post("/:name",(req,res,next)=>{
    return res.json({name:req.query.first + " "+req.query.last})
  })
































 module.exports = app;
