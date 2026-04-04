import React from "react";
import ChoiceBar from "./ChoiceBar";

export default function ArticleComponent({ article, onDeleteArticle, onDismissArticle}) {

    function deleteArticle() {
        onDeleteArticle(article);
    }

    return (
        <div className="Row VotingRow Spacer">
            <div className="Head">
                <h1 className="Title">
                    {article.Title}
                    <div className="Badge">{Text}</div>
                </h1>
                <div className="Description Emphasis">{article.Titel}</div>
            </div>
            <div className="ButtonBar">
            <div className="Button" onClick={deleteArticle}>Delete</div>
            <div className="Button" onClick={onDismissArticle}>Cancel</div>
            </div>
        </div>
    );
}