import express from "express";

const app = express();

app.get('/',(req, res)=>{
    res.json ({message: "Welcome to My SHOPLEFT -API"})
})

app.get('/products',(req, res) =>{
    res.json ({message: "This is the GET product path"})
})
app.post('/products',(req, res) =>{
    res.json ({message: "This is the POST product path"})
})
app.patch('/products',(req, res) =>{
    res.json ({message: "This is the PATCH product path"})
})
app.put('/products',(req, res) =>{
    res.json ({message: "This is the PUT product path"})
})
app.delete('/products',(req, res) =>{
    res.json ({message: "This is the DELETE product path"})
})

app.get('/users',(req, res) =>{
    res.json ({message: "This is the GET user path"})
})
app.post('/users',(req, res) =>{
    res.json ({message: "This is the POST user path"})
})
app.patch('/users',(req, res) =>{
    res.json ({message: "This is the PATCH user path"})
})
app.put('/users',(req, res) =>{
    res.json ({message: "This is the PUT user path"})
})
app.delete('/users',(req, res) =>{
    res.json ({message: "This is the DELETE user path"})
})


app.listen(2008, () => {
    console.log('http://localhost:2008');
})