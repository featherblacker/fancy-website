import React from 'react';
import "./Footer.css"
import {FiMail} from "react-icons/all";

export const Footer = ({history}) => {

    return (
        <div className={"Footer"}>
            <div className={"footer-upper"}>
                <FiMail color={"#FFFFFF"} size={45}/>

                <div className={"contact"}>

                    support@experienceconcerts.co</div>
            </div>
            <div className={"footer-lower"}>
                <div className={"footer-logo"}>
                    EXP|CON
                </div>
                <div className={"footer-copyright"}>
                    2019 © All Rights Reserved | Speer Technologies Incorporated
                </div>
            </div>
        </div>
    )
}