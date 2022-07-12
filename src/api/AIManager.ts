import express from "express"
import v1 from "./v1/index"


const APIManager = express()


APIManager.use("/v1", v1)



export default APIManager



