const http = require("http");

const server = http.createServer((request,response)=>{
    let url = request.url;
    let method = request.method;
    console.log("Request erhalten: "+method+" "+url);

    response.setHeader("Content-Type","application/json");
    response.statusCode=400;
    response.end('{"status":"Unknown request"}');
});

const hostname = "localhost";
const port = 5000;
server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});