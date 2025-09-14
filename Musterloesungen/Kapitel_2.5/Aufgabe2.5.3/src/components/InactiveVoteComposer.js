import React from "react";

export default function InactiveVoteComposer({ onActivate }) {
  return (
    <div className="Row VotesRow Spacer" onClick={onActivate}>
      <h1 className="Title">
        <span className="Emphasis">
          Was willst <b>du</b> wissen ?
        </span>

        <div className="Badge">Neue Frage</div>
      </h1>
      <p>Klicke hier für eine neue Frage.</p>
    </div>
  );
}