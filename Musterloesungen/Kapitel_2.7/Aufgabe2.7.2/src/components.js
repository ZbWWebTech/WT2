import React from "react";

import { Link, useParams } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Das ist unser kleines ReactRouter-Beispiel.</p>
      <Link to="/about">About</Link>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link> | 
      <Link to="/votes">Votes</Link>
    </div>
  );
}

export function Votes() {
  return (
    <div>
      <h1>Votes</h1>
      <Link to="/vote/1">Vote 1</Link> | 
      <Link to="/vote/2">Vote 2</Link> | 
      <Link to="/">Home</Link>
    </div>
  );
}

export function Vote() {
  const params = useParams();
  return (
    <div>
      <h1>Vote</h1>
      <div>Es wurde Vote # {params.voteId} gewählt</div>
      <Link to="/votes">Votes</Link>
    </div>
  );

}