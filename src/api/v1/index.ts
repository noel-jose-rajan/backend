import express from "express"
import Hero from "./hero/hero"
import User from "./user/user"
const api = express()




api.use("/hero" , Hero)
api.use("/user" , User)


export default api