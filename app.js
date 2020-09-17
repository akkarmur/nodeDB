const express = require('express')
const app = express()
const b=require('./login')
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/",require('./routes/index'))
 
app.get('/', (req, res)=> {

  
    console.log('out ='+b.sum(3,4))
    console.log('out ='+b.sub(3,4))
 
  res.send('Hello World')
  console.log('hii')

})
 
app.listen(3000)
