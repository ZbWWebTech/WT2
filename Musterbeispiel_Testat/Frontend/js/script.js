// variante über statisches json file
const url = "json/articles.json";

// variante über backend node.js
// const url = "http://localhost:5000/articles";


function loadArticles() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data;
        const articlesContainer = document.getElementById("news-container");
        articles.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.innerHTML = `
                <h2>${article.Titel}</h2>
                <p>${article.Summary}</p>
                <a href="details.html?id=${article.Id}" class="btn">Mehr Lesen...</a>
            `;
            articleElement.classList.add("news-article");
            articlesContainer.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.error("Fehler beim Laden der Artikel:", error);
    });
}

function loadArticle() {
    const articleId = new URLSearchParams(window.location.search).get("id");
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data;
        const article = articles.find(article => article.Id == articleId);
        const articleElement = document.getElementById("article");
        articleElement.innerHTML = `
            <header>
                <h1>${article.Titel}</h1>
            </header>
            <section>
                <p>${article.Text}</p>
            </section>
        `;
    })
    .catch(error => {
        console.error("Fehler beim Laden des Artikels:", error);
    });
}