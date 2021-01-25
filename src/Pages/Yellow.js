import React from 'react';
import "./Yellow.css"

export const Yellow = ({history}) => {

    return (
        <div className={"Yellow"}>
            <div className={"try-btn-container"}>
                <div className={"yellow-try-btn"} onClick={()=>history.push("/pricing")}>
                    <div className={"yellow-try-btn-text"}>
                        try it now
                    </div>
                </div>
            </div>

            <div className={"content"}>

                <div className={"yellow-left"}>
                </div>
                <div className={"yellow-right"}>
                    <div className={"yellow-title"}>FRONT ROW SEATS</div>
                    <div className={"yellow-description"}>Experience concerts up close and personal.</div>
                    <div className={"yellow-btn"}>
                        <div className={"yellow-btn-text"}>
                            see demo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}