import express from "express"

const auth = express()

auth.post("/signup", (req, res)=>{})
auth.post("/reverify", (req, res)=>{})
auth.get("/verify", (req, res)=>{})

auth.post("/signin", (req, res)=>{})
auth.post("/forgotpassword", (req, res)=>{})




export default auth