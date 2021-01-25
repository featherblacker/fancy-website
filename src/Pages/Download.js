import React from 'react';
import "./Download.css";
import {withRouter} from "react-router-dom";

const Download = ({history}) => {

    return (
        <div className={"Download"}>
            <div className={"content"}>
                <div className={"download-left"}>
                    <div className={"download-title"}> get exp|con now</div>
                    <div className={"download-description"}>Purchase and download the app.</div>
                </div>
                <div className={"download-right"}>
                    <div className={"download-btn-container"}>
                        <div className={"try-button"}>
                            <div className={"try-it-now"} onClick={() => history.push("/pricing")}>
                                TRY IT NOW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Download)