import React from "react";

export default function VoteComposer({ onDeactivate }) {
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
          />
        </h1>
        <input
          className="Description"
          name="description"
          type="text"
          placeholder="Beschreibe deine Frage in einem Satz hier"
        />
      </div>

      <div className="ButtonBar">
        <button className="Button">Speichern</button>
        <button className="Button" onClick={onDeactivate}>Abbrechen</button>
      </div>
    </div>
  );
}