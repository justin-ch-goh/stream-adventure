var http = require('http');

var through = require('through2');
var stream = through(write);

var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        // hacked this solution together from stream-adventure5 and learnyounode11
        req.on('data', function (data) {
            res.write(data.toString().toUpperCase());
        });
        res.writeHead(200);
        req.on('end', function() {
            res.end();
        });
    };
});

server.listen(process.argv[2]);


function write (buffer, encoding, next) {
    var string = buffer.toString();
    this.push(string.toUpperCase() + '\n');
    next();
}