import React from "react";
import VoteController from "./VoteController";
import VoteLoadingIndicator from "./VoteLoadingIndicator";
import { fetchJson, sendJson } from "../backend";

export default function VoteListPage() {
  const [allVotes, setAllVotes] = React.useState(null);

  async function loadVotes() {
    const votes = await fetchJson("/votes");
    setAllVotes(votes);
  }

  async function saveVotes(votes) {
    await sendJson("POST", "/votes", votes);
  }

  React.useEffect(() => {
    loadVotes();
  }, []);

  if (!allVotes) {
    return <VoteLoadingIndicator />;
  }

  return <VoteController votes={allVotes} onSave={saveVotes} />;
}