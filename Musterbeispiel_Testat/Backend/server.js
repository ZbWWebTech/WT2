const http = require("http");
const fs = require("fs");

function getArticles(request,response) {
    if (!fs.existsSync("store/articles.json")) {
        response.statusCode=404;
        response.end('{"status":"Not Found"}')
        return;
    }
    response.statusCode=200;
    response.end(fs.readFileSync("store/articles.json"));
}

function postArticles(request,response) {
    let data = "";
    request.on('readable',()=>{
        let chunk = request.read();
        if (chunk!= null) data = data + chunk;
        console.log("Chunk erhalten: "+chunk);
    });
    request.on('end',()=>{
        console.log("Data:"+data);
        fs.writeFileSync("store/articles.json",data);
        response.statusCode=200;
        response.end('{"status":"ok"}');
    });
}

function deleteArticles(request,response) {
    if (fs.existsSync("store/articles.json")) {
        fs.unlinkSync("store/articles.json");
    }
    response.statusCode=200;
    response.end('{"status":"ok"}');
}

function deleteArticle(articleId, request,response) {
    console.log("Try to delete vote#"+voteId);
    if (!fs.existsSync("store/articles.json")) {
        response.statusCode=404;
        response.end('{"status":"Not Found"}')
        return;
    }

    // votes als json object laden
    let votes = JSON.parse(fs.readFileSync("store/articles.json"));

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
    fs.writeFileSync("store/articles.json",JSON.stringify(votes));
    response.statusCode=200;
    response.end('{"status":"ok"}');
}

const server = http.createServer((request,response)=>{
    let url = request.url;
    let method = request.method;
    console.log("Request erhalten: "+method+" "+url);
    
    // CORS-Header hinzufügen
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.setHeader("Content-Type","application/json");
    
    // OPTIONS-Request für Preflight handhaben
    if (method === "OPTIONS") {
        response.statusCode = 200;
        response.end();
        return;
    }

    if (method == "GET" && url == "/articles") {
        getArticles(request, response);
        return;
    }

    if (method == "POST" && url == "/articles") {
        postArticles(request, response);
        return;
    }

    if (method == "DELETE" && url == "/articles") {
        deleteArticles(request, response);
        return;
    }

    if (method == "DELETE" && url.startsWith("/articles/")) {
        deleteArticle(parseInt(url.substring(10)),request, response);
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