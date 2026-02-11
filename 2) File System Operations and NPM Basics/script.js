const fs = require('node:fs');
const http = require('http')


const server = http.createServer(function(req,res){
    res.send("hello world")
})

server.listen(9000)



fs.writeFile("text.txt", "hey i am Jivan Sharma, ", function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("done.")
    }
})

fs.appendFile("text.txt", " and i am a developer", function (err) {
    if (err) console.log(err)
    else console.log("done")
})

fs.rename("text.txt", "my.txt", function (err) {
    if (err) console.log(err)
    else console.log("Rename is done done")
})

fs.unlink("my.txt", function (err) {
    if (err) console.log(err)
    else console.log("unlink is done done")
})

// fs.rmdir('./copy', { recursive: true }, function (err) {
//     if (err) console.log(err)
//     else console.log("rmdir is done done")
// }) 

fs.readFile("./my.txt",function(err, data){
    if(err) throw err
    console.log(data)
})