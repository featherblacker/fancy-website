import React from 'react';
import {withRouter} from "react-router-dom";
import "./Test.css";
import Slider from "react-slider-light";

const Test = ({history}) => {

    return (
        <div className={"test"}>
            <Slider speed={1000} delay={1000}>
                <div>
                    <img src={"Image 1.png"}  alt={""} className={"imgs"}/>
                </div>
                <div>
                    <img src={"Image 2.png"}  alt={""} className={"imgs"}/>
                </div>
                <div>
                    <img src={"Image 3.png"}  alt={""} className={"imgs"}/>
                </div>
            </Slider>
        </div>
    )
}

export default withRouter(Test);