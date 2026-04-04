import React from "react";

export default function InactiveArticleComposer({ onActivate }) {
  return (
    <div className="Row VotesRow Spacer" onClick={onActivate}>
      <h1 className="Title">
        <span className="Emphasis">
          Neuen Artikel erstellen
        </span>

        <div className="Badge">Neuen Artikel</div>
      </h1>
      <p>Klicke hier für einen neuen Artikel.</p>
    </div>
  );
}