import React, { Component } from "react";
import { render } from "react-dom";
import HomeRouter from "./router";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomeRouter />
            </div>
        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv);