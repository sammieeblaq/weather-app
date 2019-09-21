import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route />
                        <Route />
                        <Route />
                        <Route />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;