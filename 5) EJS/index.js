const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname , 'public')))

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/profile/:username/:age',(req,res)=>{
    res.send(`<h1>Welcome ${req.params.username} of age ${req.params.age}</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
