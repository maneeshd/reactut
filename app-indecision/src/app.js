/*
* Indecision: A simple app to randomly pick an option from a list using React Components
*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

"use strict";

import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Indecision from "./components/Indecision";
import "./styles/styles.css";


ReactDOM.render(<Indecision />, document.getElementById("app"));