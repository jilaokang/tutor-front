import React, { Component } from "react";

class Serarch extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="form-inline" style={{ marginBottom: "16px" }}>
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="请输入搜索内容"
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              style={{ border: "1px solid #eee" }}
              className="btn"
            >
              搜索
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Serarch;
