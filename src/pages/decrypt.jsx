import React, { Component } from "react";
import Store from "../server/api";
import inputHandle from "../utils/input";

class Decrypt extends Component {
  state = {
    tel: ""
  };
  findPasswd = async () => {
    let { tel } = this.state;
    alert(await Store.findPassword(tel));
  };

  render() {
    return (
      <div className="container" style={{ textAlign: "center", width: "100%" }}>
        <div style={{ textAlign: "left" }}>
          <h3>密码找回</h3>
          <div className="form-group">
            <label>手机号</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="输入用户名"
              name="tel"
              onChange={inputHandle.bind(this)}
              value={this.state.tel}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.findPasswd}
          >
            找回
          </button>
        </div>
      </div>
    );
  }
}

export default Decrypt;
