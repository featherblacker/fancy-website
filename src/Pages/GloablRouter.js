import {Switch, Route, withRouter} from "react-router-dom";
import React from "react";
import Pricing from "./Pricing";
import LandingPage from "./LandingPage"
import Test from "./Test"

const GlobalRouter = ({history}) =>{

    return(
        <div>
            <Switch>
                <Route exact path={"/"} component={LandingPage} />
                <Route exact path={"/pricing"} component={Pricing} />
                <Route exact path={"/test"} component={Test} />
            </Switch>
        </div>
    )
}

export default withRouter(GlobalRouter);