import React from "react";

export default function App({children}) {
    return (
        <div className="Background">
            <div className="Header">
                <div className="Title">Vote als Service</div>
            </div>
            <div className="Main">
                <div className="Container">
                    { children }
                </div>
            </div>
        </div>
    )
}