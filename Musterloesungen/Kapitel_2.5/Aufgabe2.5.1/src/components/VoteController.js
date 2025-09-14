import React from "react";
import VoteList from "./VoteList";

export default function VoteController({ initialVotes }) {
  const [allVotes, setAllVotes] = React.useState(initialVotes);
  const [currentVoteId, setCurrentVoteId] = React.useState(null);

  function setCurrentVote(vote) {
    setCurrentVoteId(vote.id);
  }

  function unsetCurrentVote() {
    setCurrentVoteId(null);
  }

  
  return (
    <div>
      <VoteList
        allVotes={allVotes}
        currentVoteId={currentVoteId}
        onSelectVote={setCurrentVote}
        onDismissVote={unsetCurrentVote}
      />
    </div>
  );
}