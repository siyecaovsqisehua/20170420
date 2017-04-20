var app = require('http').createServer(handler);

var fs = require('fs');

app.listen(3000);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function(err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

var io = require('socket.io')(app);
io.on('connection', function(socket) {
    socket.on('sendMsg', function(data) {
        io.emit('news', data);
    });
});
