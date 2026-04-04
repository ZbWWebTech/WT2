import React from "react";

export default function ArticleComposer({ onSave, onDeactivate }) {
  const [articleTitle, setArticleTitle] = React.useState("");
  const [articleDescription, setArticleDescription] = React.useState("");
  const titleInputRef = React.useRef();

  function updateChoice(choiceIx, choiceTitle) {
    const newChoices = choices.map((c, ix) =>
      ix === choiceIx ? choiceTitle : c
    );

    // ein leeres choice-Feld anlegen, wenn wir bisher noch keine Frage eingegeben haben
    if (choices[choiceIx].length === 0 && choiceIx === choices.length - 1) {
      newChoices.push("");
    }

    setChoices(newChoices);
  }

  function save() {
    const summary = articleDescription.substring(0, 10) + "...";
    const newArticle = {
      Id: `a_${Date.now()}`, // einfache version für jetzt
      Titel: articleTitle,
      Text: articleDescription,
      Summary: summary
    };

    onSave(newArticle);
  }

  function reset() {
    // clear form
    setArticleTitle("");
    setVoteDescription("");

    // re-focus aufs erste Input-Feld
    titleInputRef.current.focus();
  }

  const formCompleted = articleTitle && articleDescription;

  return (
    <div className="Row VoteComposer Spacer">
      <div className="Head">
        <h1 className="Title">
          <input
            className="Title"
            autoFocus
            name="title"
            type="text"
            placeholder="Der Titel des Artikels."
            value={articleTitle}
            onChange={e => setArticleTitle(e.target.value)}
            ref={titleInputRef}
          />
        </h1>
        <input
          className="Description"
          name="description"
          type="text"
          placeholder="Der Text des Artikels."
          value={articleDescription}
          onChange={e => setArticleDescription(e.target.value)}
        />
      </div>

      <div className="Body">
        <div className="ButtonBar">
          <button disabled={!formCompleted} className="Button" onClick={save}>
            Speichern
          </button>
          <button className="Button" onClick={onDeactivate}>
            Abbrechen
          </button>
          <button className="Button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}