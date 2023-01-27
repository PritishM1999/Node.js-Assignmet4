const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

app.post("/add", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    let sum = 0;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric",
        })
    }

    else if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    
    res.status(200).json({
        status: "Sucess",
        message: "Inputs must be provided",
        sum : num1 + num2,
    })
    
})

app.post("/sub", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    let sum = 0;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric",
        })
    }

    else if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    
    res.status(200).json({
        status: "Sucess",
        message: "Inputs must be provided",
        sum : num1 - num2,
    })
    
})


app.post("/multiply", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    let sum = 0;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be numeric",
        })
    }

    else if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }
    
    res.status(200).json({
        status: "Sucess",
        message: "Inputs must be provided",
        sum : num1 * num2,
    })
    
})

app.post("/divide", (req, res) => {
    const num1= req.body.num1;
    const num2= req.body.num2;
    let sum = 0;
    // Both inputs must be numbers
    if(isNaN(num1) || isNaN(num1)){
        return res.status(400).json({
            status: "Error",
            message: "Invalid data types",
        })
    }

    else if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "Error",
            message: "Inputs must be provided"
        })
    }

    else if(num2 === 0){
        return res.status(400).json({
            status: "Error",
            message: "Cannot divide by zero"
        })
    }

    else if(num1 >= 10000000 || num2 >= 1000000){
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }


    
    // 
    res.status(200).json({
        status: "Sucess",
        message: "Inputs must be provided",
        sum : num1 / num2,
    })
    
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;









// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// // your code goes here

// app.get("./home",(req, res) =>{
//     res.send("Hello World!");
// })



// app.get("./add",(req, res) =>{
//     console.log(req.query);
//     res.json({
 
//           status: res.query.status? res.query.status:  200 | 300 | 500,
//           message: res.query.message? res.query.message: "“the sum of given two numbers”", 
//           sum: res.query.sum? res.query.sum: num1+num2 }
//     )
// })

// app.get("*", (req, res) => {

//     res.status(404).send("PAGE IS NOT FOUND");
// })

// app.listen(3000, () => console.log(`App listening on port ${3000}!`))

// module.exports = app;