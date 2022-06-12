const express= require('express');
const app= express();
const path= require('path');

app.listen(3031,()=>
console.log("Servidor encendido")
);

app.use(express.static('public'));

app.get("/home",(req,res)=>
res.sendFile(path.join(__dirname,"./views/home.html"))
);
app.get("/login",(req,res)=>
res.sendFile(path.join(__dirname,"./views/login.html"))
);
app.get("/register",(req,res)=>
res.sendFile(path.join(__dirname,"./views/register.html"))
);