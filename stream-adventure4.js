var through = require('through2');
var stream = through(write);

function write (buffer, encoding, next) {
    // learnt syntax from: https://nodesource.com/blog/understanding-object-streams/
    // after googling "how to use through2"
    var string = buffer.toString();
    this.push(string.toUpperCase());
    next();
}

process.stdin.pipe(stream).pipe(process.stdout);