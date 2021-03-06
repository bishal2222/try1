const mongoose = require("mongoose")




const UserSchema = new mongoose.Schema({
    username:{

        type: String,
        require: true,
        min:3,
        max:20,
        unique:true
    }

    ,
    email:{

        type: String,
        require: true,

        max:50,
        unique:true
    },
    password:{

        type: String,
        require: true,


    },
    profilepicture:{

        type: String,
        default:""
    },
    coverepicture:{

        type: String,
        default:""
    },
    followers:{

        type: Array,
        default: []
    },
    following:{
        type: Array,
        default:[]
    },
     isAdmin :{
        type: Boolean,
        default : false
    }

})


module.exports=mongoose.model("User",UserSchema)