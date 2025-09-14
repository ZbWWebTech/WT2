const http = require("http");
const fs = require("fs");

function getVotes(request,response) {
    if (!fs.existsSync("votes.json")) {
        response.statusCode=404;
        response.end('{"status":"Not Found"}')
        return;
    }
    response.statusCode=200;
    response.end(fs.readFileSync("votes.json"));
}

function postVotes(request,response) {
    let data = "";
    request.on('readable',()=>{
        let chunk = request.read();
        if (chunk!= null) data = data + chunk;
        console.log("Chunk erhalten: "+chunk);
    });
    request.on('end',()=>{
        console.log("Data:"+data);
        fs.writeFileSync("votes.json",data);
        response.statusCode=200;
        response.end('{"status":"ok"}');
    });
}

function deleteVotes(request,response) {
    if (fs.existsSync("votes.json")) {
        fs.unlinkSync("votes.json");
    }
    response.statusCode=200;
    response.end('{"status":"ok"}');
}

function deleteVote(voteId, request,response) {
    console.log("Try to delete vote#"+voteId);
    if (!fs.existsSync("votes.json")) {
        response.statusCode=404;
        response.end('{"status":"Not Found"}')
        return;
    }

    // votes als json object laden
    let votes = JSON.parse(fs.readFileSync("votes.json"));

    // Prüfen, ob der Index erlaubt ist
    if (votes.length<voteId || voteId<1) {
        console.log("Wrong index");
        response.statusCode=404;
        response.end('{"status":"Not Found"}')
        return;
    }

    // Index entfernen
    votes.splice(voteId-1,1);

    // Datei wieder abspeichern
    fs.writeFileSync("votes.json",JSON.stringify(votes));
    response.statusCode=200;
    response.end('{"status":"ok"}');
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

    if (method == "POST" && url == "/votes") {
        postVotes(request, response);
        return;
    }

    if (method == "DELETE" && url == "/votes") {
        deleteVotes(request, response);
        return;
    }

    if (method == "DELETE" && url.startsWith("/votes/")) {
        deleteVote(parseInt(url.substring(7)),request, response);
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