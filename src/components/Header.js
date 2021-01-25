import './Header.css'
import {FiMenu} from "react-icons/fi";
import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import gsap from 'gsap';

const Header = ({history}) => {
    let [unfold, setUnfold] = useState(false);

    const tl = gsap.timeline({defaults:{ease: "power1.out"}})
    tl.to(".page", { y: "0%", duration: 1, stagger: 0.25 });


    const handleMenuButton = () => {
        setUnfold(!unfold);
        console.log(unfold)
    }
    return (
        <div className={"menu"}>
            <div className={"menu-button"} onClick={() => handleMenuButton()}>
                <FiMenu color={'white'} size={"48px"}/>
            </div>
            <div className={"menu-title"}>
                EXP|CON
            </div>
            {unfold ? (<div className={"menu-unfold"}>
                    <div className={"hide"} onClick={() => history.push("/")}>
                        <div className={"page"}>What is it</div>
                    </div>
                    <div className={"hide"}>
                        <div className={"page"} onClick={() => history.push("/")}>perks</div>
                    </div>
                    <div className={"hide"}>
                        <div className={"page"} onClick={() => history.push("/pricing")}>pricing</div>
                    </div>
                </div>
            ) : ""}
        </div>
    )
}

export default withRouter(Header);
