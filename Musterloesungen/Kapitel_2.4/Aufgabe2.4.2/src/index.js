import React from "react";
import { createRoot } from 'react-dom/client';
import ChoiceBar from "./components/ChoiceBar";
import "./index.css";


// ReactDOM.render( in React 18 ncht mehr supportet, muss neu so geschrieben werden:
const root = createRoot(document.getElementById("root"));
root.render(
    <ChoiceBar />
);

