import Home from "./Home";
import React from "react";
import Red from "./Red.js"
import {Yellow} from "./Yellow";
import Perks from "./Perks";
import {Blue} from "./Blue";
import Download from "./Download";
import {Footer} from "../components/Footer";
import "./LandingPage.css";
import Header from "../components/Header";
import {withRouter} from 'react-router-dom';


const LandingPage =()=>{


    return (
        <div className={"landing"}>
            <Header />
            <Home />
            <Red />
            <Yellow />
            <Perks />
            <Blue />
            <Download />
            <Footer />
        </div>
    )
}

export default withRouter(LandingPage);
