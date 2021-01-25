import React from 'react';
import "./Blue.css";
import { AiFillStar } from "react-icons/ai";

export const Blue = ({history}) => {

    return (
        <div className={"Blue"}>
            <div className={"try-btn-container"}>
                <div className={"blue-try-btn"}>
                    <div className={"blue-try-btn-text"}>
                        try it now
                    </div>
                </div>
            </div>

            <div className={"content"}>

                <div className={"blue-left"}>
                    <div className={"upper-speaker"}>
                        <img src={"SmallSpeaker1-03.png"} alt={""}/>
                    </div>
                    <div className={"lower-speaker"}>
                        <img src={"SmallSpeaker2-03.png"} alt={""}/>
                    </div>
                </div>
                <div className={"blue-right"}>
                    <div className={"blue-title"}>reviews</div>
                    <div className={"blue-cards"}>
                        <div className={"blue-card"}>
                            <div className={"stars"}>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                            </div>
                            <div className={"people"}>ARTIST</div>
                            <div className={"saying"}>“Love it, it’s the Best.I can’t live without it!”</div>
                        </div>
                        <div className={"blue-card"}>
                            <div className={"stars"}>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                            </div>                            <div className={"people"}>PRODUCER</div>
                            <div className={"saying"}>“Love it, it’s the Best.I can’t live without it!”</div>
                        </div>
                        <div className={"blue-card"}>
                            <div className={"stars"}>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                                <AiFillStar size={35}/>
                            </div>                            <div className={"people"}>MUSIC FAN</div>
                            <div className={"saying"}>“Love it, it’s the Best.I can’t live without it!”</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}