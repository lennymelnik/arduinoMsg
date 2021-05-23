const express = require('express');
const cors = require('cors')
const app = express();
var fs = require('fs')
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) =>{
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    next()

    
})
app.post('/send-msg', async (req, res) => {
    var data = req.body.msg
    var to = req.body.to

    fs.writeFile(to+".txt", data, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
    res.send("Done")
    });

})
app.get('/msgstef', async (req, res) => {
    fs.readFile('stef.txt', 'utf8', function(err, data) {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/msglenny', async (req, res) => {
    fs.readFile('lenny.txt', 'utf8', function(err, data) {
        if (err) throw err;
        res.send(data)
    })

})
app.listen(8083)