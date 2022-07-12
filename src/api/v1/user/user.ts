import express from "express"
import auth from "./auth"
const user = express()


user.use("/auth",auth)

user.get("/", (req, res)=>{
    res.send("this is user route")
})





export default user