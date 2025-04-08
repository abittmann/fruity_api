const express = require("express"); //importing express
const app = express()
const fruits = require("./routes /fruits") //importing the fruits route

 //this is the route for the fruits. This is where we are getting the data from.
//assigning express to the app

// you can choose any port number above 1024. You have to close the port when finished or use a new one.
app.get('/', (req, res) => {
  res.send('Hello Fruity') 
})

 
app.use(express.json()) //this is to parse the json data.    
app.use('/fruits', fruits)
    //this is the root route.







    




//http://localhost:3000/ to see this. default ip for local computers 127.0.0.1:3000 only works for me. This is why they created docker. 

console.log("Hello, World hello hello Alex !");

module.exports = app //exporting the app so that we can use it in the test file.