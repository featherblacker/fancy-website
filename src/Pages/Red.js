import React from 'react';
import "./Red.css"
import {withRouter} from 'react-router-dom';


const Red = ({history}) => {

    return (
        <div className={"Red"}>
            <div className={"try-btn-container"}>
                <div className={"red-try-btn"} onClick={()=>history.push("/pricing")}>
                    <div className={"red-try-btn-text"}>
                        try it now
                    </div>
                </div>
            </div>

            <div className={"content"}>
                <div className={"red-left"}>
                    <div className={"red-title"}>superior sound</div>
                    <div className={"red-description"}>Experience live versions of your favourite songs.</div>
                    <div className={"red-btn"}>
                        <div className={"red-btn-text"}>
                            see demo
                        </div>
                    </div>
                </div>
                <div className={"red-right"}>
                    <div className={"left-speaker-container"}>
                        <img className={"left-speaker"} src={"medium17.png"} alt={""}/>
                    </div>
                    <div className={"right-speaker-container"}>
                        <img className={"right-speaker"} src={"medium27.png"} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Red);