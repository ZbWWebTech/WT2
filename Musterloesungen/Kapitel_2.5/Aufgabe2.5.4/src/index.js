import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

import App from "./App";
import VoteController from "./components/VoteController";

// Sample data
const allVotes = [ 
    {
        id:"vote_1",
        title: "Wie ist dein Tag?",
        description:"Sag mir: Wie war es bisher?",
        choices: [
            {id: "choice_1", title: "Gut", count: 7},
            {id: "choice_2", title: "Schlecht", count: 12},
            {id: "choice_3", title: "Nicht sicher", count: 1},
        ]
    },
    {
        id:"vote_2",
        title: "Programmiersprachen ?",
        description:"Welche magst du am liebsten?",
        choices: [
            {id: "choice_1", title: "JavaScript", count: 99},
            {id: "choice_2", title: "C#/.Net", count: 1},
            {id: "choice_3", title: "Nicht sicher", count: 1},
        ]
        
    }
];

// ReactDOM.render( in React 18 ncht mehr supportet, muss neu so geschrieben werden:
const root = createRoot(document.getElementById("root"));
root.render(
    <App>
        <VoteController initialVotes={allVotes} />
    </App>
);

