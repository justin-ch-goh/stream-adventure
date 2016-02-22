var through = require('through2');
var split = require('split');
var stream = through(write);
var counter = 0;

function write (buffer, encoding, next) {
    // play around with this.push(string + '\n'), removing .pipe(split())
    // split itself buffers chunks on newlines before you get them. we will get separate
    // events for each line even though all the data probably arrives on the same chunk.
    var string = buffer.toString();
    if (counter % 2 === 0) {
        this.push(string.toLowerCase() + '\n');
    } else {
        this.push(string.toUpperCase() + '\n');
    }
    counter += 1;
    next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);