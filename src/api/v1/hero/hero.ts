import express from "express"
import auth from "./auth"
const hero = express()

hero.use("/auth",auth)

hero.get("/", (req, res)=>{
    res.send("this is hero route")
})




export default hero