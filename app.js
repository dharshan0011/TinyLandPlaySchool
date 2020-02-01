const express=require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/test",function(req,res){
    res.render("test.ejs");
});


app.listen(3000,function(){
    console.log("Listening to port 3000");
});

