const express = require('express')
const app = express()
const path = require("path");
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello Render Express application!")
})


app.get('/test', (req, res) => {
    res.send([{
        id: '1',
        name: 'aashay',
        email: 'aashay.test@gmail.com',
    },
    {
        id: '2',
        name: 'test2',
        email: 'test2.test@gmail.com',
    }
        , {
        id: '3',
        name: 'test3',
        email: 'test3.test@gmail.com',
    }])
})

app.get('/getimage', (req, res) => {
    console.log("static images pathname: ", path.join(__dirname + '/public/image1.png'))
    res.sendFile(path.join(__dirname + '/public/image1.png'))
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("App running on Port :" + PORT)
})