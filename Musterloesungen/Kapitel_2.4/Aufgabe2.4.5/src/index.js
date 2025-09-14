import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

import App from "./App";
import VotingCompontent from "./components/VotingComponent";

// Sample data
const vote = {
    title: "Wie ist dein Tag?",
    description:"Sag mir: Wie war es bisher?",
    choices: [
        {id: "choice_1", title: "Gut", count: 7},
        {id: "choice_2", title: "Schlecht", count: 12},
        {id: "choice_3", title: "Nicht sicher", count: 1},
    ]
}

// ReactDOM.render( in React 18 ncht mehr supportet, muss neu so geschrieben werden:
const root = createRoot(document.getElementById("root"));
root.render(
    <App>
        <VotingCompontent vote={vote} />
    </App>
);

