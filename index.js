const express =require("express")
const mongoose =require("mongoose")
const dotenv =require("dotenv")
const helmet =require("helmet")
const morgan =require("morgan")
const userRoutes =require("./Routes/users.js")
const userAuth =require("./Routes/auth.js")


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app=express()
//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRoutes);
app.use("/api/auth",userAuth);
dotenv.config();



// mongodb connection
mongoose.connect("mongodb+srv://kc_alish:<1jackie$2rukh>@cluster0.o31dc.mongodb.net/social?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true},()=>{
    console.log('connected')
})










app.listen(8800,()=>{
    console.log("backend server started")

})