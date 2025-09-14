const http = require("http");
const fs = require("fs");

function getVotes(request,response) {
    if (!fs.existsSync("votes.json")) {
        response.statusCode=404;
        response.end('{"status":"Not Found"}')
        return;
    }
    response.statusCode=501;
    response.end(fs.readFileSync("votes.json"));
}

const server = http.createServer((request,response)=>{
    let url = request.url;
    let method = request.method;
    console.log("Request erhalten: "+method+" "+url);
    response.setHeader("Content-Type","application/json");

    if (method == "GET" && url == "/votes") {
        getVotes(request, response);
        return;
    }

    response.statusCode=400;
    response.end('{"status":"Unknown request"}');
});

const hostname = "localhost";
const port = 5000;
server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});