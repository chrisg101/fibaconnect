var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var url = "https://live.test.wh.geniussports.com/v2/basketball/read/36473?ak=2d12fafa5e4b7e1c2f0b102ba13bce19";

var request = require('request');
console.log('Connecting');
var data = [];


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/apiinfo', function (req, res) {
    apiURL = req.query.apiurl;
    apiKey = req.query.apiKey;
    matchID = req.query.matchID;

});


io.on('connection', function (socket) {
    socket.on('connectapi', function (msg) {
        console.log(msg);
        request({
            url: url,
            agentOptions: {
                rejectUnauthorized: false
            },
            encoding: null

        })
            .on('data', function (chunk) {
                let result = chunk.toString('utf8');
                io.emit('data', result);

                // console.log(buffer.toString('base64'));
            }).on('end', function () {
            //at this point data is an array of Buffers
            //so Buffer.concat() can make us a new Buffer
            //of all of them together
            var buffer = Buffer.concat(data);
            console.log(buffer.toString('base64'));
        });
    });
    // socket.on('chat message', function(msg){
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});