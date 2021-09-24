const http = require('http')

http.createServer((req,res)=>{
    if (req.url == '/') {
        res.send("hello node ~ yk-ddm")
    }
}).listen(3000,()=>{
	console.log('服务运行了');
});