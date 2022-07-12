import express from "express"
import APIManager from "./api/AIManager"


const app = express()
const port = 5300

app.use("/api", APIManager)





app.listen(port, ()=>{
    console.log(`server running at http://127.0.0.1:${port}`);
    
})