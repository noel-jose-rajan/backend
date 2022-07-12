import mongo from "mongoose"

const HeroSchema = new mongo.Schema({

    name : {
        type : String,
        required: true
    },
    
    phone : {
        type : String,
        required: true
    },
    
    email : {
        type : String,
        required: true
    },

    password : {
        type : String,
        required: true
    },

    address : {
        type : String,
        required: true
    },

    profile : {
        type : String,
        required: false
    },


    active : {
        type : Boolean,
        default : false
    },



})

const Hero =  mongo.model("Hero", HeroSchema )

export default Hero