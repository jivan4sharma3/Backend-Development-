const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Middleware function
app.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});


app.get('/profile',(req,res)=>{
    res.send('This is profile page')  ;
})

// Error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
