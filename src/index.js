import React from "react";
import ReactDom from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "tq-layout/main.css";
import './style/main.css';

import AppRouter from './router/route'

ReactDom.render( < AppRouter / > , document.getElementById("root"));

serviceWorker.unregister();