const http = require('http')
const fs = require('fs')

function setCorsHeaders(resp) {
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

const server = http.createServer((req, resp) => {
    setCorsHeaders(resp)

    if (req.method === 'OPTIONS') {
        resp.statusCode = 204
        resp.end()
        return
    }

    if(req.url == "/articles") {
        console.log("Articles requested")
        const articles = fs.readFileSync("store/articles.json", "utf8")
        resp.statusCode = 200
        resp.setHeader('Content-Type', 'application/json')
        resp.end(articles)
        return
    } 
    
    if(req.url.startsWith("/post/")) {
        const article_id = req.url.replace("/post/", "")
        const articles = JSON.parse(fs.readFileSync("store/articles.json", "utf8"))

        // Artikel aus dem Array entfernen
        const newArticles = articles.filter(a => a.Id != article_id);
        let data="";
        req.on('readable',()=>{
            let chunk = req.read();
            if (chunk!= null) data = data + chunk;
            console.log("Chunk erhalten: "+chunk);
        });
        req.on('end',()=>{
            console.log("Data:"+data);
            const newArticle = JSON.parse(data)
            newArticle.Id = article_id
            console.log("New Article:"+JSON.stringify(newArticle))
            newArticles.push(newArticle)
            fs.writeFileSync("store/articles.json", JSON.stringify(newArticles, null, 4), "utf8");
            resp.statusCode = 200
            resp.end(JSON.stringify({"status":"ok"}))
        });
        return
    }

    resp.statusCode = 404
    resp.end()
})

server.listen(3000, "localhost", () => console.log("server gestartet, Port 3000"))