import React from 'react';
import './Home.css';
import './Home.scss';
import {withRouter} from "react-router-dom";
import Slider from "react-slick";

export const Home = ({history}) => {

    return (
        <div className={"Hero"}>
            <div className={"title"}>
                <div className={"slogan"}>
                    INTERACTIVE CONCERT EXPERIENCE
                </div>
                <div className={"description"}>
                    Experience your favourite artists like never before and from the comfort of your own home.
                </div>
                <div className={"try-button"}>
                    <div className={"try-it-now"} onClick={() => history.push("/pricing")}>
                        TRY IT NOW
                    </div>
                </div>
            </div>
            {/*<div className={"slider"}>*/}
            {/*    <div className={"slider-point"}/>*/}
            {/*    <div className={"slider-point"}/>*/}
            {/*    <div className={"slider-point"}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default withRouter(Home);