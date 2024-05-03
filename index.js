// const express = require('express'); //express module is imported
// const app = express(); // to call express function

// app.use(express.static('public'))
// app.listen(4000,()=>{
// console.log("Server is Started");
// })

const express = require('express');
const app = express();

app.use(express.static('public'))
app.listen(4000,()=>{
    console.log("server is started")
})