import React from "react";
import VoteList from "./VoteList";

export default function VoteController({ initialVotes }) {
  const [allVotes, setAllVotes] = React.useState(initialVotes);


  return (
    <div>
      <VoteList
        allVotes={allVotes}
      />
    </div>
  );
}