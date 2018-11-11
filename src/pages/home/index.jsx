import React, { Component } from "react";
class Index extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Tutor</h1>
        <h6>
          <span className="badge badge-secondary">@copyright</span>
        </h6>
        <div className="card" style={{ width: "100%" }}>
          <img
            className="card-img-top"
            src="http://www.dgqjj.com/focus/image03.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Index;
