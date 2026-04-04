import React from "react";

export default function ArticleSummary({ article, onActivate }) {

  function handleClick() {
    onActivate(article);
  }

  return (
    <div onClick={handleClick} className="Row VotesRow Selectable">
      <h1 className="Title">
        {article.Titel}
      </h1>

      <p className="Emphasis">{article.Text}</p>
    </div>
  );
}