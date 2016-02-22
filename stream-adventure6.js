var concat = require('concat-stream');
var string = "";

process.stdin.pipe(concat(function (buffer) {
    // understanding concat-stream: https://github.com/nodeschool/discussions/issues/388
    //
    // "This is why the concat stream is a write-only stream. 
    // You pipe a readable stream into concat and then your callback is called
    // once concat is finished reading and concatenating all the data."
    // 
    // DON'T TRY TO PIPE IT TO STDOUT
    //
    // string reversal: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
    string = buffer.toString().split('').reverse().join('');
    console.log(string);
}));

