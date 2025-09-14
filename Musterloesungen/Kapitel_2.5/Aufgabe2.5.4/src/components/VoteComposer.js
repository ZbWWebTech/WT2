import React from "react";

export default function VoteComposer({ onSave, onDeactivate }) {
  const [voteTitle, setVoteTitle] = React.useState("");
  const [voteDescription, setVoteDescription] = React.useState("");
  const [choices, setChoices] = React.useState([""]);

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
    const newVote = {
      id: `vote_${Date.now()}`, // einfache version für jetzt
      title: voteTitle,
      description: voteDescription,
      choices: choices
        .slice(0, -1)
        .map((c, ix) => ({ title: c, id: `choice_${ix}`, count: 0 }))
    };

    onSave(newVote);
  }

  const formCompleted =
    voteTitle &&
    voteDescription &&
    choices.length > 1 &&
    choices.every((c, ix) => ix === choices.length - 1 || c.length > 0);

  return (
    <div className="Row VoteComposer Spacer">
      <div className="Head">
        <h1 className="Title">
          <input
            className="Title"
            autoFocus
            name="title"
            type="text"
            placeholder="Was willst du wissen ?"
            value={voteTitle}
            onChange={e => setVoteTitle(e.target.value)}
          />
        </h1>
        <input
          className="Description"
          name="description"
          type="text"
          placeholder="Beschreibe hier deine Frage in einem Satz."
          value={voteDescription}
          onChange={e => setVoteDescription(e.target.value)}
        />
      </div>

      <div className="Body">
        {choices.map((choice, ix) => (
          <input
            className="Choice"
            type="text"
            key={`choices_${ix}`}
            value={choice}
            placeholder={`Antwort #${ix + 1}`}
            onChange={event => updateChoice(ix, event.target.value)}
          />
        ))}
        <div className="ButtonBar">
          <button disabled={!formCompleted} className="Button" onClick={save}>
            Speichern
          </button>
          <button className="Button" onClick={onDeactivate}>
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}