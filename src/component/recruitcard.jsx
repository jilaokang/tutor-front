import React, { Component } from "react";

class WantedCard extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "100%", marginBottom: "8px" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.value.subject}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.props.value.grade} {this.props.value.salary}元/天
          </h6>
          <p className="card-text">{this.props.value.introduce}</p>
          <a href={"tel:" + this.props.value.tel} className="card-link">
            致电
          </a>
        </div>
      </div>
    );
  }
}

export default WantedCard;
