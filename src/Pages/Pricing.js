import React from 'react';
import "./Pricing.css";
import {withRouter} from "react-router-dom"
import Header from "../components/Header";
import {Footer} from "../components/Footer";

const Pricing = ({history}) => {

    return (
        <div className={"pricing"}>
            <Header/>
            <div className={"Perks"}>
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
            <Footer />
        </div>

    )
}

export default withRouter(Pricing);