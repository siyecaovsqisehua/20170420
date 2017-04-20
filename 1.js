var fs = require('fs');

// 异步读取
fs.readFile('1.html', function(err, data) {
    console.log(111); // 后执行
})

console.log(222); // 先执行


// 同步读取
var str = fs.readfileSync('1.html');
