import React, { Component } from "react";
import { Link } from "react-router-dom";

class Me extends Component {
  state = {};
  render() {
    return (
      <div className="container ">
        <h4 className="right">欢迎您。</h4>
        <div
          style={{
            background: "#eeeeee",
            lineHeight: "2.5",
            textIndent: "1em",
            fontWeight: "bold",
            margin: "5px 0"
          }}
        >
          <Link to="/recruit">发布招聘</Link>
        </div>
        <div
          style={{
            background: "#eeeeee",
            lineHeight: "2.5",
            textIndent: "1em",
            fontWeight: "bold",
            margin: "5px 0"
          }}
        >
          <Link to="/wanted">发布求职</Link>
        </div>
      </div>
    );
  }
}

export default Me;
