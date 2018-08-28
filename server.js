/*server.js*/
const http = require('http');

var url = "https://live.test.wh.geniussports.com/v2/basketball/read/36473?ak=2d12fafa5e4b7e1c2f0b102ba13bce19"

var request = require('request');
console.log('Connecting');
    var data = [];

request({
  url: url,
  agentOptions: {
    rejectUnauthorized: false
  },
    encoding: null

})
    .on('data', function(chunk) {
        let result = chunk.toString('utf8');
        console.log(result);
        // console.log(buffer.toString('base64'));
    }).on('end', function() {
        //at this point data is an array of Buffers
        //so Buffer.concat() can make us a new Buffer
        //of all of them together
        var buffer = Buffer.concat(data);
        console.log(buffer.toString('base64'));
    });
// .on('data', data => {
//       let hey = [];
//       hey.push(Buffer.from(data, 'binary'));
//
//       console.log(hey);
//       // req.pause();
//     });





// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, function() {
//   console.log('Server running at http://'+ hostname + ':' + port + '/');
// });