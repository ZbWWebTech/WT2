import React from "react";
import { Routes, Route  } from 'react-router-dom';
import ArticleListPage from "./components/ArticleListPage";
import About from "./components/About";
import { Link } from "react-router-dom";


export default function App() {
    return (
        <div className="Background">
            <div className="Header">
                <div className="Title">Redaktionstool</div>
            </div>
            <div className="Main">
                <div className="Container">
                    <div className="Row VotesRow">
                        <nav>
                            <Link to="/">Artikel</Link> | 
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                    <Routes>
                        <Route exact path="/" element={<ArticleListPage  />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}