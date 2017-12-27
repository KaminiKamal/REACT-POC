import React from "react";
import ReactDOM from "react-dom";
import {bake_cookie, read_cookie} from "sfcookies";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import reducer from "./reducers";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import FilterPage from "./components/FilterPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeTabContent from "./components/HomeTabContent";

require("./js/script");

const store = createStore(reducer);

// if(localStorage.getItem("email") !== null)
// {
// 	console.log("user signed in")
// 	const { email } = localStorage.getItem("email");
// 	browserHistory.push("/homepage");
// }
//
// if(localStorage.getItem("email") === null)
// {
// 	console.log("not signedin ");
// 	browserHistory.replace("/signin");
// }
/* include this to define your routes */
ReactDOM.render(
<Provider store = {store}>
	<Router path = "/" history={browserHistory}>
		<Router path="/home" component={Home} />
		<Router path="/homepage" component={HomePage} />
		<Router path="/signin" component={SignIn} />
		<Router path="/signup" component={SignUp} />
		<Router path="/HomeTabContent" component={HomeTabContent} />
	</Router>
</Provider>
, document.getElementById("root")
);
