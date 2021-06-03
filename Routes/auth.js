const router  = require("express").Router()
const User=  require ("../models/Users.js")





router.get("/register", async (req,res)=>{

    const user = await new User({
        username: "alish",
        email:"kc.alish107@gmail.com",
        password: "password"
    })
    await user.save()
    res.send("ok")
    res.send("ok")
 })


 module.exports= router