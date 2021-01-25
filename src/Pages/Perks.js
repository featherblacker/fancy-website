import React from 'react';
import "./Perks.css";
import {withRouter} from "react-router-dom";

const Perks = ({history}) => {

    return (
        <div className={"Perks"} id={"perks"}>
            <div className={"try-btn-container"}>
                <div className={"try-button"}>
                        <div className={"try-it-now"} onClick={() => history.push("/pricing")}>
                            TRY IT NOW
                        </div>
                </div>
            </div>

            <div className={"perks-content"}>
                <div className={"perks-title"}>
                    perks
                </div>
                <div className={"features"}>
                    <div className={"feature"}>
                        <div className={"line"}/>
                        <div className={"feature-title"}>
                            Subscription Payment Model
                        </div>
                        <div className={"feature-description"}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </div>
                    </div>
                    <div className={"feature"}>
                        <div className={"line"}/>
                        <div className={"feature-title"}>
                            No Fee Cancelation Policy
                        </div>
                        <div className={"feature-description"}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </div>
                    </div>
                    <div className={"feature"}>
                        <div className={"line"}/>
                        <div className={"feature-title"}>
                            Subscription Payment Model
                        </div>
                        <div className={"feature-description"}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Perks);