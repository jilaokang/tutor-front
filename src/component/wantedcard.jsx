import React, { Component } from "react";

class WantedCard extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "100%", marginBottom: "8px" }}>
        <img
          className="card-img-top"
          src="http://img.cbigame.com/upload/images/2016/1023/1477200004265032.png"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.value.subject}</h5>
          <p className="card-text">{this.props.value.introduce}</p>
          <a href={"tel:" + this.props.value.tel} className="btn btn-primary">
            致电
          </a>
        </div>
      </div>
    );
  }
}

export default WantedCard;
