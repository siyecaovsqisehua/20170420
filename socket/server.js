// 1.引入模块
var http = require('http');
var fs = require('fs');

// 2.创建服务器
var server = http.createServer(function(req, res) {
    // 读取index.html
    fs.readFile('index.html', function(err, data) {
        var str = data.toString();

        res.end(str);
    })
})

server.listen(3000);

// 引入socke.io模块
var io = require('socket.io')(server);

// 先做连接(connection)
// socket:就是当前的socket：IP地址和端口
io.on('connection', function(socket) {
    socket.on('sendMsg', function(data) {
        console.log(data);
        // 服务器端手动触发客户端的news事件
        io.emit('news', data);
    });
})
