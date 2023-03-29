const express = require("express")

const app = express()


app.use(express.json())

function commonMiddleware(req, res,next){
    console.log("commonMiddleware called....")
    next()
}
app.use(commonMiddleware)

function specificMiddleware(req, res,next){
    console.log("specificMiddleware called....")
    next()
}
app.get('/', (req, res)=>{
    console.log("home page....")
    res.send("home page")
})

app.get('/student',specificMiddleware,(req, res)=>{
    console.log("student page....")
    res.send("student page")
})

app.get('/about',specificMiddleware,(req, res)=>{
    console.log("about page....")
    res.send("about page")
 })

 app.get('/contact',(req, res)=>{
    console.log("contact page....")
    res.send("contact page")
 })
app.listen(3040, ()=>{
    console.log("server running")
})