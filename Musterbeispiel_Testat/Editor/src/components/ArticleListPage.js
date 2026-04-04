import React from "react";
import ArticleController from "./ArticleController";
import ArticleLoadingIndicator from "./ArticleLoadingIndicator";
import { fetchJson, sendJson } from "../backend";

export default function ArticleListPage () {
  const [allArticles, setAllArticles] = React.useState(null);

  async function loadArticles() {
    const articles = await fetchJson("/articles");
    setAllArticles(articles);
  }

  async function saveArticles(articles) {
    await sendJson("POST", "/articles", articles);
  }

  React.useEffect(() => {
    loadArticles();
  }, []);

  if (!allArticles) {
    return <ArticleLoadingIndicator />;
  }

  return <ArticleController articles={allArticles} onSave={saveArticles} />;
}