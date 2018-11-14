import React, { Component } from "react";
import Store from "../server/api";
import inputHandle from "../utils/input";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.inputHandle = inputHandle.bind(this);
  }

  state = {
    user: "",
    password: "",
    tel: ""
  };

  userSignup = async () => {
    let { user, password, tel } = this.state;

    alert(await Store.signup(user, password, tel));
    this.props.history.push("/");
  };

  reToken = e => {
    this.state.password === e.target.value
      ? (e.target.style.color = "green")
      : (e.target.style.color = "red");
  };

  render() {
    return (
      <div className="container" style={{ textAlign: "center", width: "100%" }}>
        <div style={{ textAlign: "left" }}>
          <h3>注册</h3>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="输入用户名"
              name="user"
              value={this.state.user}
              onChange={this.inputHandle}
            />
            <small className="form-text text-muted">用于账户登录。</small>
          </div>
          <div className="form-group">
            <label>手机号</label>
            <input
              type="text"
              className="form-control"
              placeholder="请输入手机号"
              name="tel"
              value={this.state.tel}
              onChange={this.inputHandle}
            />
          </div>
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              className="form-control"
              placeholder="输入密码"
              name="password"
              value={this.state.password}
              onChange={this.inputHandle}
            />
          </div>
          <div className="form-group">
            <label>验证</label>
            <input
              type="password"
              className="form-control"
              placeholder="请再次输入密码"
              onChange={this.reToken}
            />
          </div>
          <button
            onClick={this.userSignup}
            type="submit"
            className="btn btn-primary"
          >
            注册
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
