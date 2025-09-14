import React from "react";
import VotingComponent from "./VotingComponent";

export default function VoteList({allVotes}) {
  return (
    <div>
      {allVotes.map(vote =>
        
          <VotingComponent
            key={vote.id}
            vote={vote}
          />
        
      )}
    </div>
  );
}