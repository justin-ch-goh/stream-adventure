var request = require('request');
var r = request.post('http://localhost:8099');

process.stdin.pipe(r);

r.on('data', function(data) {
    process.stdout.write(data);
});
