import React from "react";
import ArticleSummary from "./ArticleSummary";
import ArticleComponent from "./ArticleComponent";

export default function ArticleList({
  allArticles,
  currentArticleId,
  onSelectArticle,
  onDeleteArticle,
  onDismissArticle
}) {
  return (
    <div>
      {allArticles.map(article =>
        article.Id === currentArticleId ? (
          <ArticleComponent
            key={article.Id}
            article={article}
            onDismissArticle={onDismissArticle}
            onDeleteArticle={onDeleteArticle}
          />
        ) : (
          <ArticleSummary key={article.id} article={article} onActivate={onSelectArticle} />
        )
      )}
    </div>
  );
}