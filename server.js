const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

//added body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//a  route point that returns a 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//a  route point that returns a message
app.get('/datarep',(req,res)=>{
    res.send('Welcome to Data Repsenstation & Quering')
})

//a route that returns a html page
app.get('/test',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

//a route that returns a firsname and lastname with hello
app.get('/name',(req,res)=>{
    console.log(req.query.lname);
    res.send("Hello " + req.query.fname + " " + req.query.lname);
})

//a route that returns a firsname and lastname with hello from post method
//route accepts the name variable as a body encoded POST variable
app.post('/name',(req,res)=>{
    console.log(req.body);
    res.send("Hello from post " + req.body.fname  + " "  + req.body.lname);
})

//a  route point that will take an argument form the url path and return hello “argument”
app.get('/hello/:name',(req,res)=>{
    console.log(req.params.name);
    res.send("Hello" + req.params.name);
})

//a route point that will return the following json data:
app.get('/api/:books',(req,res)=>{
    const symbols =
        [
            
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
    ]
    res.json({
        books:symbols
    })
})

//a server application that listens on localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})