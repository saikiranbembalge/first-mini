// server using Node.js
import express from "express"

const app = express()
app.get("/",(req,res)=>{
  res.json({message: "Smooth"})
}
app.listen(3000, ()=> console.log(`Server running on port ${port)`);
