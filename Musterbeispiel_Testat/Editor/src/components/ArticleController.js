import React from "react";
import ArticleList from "./ArticleList";
import InactiveArticleComposer from "./InactiveArticleComposer";
import ArticleComposer from "./ArticleComposer";

export default function ArticleController({ articles, onSave }) {
  const [allArticles, setAllArticles] = React.useState(articles);
  const [currentArticleId, setCurrentArticleId] = React.useState(null);
  const [articleComposerActive, setArticleComposerActive] = React.useState(false);

  function setCurrentArticle(article) {
    closeArticleComposer();
    setCurrentArticleId(article.Id);
  }

  function unsetCurrentArticle() {
    setCurrentArticleId(null);
  }

  function closeArticleComposer() {
    setArticleComposerActive(false);
  }

  function openArticleComposer() {
    unsetCurrentArticle();
    setArticleComposerActive(true);
  }

  function addArticle(article) {
    setAllArticles([...allArticles, article]);
    onSave([...allArticles, article]);
    closeArticleComposer();
  }

  function deleteArticle(article) {
    setAllArticles(allArticles.filter(a => a.Id !== article.Id));
    onSave(allArticles.filter(a => a.Id !== article.Id));
    closeArticleComposer();
  }

  return (
    <div>
      <ArticleList
        allArticles={allArticles}
        currentArticleId={currentArticleId}
        onSelectArticle={setCurrentArticle}
        onDismissArticle={unsetCurrentArticle}
        onDeleteArticle={deleteArticle}
      />
      {articleComposerActive ? (
        <ArticleComposer onDeactivate={closeArticleComposer} onSave={addArticle} />
      ) : (
        <InactiveArticleComposer onActivate={openArticleComposer} />
      )}
    </div>
  );
}