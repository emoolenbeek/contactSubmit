require("./main.scss");

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import {contacts} from "./data/contacts";

let state = {};
function setState(changes) {
    state = Object.assign({}, state, changes);

    ReactDOM.render(React.createElement(Main, state), document.getElementById("react-app"));
}

setState({contactList: contacts});