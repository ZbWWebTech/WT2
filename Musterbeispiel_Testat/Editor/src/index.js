import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";




// ReactDOM.render( in React 18 ncht mehr supportet, muss neu so geschrieben werden:
const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App />
    </Router>
);

