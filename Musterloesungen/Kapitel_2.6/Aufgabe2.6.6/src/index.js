import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

import App from "./App";
import VoteListPage from "./components/VoteListPage";



// ReactDOM.render( in React 18 ncht mehr supportet, muss neu so geschrieben werden:
const root = createRoot(document.getElementById("root"));
root.render(
    <App>
        <VoteListPage  />
    </App>
);

